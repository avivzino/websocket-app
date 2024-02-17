import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Plot } from "../Plot";
import "./App.css";

const App = () => {
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    const socket = new WebSocket("ws://localhost:8999");

    socket.onopen = () => {
      setIsConnected(true);
      toast.success("Successfully connected!");
    };
    socket.onclose = () => {
      setIsConnected(false);
      toast.error("Disconnected!");
    };

    return () => {
      if (socket.readyState === 1) {
        socket.close();
      }
    };
  }, []);

  return (
    <>
      <div className="header-wrapper">
        <div className="header">WILIOT</div>
        <div className="sub-header">Test</div>
      </div>
      <ToastContainer position="bottom-right" />
      {isConnected && <Plot />}
    </>
  );
};

export default App;
