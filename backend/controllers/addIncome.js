const incomeModelSchema = require("../models/incomeModel");

exports.addIncome = async (req, res) => {
  const { title, amount, category, description, date } = req.body;

  const income = incomeModelSchema({
    title,
    amount,
    category,
    description,
    date,
  });

  try {
    // validations
    if (!title || !category || !description || !date) {
      return res.status(400).json({ message: "Complete all fields!" });
    }
    if (!amount === "number" || amount <= 0) {
      return res.status(400).json({ message: "Amount must be higher than 0 or not empty!" });
    }
    await income.save();
    res.status(200).json({ message: "Income added!" });
  } catch (error) {
    res.status(500).json({ message: "Server error!" });
  }
  console.log(income);
};

exports.getIncomes = async (req, res) => {
  try {
    const incomes = await incomeModelSchema.find().sort({ createdAt: -1 });
    res.status(200).json(incomes);
  } catch (error) {
    res.status(500).json({ message: "Server error!" });
  }
};
exports.deleteIncome = async (req, res) => {
  const { id } = req.params;
  incomeModelSchema
    .findByIdAndDelete(id)
    .then((income) => {
      res.status(200).json({ message: "Income deleted!" });
    })
    .catch((error) => {
      res.status(500).json({ message: "Server Error!" });
    });
};
