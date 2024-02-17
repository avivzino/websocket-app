import "./idBoxes.css";

interface Props {
  FirstIdTemperature: number;
  SecondIdTemperature: number;
}

export const IdBoxes = ({ FirstIdTemperature, SecondIdTemperature }: Props) => (
  <div className="ids-boxes-wrapper">
    <div className="id-box flex-container">
      <div className="title">ID 1</div>
      <div className="temperature-text">Temp: {FirstIdTemperature} C</div>
    </div>
    <div className="id-box flex-container">
      <div className="title">ID 2</div>
      <div className="temperature-text">Temp: {SecondIdTemperature} C</div>
    </div>
  </div>
);
