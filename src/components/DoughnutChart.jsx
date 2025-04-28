import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = () => {
  const data = {
    labels: ["Organic", "Social", "Referral", "Email"],
    datasets: [
      {
        label: "Traffic Sources",
        data: [60, 25, 20, 15],
        backgroundColor: ["#1976d2", "#66bb6a", "#ffa726", "#ec407a"],
      },
    ],
  };

  return <Doughnut data={data} />;
};

export default DoughnutChart;
