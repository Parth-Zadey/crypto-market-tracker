# 🪙 Crypto Market Tracker

A responsive cryptocurrency market tracker built using **HTML, CSS, and JavaScript**. It fetches real-time cryptocurrency market data from the CoinGecko API and displays the top 10 cryptocurrencies.

## 🚀 Live Demo

[View Crypto Market Tracker](https://parth-zadey.github.io/crypto-market-tracker/)

## ✨ Features

- Fetches the top 10 cryptocurrencies using the CoinGecko API.
- Displays cryptocurrency logos, names, and symbols.
- Shows current price, 24-hour trading volume, and market capitalization.
- Displays 24-hour percentage changes with color indicators.
- Search cryptocurrencies by name or symbol.
- Sort cryptocurrencies by market capitalization.
- Sort cryptocurrencies by percentage change.
- Implements API requests using both `.then()` and `async/await`.
- Responsive dark-themed user interface.

## 🛠️ Technologies Used

- HTML5
- CSS3
- JavaScript (Vanilla JS)
- CoinGecko API
- Fetch API
- Promises and Async/Await

## 🔗 API Used

CoinGecko Markets API:

https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false

## 📂 Project Structure

```text
crypto-market-tracker/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

## ⚙️ How It Works

1. Fetches cryptocurrency data from the CoinGecko API.
2. Converts the API response into JavaScript objects.
3. Dynamically displays cryptocurrency information in an HTML table.
4. Filters coins using the search input.
5. Sorts coins by market capitalization or percentage change.
6. Handles API requests using both `.then()` and `async/await`.

## 💻 Run Locally

1. Clone or download this repository.
2. Open the project folder in VS Code.
3. Open `index.html` using Live Server.
4. Explore cryptocurrency prices and sorting features.

## 👨‍💻 Author

**Parth Zadey**

- GitHub: [Parth-Zadey](https://github.com/Parth-Zadey)
- LinkedIn: [Connect with me](https://www.linkedin.com/)

---

⭐ If you like this project, consider giving it a star!
