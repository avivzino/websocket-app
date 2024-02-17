import { LineChart } from "@mui/x-charts/LineChart";
import Box from "@mui/material/Box";
import { IdBoxes } from "./IdBoxes";
import { ChartDataPoint } from "../../types";
import "./Chart.css";

export const Chart = ({ data }: { data: ChartDataPoint[] }) => {
  const dataOfFirstID = data.filter((point) => point.id === 1);
  const dataOfSecondID = data.filter((point) => point.id === 2);

  const Line1Data = dataOfFirstID.map((point) => point.temperature).slice(-10);
  const Line2Data = dataOfSecondID.map((point) => point.temperature).slice(-10);

  if (Line1Data.length === 0 || Line2Data.length === 0) {
    return <div>No Data.</div>;
  }

  return (
    <>
      <IdBoxes
        FirstIdTemperature={dataOfFirstID[dataOfFirstID.length - 1].temperature}
        SecondIdTemperature={
          dataOfSecondID[dataOfSecondID.length - 1].temperature
        }
      />
      <Box sx={{ border: "1px solid #d3d3d3", margin: "30px" }}>
        <div className="flex-container">
          <div className="title">DATA</div>
          <div className="separator" />
        </div>
        <LineChart
          series={[
            { data: Line1Data, label: "1", color: "#5A5A5A" },
            { data: Line2Data, label: "2", color: "#AFAFAF" },
          ]}
          height={400}
          sx={{
            ".MuiMarkElement-root:not(.MuiMarkElement-highlighted)": {
              display: "none",
            },
            ".MuiChartsAxis-tickLabel": {
              fill: "white",
              stroke: "white",
            },
            ".MuiChartsAxis-tick": {
              fill: "white",
              stroke: "white",
            },
          }}
        />
      </Box>
    </>
  );
};
