export interface WebSocketData {
    id: number;
    timestamp: number;
    temperature: number;
    data: number;
  }
  
  export interface ChartDataPoint {
    id: number;
    timestamp: Date;
    temperature: number;
  }