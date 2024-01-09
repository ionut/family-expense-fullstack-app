import styled from "styled-components";
import { bills, bonus, business, calendar, car, cart, cheese, comment, food, home, money, outside, piggy, trash } from "../../utils/icons";
import Button from "../Button/Button";
import { dateFormat } from "../../utils/dateFormat";
function IncomeItem({ id, title, amount, date, category, description, deleteItem, indicatorColor, type }) {
  const categoryIcon = () => {
    switch (category) {
      case "salary":
        return money;
      case "fromaj":
        return cheese;
      case "busines":
        return business;
      case "bonus":
        return bonus;
      case "other":
        return piggy;
      default:
        return;
    }
  };

  const expenseCatIcon = () => {
    switch (category) {
      case "groceries":
        return food;
      case "outside":
        return outside;
      case "personal":
        return cart;
      case "bills":
        return bills;
      case "fromaj":
        return cheese;
      case "rent":
        return home;
      case "car":
        return car;
      default:
        return "";
    }
  };

  return (
    <IncomeItemStyled indicatorColor={indicatorColor}>
      <div className="content">
        <div className="icon">{type === "expense" ? expenseCatIcon() : categoryIcon()}</div>
        <h5>{title}</h5>
      </div>
      <div className="content">
        <div className="inner-content">
          <div className="text">
            <p>{amount} RON</p>
            <p>
              {calendar} {dateFormat(date)}
            </p>
            <p>
              {comment} {description}
            </p>
          </div>
          <div className="btn-con">
            <Button
              icon={trash}
              bPad={".6rem"}
              bRad={"50%"}
              bg={"var(--primary-color"}
              color={"#fff"}
              iColor={"#fff"}
              hColor={"var(--color-green)"}
              onClick={() => deleteItem(id)}
            />
          </div>
        </div>
      </div>
    </IncomeItemStyled>
  );
}

const IncomeItemStyled = styled.div`
  background: #fcf6f9;
  border: 2px solid #ffffff;
  box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
  border-radius: 20px;
  padding: 1rem;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 100%;
  color: #0F1035;
  @media (min-width: 768px) {
    flex-direction: row;
  }
  .icon {
    width: 45px;
    height: 45px;
    border-radius: 20px;
    background: #f5f5f5;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid #ffffff;
    @media (min-width: 767px) {
      width: 80px;
      height: 80px;
    }
    i {
      font-size: 1.5rem;
      @media (min-width: 767px) {
        font-size: 2.6rem;
      }
    }
  }

  .content {
    // flex: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.2rem;
    h5 {
      font-size: 1.3rem;
      padding-left: 0.2rem;
      position: relative;
      &::before {
        content: "";
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        width: 0.8rem;
        height: 0.8rem;
        border-radius: 50%;
        background: ${(props) => props.indicator};
      }
    }

    .inner-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 0.5rem;
      .text {
        display: flex;
        align-items: center;
        gap: 0.2rem;
        @media (min-width: 768px) {
          gap: 1.5rem;
        }
        p {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--primary-color);
          opacity: 0.8;
        }
      }
    }
  }
`;

export default IncomeItem;
