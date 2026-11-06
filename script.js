
const API_URL =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false";

const tableBody = document.getElementById("cryptoTableBody");
const searchInput = document.getElementById("searchInput");
const sortMarketCap = document.getElementById("sortMarketCap");
const sortPercentage = document.getElementById("sortPercentage");

const loadingMessage = document.getElementById("loadingMessage");
const errorMessage = document.getElementById("errorMessage");

let cryptoData = [];

// METHOD 1: Fetch API using async/await
async function fetchCryptoData() {
    try {
        loadingMessage.style.display = "block";
        errorMessage.textContent = "";

        const response = await fetch(API_URL);

        if (!response.ok) {
            throw new Error("Failed to fetch cryptocurrency data.");
        }

        const data = await response.json();

        cryptoData = data;

        loadingMessage.style.display = "none";

        displayCoins(cryptoData);

    } catch (error) {
        loadingMessage.style.display = "none";
        errorMessage.textContent =
            "Unable to load data. Please try again later.";

        console.log(error);
    }
}

// METHOD 2: Fetch API using .then()
function fetchCryptoWithThen() {
    loadingMessage.style.display = "block";
    errorMessage.textContent = "";

    fetch(API_URL)
        .then(function (response) {
            if (!response.ok) {
                throw new Error("Failed to fetch data.");
            }

            return response.json();
        })
        .then(function (data) {
            cryptoData = data;

            loadingMessage.style.display = "none";

            displayCoins(cryptoData);
        })
        .catch(function (error) {
            loadingMessage.style.display = "none";

            errorMessage.textContent =
                "Unable to load data. Please try again later.";

            console.log(error);
        });
}

// Display cryptocurrency data in the table
function displayCoins(coins) {
    tableBody.innerHTML = "";

    if (coins.length === 0) {
        const row = document.createElement("tr");
        const cell = document.createElement("td");

        cell.textContent = "No cryptocurrencies found.";
        cell.colSpan = 7;

        row.appendChild(cell);
        tableBody.appendChild(row);

        return;
    }

    coins.forEach(function (coin) {
        const row = document.createElement("tr");

        // Coin image and name
        const nameCell = document.createElement("td");
        const nameContainer = document.createElement("div");

        nameContainer.className = "coin-name";

        const image = document.createElement("img");
        image.src = coin.image;
        image.alt = coin.name;

        const name = document.createElement("span");
        name.textContent = coin.name;

        nameContainer.append(image, name);
        nameCell.appendChild(nameContainer);

        // Symbol
        const symbolCell = document.createElement("td");
        symbolCell.textContent = coin.symbol.toUpperCase();

        // Current price
        const priceCell = document.createElement("td");
        priceCell.textContent =
            "$" + coin.current_price.toLocaleString("en-US");

        // Total volume
        const volumeCell = document.createElement("td");
        volumeCell.textContent =
            "$" + coin.total_volume.toLocaleString("en-US");

        // Percentage change
        const percentageCell = document.createElement("td");

        const percentage =
            coin.price_change_percentage_24h ?? 0;

        percentageCell.textContent =
            percentage.toFixed(2) + "%";

        percentageCell.className =
            percentage >= 0 ? "positive" : "negative";

        // Market capitalization
        const marketCapCell = document.createElement("td");

        marketCapCell.textContent =
            "Mkt Cap : $" +
            coin.market_cap.toLocaleString("en-US");

        // Add all cells to the row
        row.append(
            nameCell,
            symbolCell,
            priceCell,
            volumeCell,
            percentageCell,
            marketCapCell
        );

        tableBody.appendChild(row);
    });
}

// Search coins by name or symbol
searchInput.addEventListener("input", function () {
    const searchValue = searchInput.value.toLowerCase().trim();

    const filteredCoins = cryptoData.filter(function (coin) {
        return (
            coin.name.toLowerCase().includes(searchValue) ||
            coin.symbol.toLowerCase().includes(searchValue)
        );
    });

    displayCoins(filteredCoins);
});

// Sort by market capitalization
let marketCapAscending = false;

sortMarketCap.addEventListener("click", function () {
    marketCapAscending = !marketCapAscending;

    const sortedCoins = [...cryptoData].sort(function (a, b) {
        return marketCapAscending
            ? a.market_cap - b.market_cap
            : b.market_cap - a.market_cap;
    });

    displayCoins(sortedCoins);
});

// Sort by percentage change
let percentageAscending = false;

sortPercentage.addEventListener("click", function () {
    percentageAscending = !percentageAscending;

    const sortedCoins = [...cryptoData].sort(function (a, b) {
        const first = a.price_change_percentage_24h ?? 0;
        const second = b.price_change_percentage_24h ?? 0;

        return percentageAscending
            ? first - second
            : second - first;
    });

    displayCoins(sortedCoins);
});

// Load data using async/await
fetchCryptoData();
