import React, { useState, useEffect } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:5000"); // Connect to backend WebSocket

const Dashboard = () => {
  const [metrics, setMetrics] = useState({
    transactions: 0,
    successRate: 0,
    errorRate: 0,
    revenue: 0,
  });

  useEffect(() => {
    socket.on("updateMetrics", (data) => {
      setMetrics(data);
    });

    return () => {
      socket.off("updateMetrics");
    };
  }, []);

  return (
    <div className="dashboard">
      <h2>Real-Time Transaction Dashboard</h2>
      <div className="stats">
        <div className="card">📊 Transactions: {metrics.transactions}</div>
        <div className="card">✅ Success Rate: {metrics.successRate}%</div>
        <div className="card">❌ Error Rate: {metrics.errorRate}%</div>
        <div className="card">💰 Revenue: ${metrics.revenue}</div>
      </div>
    </div>
  );
};

export default Dashboard;
