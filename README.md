# 🚀 AI-Dashboard: Real-Time Analytics & AI Chatbot

![AI-Dashboard](https://img.shields.io/badge/AI--Dashboard-RealTime%20Analytics-blue?style=for-the-badge)
![Tech Stack](https://img.shields.io/badge/Tech%20Stack-React%20|%20Node%20|%20WebSockets%20|%20GPT4-green?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-orange?style=for-the-badge)

AI-Dashboard is a **full-stack application** that provides:
- 📊 **Real-time transaction updates** via WebSockets.
- 🤖 **AI-powered chatbot** using OpenAI's GPT-4 API.
- 🏆 **Live KPI dashboard** built with React.js and Node.js.

---
## 📌 Features
✅ **Real-time analytics**: Track KPIs like Success Rate, Revenue, and Errors  
✅ **AI Chatbot**: Ask transaction-related questions  
✅ **WebSockets integration**: Live updates every 5 seconds  
✅ **Modern UI**: Built with React.js + CSS  
✅ **Secure API**: Uses Express.js and OpenAI API  

---

## 📌 Project Demo
🎥 **Demo Video:** [Watch on YouTube](#) *(Upload a demo link if available)*  
🖥️ **Live Preview:** [View Online](#) *(Add a deployed version link if available)*  

![Dashboard Preview](https://via.placeholder.com/800x400?text=AI-Dashboard+Preview)  

---

## 📌 Project Structure
```bash
📂 AI-Dashboard
 ┣ 📂 client             # Frontend (React.js)
 ┃ ┣ 📂 public           # Static files (index.html, favicon, etc.)
 ┃ ┣ 📂 src              # React source code
 ┃ ┃ ┣ 📂 components     # UI components
 ┃ ┃ ┃ ┣ 📜 Dashboard.js # Real-time KPIs UI
 ┃ ┃ ┃ ┣ 📜 Chatbot.js   # AI Chatbot UI
 ┃ ┃ ┣ 📜 App.js         # Main React component
 ┃ ┃ ┣ 📜 index.js       # React entry point
 ┃ ┃ ┣ 📜 index.css      # Global styles
 ┃ ┣ 📜 package.json     # React dependencies & scripts
 ┣ 📂 server             # Backend (Node.js)
 ┃ ┣ 📜 server.js        # Express API + WebSockets
 ┃ ┣ 📜 chatbot.js       # OpenAI Chatbot API
 ┃ ┣ 📜 package.json     # Backend dependencies & scripts
 ┃ ┣ 📜 .env             # Environment variables (API keys)
 ┣ 📜 README.md          # Full project documentation

