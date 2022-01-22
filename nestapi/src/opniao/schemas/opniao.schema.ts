import * as mongoose from 'mongoose';

export const OpniaoSchema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    email: String,
    phone: String,
    address: String,
    description: String,
    satisfacao: Number,
    created_at: { type: Date, default: Date.now }
})