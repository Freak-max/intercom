🧠 Skill: FREAK Token Watcher


📌 Overview

FREAK Token Watcher is a lightweight open-source web application designed to monitor cryptocurrency prices in real time. The application is built using Node.js and Express.js, and it integrates with the CoinGecko API to fetch live market data.
This project is suitable for developers who want to learn full-stack JavaScript or showcase a portfolio project.


🔍 Key Features

✨ Main features included in this project:
🪙 Display the Top 20 Cryptocurrencies by market capitalization
🔎 Real-time price search with filtering
🌗 Dark and Light mode support
♻️ Automatic refresh every 30 seconds
📱 Fully responsive layout
🚀 Backend caching for improved performance
🛡️ Production-ready backend structure with security middleware
🛠️ Technologies Used


This project is built with:

✅ Node.js
✅ Express.js
✅ Axios (for API requests)
✅ CoinGecko API
✅ HTML5 / CSS3 / Vanilla JavaScript


🧩 Project Structure

freak-token-watcher/
│
├── src/
│   ├── server.js
│   ├── routes/
│   ├── services/
│   └── middleware/
│
├── public/
│   ├── index.html
│   ├── style.css
│   ├── script.js
│   └── proof-of-work.png
│
├── .env.example
├── package.json
└── README.md

🚀 Installation & Setup


1️⃣ Clone the repository
git clone https://github.com/freak-max/freak-token-watcher.git
cd freak-token-watcher

2️⃣ Install dependencies
npm install

3️⃣ Run the application
npm start

📡 API Endpoint

Endpoint

Description
GET /api/crypto
Returns the Top 20 cryptocurrencies by market capitalization


📁 Notes

An active internet connection is required since data is fetched from the CoinGecko API.
The project structure is extensible and can be expanded with authentication, a database, or WebSocket real-time features.
