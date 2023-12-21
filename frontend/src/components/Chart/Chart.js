import React from "react";
import { Chart as ChartJs, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement } from "chart.js";
import { useGlobalContext } from "../../context/GlobalContext";

ChartJs.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement);

function Chart() {
  const { incomes, expenses } = useGlobalContext();

  console.log(incomes);

  return <div>Chart</div>;
}

export default Chart;
