import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../../styles/Layout";
import Chart from "../Chart/Chart";
import { useGlobalContext } from "../../context/GlobalContext";
import History from "../History/History";

function Dashboard() {
  const { totalIncomes, totalExpenses, totalBalance } = useGlobalContext();

  return (
    <DashboardStyled>
      <InnerLayout>
        <h1>All transactions</h1>
        <div className="stats-container">
          <div className="chart-container">
            <Chart />
            <div className="amount-container">
              <div className="income">
                <h2>Total Incomes</h2>
                <p style={{ color: 'var(--color-green)' }}>RON {totalIncomes()}</p>
              </div>
              <div className="expense">
                <h2>Total Expenses</h2>
                <p style={{ color: 'red' }}>RON {totalExpenses()}</p>
              </div>
              <div className="balance">
                <h2>Balance</h2>
                <p style={totalBalance() > 0 ? { color: 'var(--color-green)' } : { color: 'red' }}>RON {totalBalance()}</p>
              </div>
            </div>

          </div>
          <div className="history-container">
            <History />
          </div>
        </div>
      </InnerLayout>
    </DashboardStyled >
  );
}

const DashboardStyled = styled.div`
  .stats-container {
    @media (min-width: 767px) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 2rem;
    }
    .chart-container {
      grid-column: 1 / 2;
      height: 400px;
      .amount-container {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 2rem;
        margin-top: 2rem;
        .income,
        .expense {
          grid-column: span 1;
        }
        .income,
        .expense,
        .balance {
          background: #fcf6f9;
          border: 2px solid #ffffff;
          box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
          border-radius: 20px;
          padding: 1rem;
          p {
            font-size: 3rem;
            font-weight: 700;
          }
        }

        .balance {
          grid-column: span 2;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          p {
            color: var(--color-green);
            opacity: 0.6;
            font-size: 4rem;
          }
        }
      }
    }

    .history-container {
      grid-column: 2/2;
      h2 {
        margin: 1rem 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      .salary-title {
        font-size: 1.2rem;
        span {
          font-size: 1.8rem;
        }
      }
      .salary-item {
        background: #fcf6f9;
        border: 2px solid #ffffff;
        box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
        padding: 1rem;
        border-radius: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        p {
          font-weight: 600;
          font-size: 1.6rem;
        }
      }
    }
  }
`;

export default Dashboard;
