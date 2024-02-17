import { render, screen } from "@testing-library/react";
import { IdBoxes } from "./IdBoxes";

test("renders the ID boxes with correct temperatures", () => {
  const firstTemp = 25;
  const secondTemp = 30;

  render(
    <IdBoxes FirstIdTemperature={firstTemp} SecondIdTemperature={secondTemp} />
  );

  const firstIdBox = screen.getByText(/ID 1/i);
  const secondIdBox = screen.getByText(/ID 2/i);
  const firstTempText = screen.getByText(`Temp: ${firstTemp} C`);
  const secondTempText = screen.getByText(`Temp: ${secondTemp} C`);

  expect(firstIdBox).toBeInTheDocument();
  expect(secondIdBox).toBeInTheDocument();
  expect(firstTempText).toBeInTheDocument();
  expect(secondTempText).toBeInTheDocument();
});
