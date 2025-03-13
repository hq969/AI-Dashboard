const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");
require("dotenv").config();

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: "http://localhost:3000" },
});

app.use(cors());
app.use(express.json());

let metrics = { transactions: 100, successRate: 95, errorRate: 5, revenue: 5000 };

// Real-time update simulation
setInterval(() => {
  metrics.transactions += Math.floor(Math.random() * 10);
  metrics.successRate = Math.random() * (98 - 90) + 90;
  metrics.errorRate = 100 - metrics.successRate;
  metrics.revenue += Math.floor(Math.random() * 100);

  io.emit("updateMetrics", metrics);
}, 5000);

const chatbot = require("./chatbot");
app.use("/chat", chatbot);

server.listen(5000, () => console.log("Server running on port 5000"));
