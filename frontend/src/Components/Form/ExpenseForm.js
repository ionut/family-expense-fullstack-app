import { useState } from "react";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useGlobalContext } from "../../context/GlobalContext";
import Button from "../Button/Button";
import { plus } from "../../utils/icons";

function ExpenseForm() {
  const { addExpense, getExpenses } = useGlobalContext();
  const [inputState, setInputState] = useState({
    title: "",
    amount: "",
    date: "",
    category: "",
    description: "",
  });

  const { title, amount, date, category, description } = inputState;

  const handleInput = (name) => (e) => {
    setInputState({ ...inputState, [name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addExpense(inputState);
    setInputState({
      title: "",
      amount: "",
      date: "",
      category: "",
      description: "",
    });
    getExpenses();
  };

  return (
    <FormStyled onSubmit={handleSubmit}>
      <div className="input-control">
        <input type="text" value={title} name={"title"} placeholder="Expense title" onChange={handleInput("title")} className="input-control" required />
      </div>
      <div className="input-control">
        <input type="number" value={amount} name={"amount"} placeholder="Expense amount" onChange={handleInput("amount")} className="input-control" required />
      </div>
      <div className="input-control">
        <DatePicker
          id="date"
          placeholderText="Enter A Date"
          selected={date}
          dateFormat="dd/MM/yyyy"
          onChange={(date) => {
            setInputState({ ...inputState, date: date });
          }}
          required
        />
      </div>
      <div className="selects input-control">
        <select required value={category} name="category" id="category" onChange={handleInput("category")}>
          <option value="" disabled>
            Select Option
          </option>
          <option value="groceries">Mancare + casa</option>
          <option value="outside">Iesiri</option>
          <option value="personal">Personale</option>
          <option value="bills">facturi</option>
          <option value="fromaj">Fromaj</option>
          <option value="rent">Chirie</option>
          <option value="car">Masina</option>
        </select>
      </div>
      <div className="input-control">
        <textarea
          name="description"
          value={description}
          placeholder="Add A Reference"
          id="description"
          cols="30"
          rows="4"
          onChange={handleInput("description")}
          required
        ></textarea>
      </div>
      <div className="submit-btn">
        <Button name={"Add Expense"} icon={plus} bPad={".8rem 1.6rem"} bRad={"30px"} bg={"var(--primary-color"} color={"#fff"} />
      </div>
    </FormStyled>
  );
}

const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  input,
  textarea,
  select {
    font-family: inherit;
    font-size: inherit;
    outline: none;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    border: 2px solid #fff;
    background: transparent;
    resize: none;
    width: 100%;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    color: rgba(15, 16, 53, 0.9);
    &::placeholder {
      color: rgba(15, 16, 53, 0.4);
    }
  }
  .input-control {
    input {
      width: 100%;
    }
  }

  .selects {
    display: flex;
    justify-content: flex-end;
    select {
      color: rgba(15, 16, 53, 0.4);
      &:focus,
      &:active {
        color: rgba(15, 16, 53, 1);
      }
    }
  }

  .submit-btn {
    button {
      box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
      &:hover {
        background: red !important;
      }
    }
  }
`;

export default ExpenseForm;
