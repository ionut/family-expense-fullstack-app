const mongoose = require('mongoose');

// Define the User schema
const expenseModelSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        maxLength: 64
    },
    amount: {
        type: Number,
        required: true,
        trim: true,
        maxLength: 22
    },
    type: {
        type: String,
        default: "expense"
    },
    date: {
        type: Date,
        required: true,
        trim: true
    },
    category: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        maxLength: 64,
        trim: true
    }
}, { timestamps: true });

module.exports = mongoose.model('Expense', expenseModelSchema)