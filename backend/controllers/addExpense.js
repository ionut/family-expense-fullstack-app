const expenseModelSchema = require('../models/expenseModel')

exports.addExpense = async (req, res) => {
    const { title, amount, category, description, date } = req.body;

    const expense = expenseModelSchema({
        title, amount, category, description, date
    })

    try {
        // validations
        if (!title || !category || !description || !date) {
            return res.status(400).json({ message: 'Complete all fields!' })
        }
        if (!amount === 'number' || amount <= 0) {
            return res.status(400).json({ message: 'Amount must be higher than 0 or not empty!' })
        }
        await expense.save()
        res.status(200).json({ message: "expense added!" })
    } catch (error) {
        res.status(500).json({ message: "Server error!" })
    }
    console.log(expense)
}

exports.getExpenses = async (req, res) => {
    try {
        const expenses = await expenseModelSchema.find().sort({ createdAt: -1 })
        res.status(200).json(expenses);
    } catch (error) {
        res.status(500).jsoj({ message: "Server error!" })
    }
}
exports.deleteExpense = async (req, res) => {
    const { id } = req.params;
    expenseModelSchema.findByIdAndDelete(id)
        .then((expense) => {
            res.status(200).json({ message: 'expense deleted!' });
        })
        .catch((error) => {
            res.status(500).json({ message: 'Server Error!' })
        })

}