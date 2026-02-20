



🔥 FREAK Watcher

A modern and lightweight cryptocurrency token watcher web application built with Node.js and Express.
Designed to run smoothly in Termux (Android) or any Linux environment

🚀 Project Overview

FREAK Token Watcher is a real-time crypto price monitoring web application that fetches live market data from the CoinGecko API.

The project demonstrates:

Backend API proxy implementation

Real-time data rendering

Clean and responsive UI design

Full-stack integration using JavaScript

Built with simplicity, performance, and scalability in mind


✨ Features

🔥 Live cryptocurrency price tracking (Top 20 by market cap)

🔎 Real-time token search

🌙 Dark / Light mode toggle

🔄 Auto refresh every 30 seconds

📱 Responsive grid layout

🎨 Modern UI with hover animations

🌐 REST API backend proxy

⚡ Lightweight and fast performance



🛠️ Installation (Termux Setup)

1️⃣ Update Termux
pkg update && pkg upgrade -y

2️⃣ Install Dependencies
pkg install nodejs git -y

3️⃣ Create Project
mkdir freak
cd freak
npm init -y
npm install express axios cors

▶️ Run The Application
node server.js

📁 Project Structure
freak/
│
├── server.js
├── package.json
│
└── public/
    ├── index.html
    ├── style.css
    ├── script.js
    └── proof-of-work.png


🔌 API Endpoint
GET /api/crypto

Returns top 20 crypto market data from CoinGecko.

Example response:
[
  {
    "name": "Bitcoin",
    "current_price": 68000,
    "price_change_percentage_24h": 1.23
  }
]


🧠 How It Works

Backend Express server acts as proxy.

Axios fetches market data from CoinGecko.

Frontend fetches data from /api/crypto.

Data rendered dynamically using JavaScript.

UI auto-refreshes every 30 seconds.


⚙️ Tech Stack
| Technology    | Purpose              |
| ------------- | -------------------- |
| Node.js       | Backend runtime      |
| Express       | Web server           |
| Axios         | API request handler  |
| CoinGecko API | Crypto data provider |
| HTML/CSS      | UI Layout            |
| Vanilla JS    | Dynamic rendering    |



