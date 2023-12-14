const { addIncome, getIncomes, deleteIncome } = require('../controllers/addIncome');
const { addExpense, getExpenses, deleteExpense } = require('../controllers/addExpense');
const router = require('express').Router();

router.post('/add-income', addIncome)
    .get('/get-incomes', getIncomes)
    .delete('/delete-income/:id', deleteIncome)
    .post('/add-expense', addExpense)
    .get('/get-expenses', getExpenses)
    .delete('/delete-expense/:id', deleteExpense)

module.exports = router 