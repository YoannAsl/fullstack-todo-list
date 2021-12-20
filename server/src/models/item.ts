import mongoose from 'mongoose';

const itemSchema = new mongoose.Schema({
    content: String,
    isCompleted: Boolean,
});

export const Item = mongoose.model('Item', itemSchema);
