import { useState, useEffect } from "react";
import { Chart } from "../Chart";
import { ChartDataPoint, WebSocketData } from "../../types";

export const Plot = () => {
  const [data, setData] = useState<ChartDataPoint[]>([]);

  useEffect(() => {
    const socket = new WebSocket("ws://localhost:8999");

    socket.onmessage = (event) => {
      const newData: WebSocketData[] = JSON.parse(event.data);
      if (newData[0].data > 100 || newData[1].data > 100) {
        return;
      }
      newData.forEach((point) => {
        setData((prevData) => {
          const fiveMinutesAgo = Date.now() - 5 * 60 * 1000;
          if (
            prevData.length > 0 &&
            prevData[0]?.timestamp.getTime() < fiveMinutesAgo
          ) {
            prevData.shift();
          }
          const newPoint = {
            id: point.id,
            timestamp: new Date(point.timestamp),
            temperature: point.temperature,
          };
          return [...prevData, newPoint];
        });
      });
    };

    return () => {
      if (socket.readyState === 1) {
        socket.close();
      }
    };
  }, []);

  return <Chart data={data} />;
};
