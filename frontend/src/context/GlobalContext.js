import React, { useState, useContext } from "react";
import axios from "axios";

const BASE_URL = "https://family-expense-backend.vercel.app/api/v1";

const GlobalContext = React.createContext();

export const GlobalProvider = ({ children }) => {
  const [incomes, setIncomes] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [error, setError] = useState(null);

  const addIncome = async (income) => {
    const respone = await axios.post(`${BASE_URL}/add-income`, income).catch((error) => setError(error.respone.data.message));
    getIncomes();
  };

  const getIncomes = async () => {
    const response = await axios.get(`${BASE_URL}/get-incomes`);
    setIncomes(response.data);
  };

  const deleteIncome = async (id) => {
    const response = await axios.delete(`${BASE_URL}/delete-income/${id}`);
    getIncomes();
  };

  const totalIncomes = (totalIncome = 0) => {
    incomes.forEach((income) => {
      totalIncome = totalIncome + income.amount;
    });

    return totalIncome;
  };

  const addExpense = async (expense) => {
    const respone = await axios.post(`${BASE_URL}/add-expense`, expense).catch((error) => setError(error.respone.data.message));
    getExpenses();
  };

  const getExpenses = async () => {
    const response = await axios.get(`${BASE_URL}/get-expenses`);
    setExpenses(response.data);
  };

  const deleteExpense = async (id) => {
    const response = await axios.delete(`${BASE_URL}/delete-expense/${id}`);
    getExpenses();
  };

  const totalExpenses = (totalExpense = 0) => {
    expenses.forEach((expense) => {
      totalExpense = totalExpense + expense.amount;
    });

    return totalExpense;
  };

  return (
    <GlobalContext.Provider
      value={{ addIncome, getIncomes, incomes, deleteIncome, totalIncomes, expenses, addExpense, getExpenses, deleteExpense, totalExpenses }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
