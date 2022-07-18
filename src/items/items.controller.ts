import { Controller, Logger, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { CreateItemDto } from './dto/create-item.dto';
import { ItemI } from './interfaces/item.interface';
import { ItemsService } from './items.service';

@Controller('items')
export class ItemsController {
    constructor(private readonly itemsService: ItemsService) {}
    private readonly logger = new Logger(ItemsController.name);

    @Get()
    async getAllItems(): Promise<ItemI[]> {
        this.logger.log('Requested getAllItems Endpoint')
        return await this.itemsService.getAll()
    }

    @Get(':id')
    async getItemByID(@Param("id") id: string): Promise<ItemI> {
        this.logger.log('Requested getItemByID Endpoint')
        return await this.itemsService.getById(id);
    }

    @Post()
    async createItem(@Body() createItemDto: CreateItemDto): Promise<ItemI>{
        this.logger.log('Requested createItem Endpoint')
        return await this.itemsService.createItem({
            id: randomUUID(),
            name: createItemDto.name,
            description: createItemDto.description,
            quantity: createItemDto.quantity
        })
    }

    @Put(':id')
    async updateItem(@Body() updateItemDto: CreateItemDto, @Param('id') id: string): Promise<ItemI> {
        this.logger.log('Requested updateItem Endpoint')
        return await this.itemsService.updateItem({
            name: updateItemDto.name,
            description: updateItemDto.description,
            quantity: updateItemDto.quantity
        }, id)
    }

    @Delete(':id')
    async deleteItem(@Param('id') id: string): Promise<string> {
        this.logger.log('Requested deleteItem Endpoint')
        this.itemsService.deleteItem(id)
        return `deleted: ${id}`
    }
}
