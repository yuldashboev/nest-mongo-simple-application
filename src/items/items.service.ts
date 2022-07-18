import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ItemI } from './interfaces/item.interface';

@Injectable()
export class ItemsService {
    constructor(@InjectModel('Item') private readonly itemModel:Model<ItemI> ) {}

    async getAll(): Promise<ItemI[]> {
        return await this.itemModel.find()  
    }

    async getById(id: string): Promise<ItemI> {
       return await this.itemModel.findOne({ _id: id })
    }

    async createItem(createItemBody: ItemI): Promise<ItemI> {
        const newItem = new this.itemModel(createItemBody)
        return await newItem.save();
    
    }

    async updateItem(updateItemBody: ItemI, id: string): Promise<ItemI> {
        return await this.itemModel.findOneAndUpdate(
            { _id: id },
            { $set: {
                name: updateItemBody.name,
                description: updateItemBody.description,
                quantity: updateItemBody.quantity
            }},
            {
                upsert: false,
                new: true,
            }
        );
    }

    async deleteItem(id: string): Promise<any> {
        return await this.itemModel.deleteOne({ _id: id });
    }
}
