import { randomUUID } from 'crypto';
import * as mongoose from 'mongoose';

export const ItemSchema = new mongoose.Schema({
    _id: {
        type: String,
        default: randomUUID
    },
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    quantity: {
        type: Number,
        required: true,
    }
})