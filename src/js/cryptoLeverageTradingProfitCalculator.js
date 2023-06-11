function calculate() {
    // Clear previous error message and result
    document.getElementById("error").innerText = "";
    document.getElementById("percentageChange").innerText = "";
    document.getElementById("profits").innerText = "";

    // Get the input values
    var investment = parseFloat(document.getElementById("investment").value);
    var leverage = parseFloat(document.getElementById("leverage").value);
    var price1 = parseFloat(document.getElementById("price1").value);
    var price2 = parseFloat(document.getElementById("price2").value);

    // Check if inputs are valid numbers
    if (isNaN(investment) || isNaN(leverage) || isNaN(price1) || isNaN(price2)) {
        document.getElementById("error").innerText = "Please enter valid numbers.";
    } else {
        // Calculate the percentage change
        var percentageChange = ((price2 - price1) / price1) * 100;

        // Calculate the profit
        var profit = investment * leverage * percentageChange * (1 / 100);

        // Calculate the profit for the first one percent change
        var profitForOnePercentChange = investment * leverage * (1 / 100);

        // Format profitForOnePercentChange and profit as currency
        var currencyOptions = { style: "currency", currency: "USD" };
        var formattedProfitForOnePercentChange = profitForOnePercentChange.toLocaleString("en-US", currencyOptions);
        var formattedProfit = profit.toLocaleString("en-US", currencyOptions);

        // Display the percentage change
        document.getElementById("percentageChange").innerText = "Percentage Change: " + percentageChange.toFixed(2) + "%";

        // Display the profit for the first one percent change and the total percentage change
        var profitsContainer = document.getElementById("profits");
        profitsContainer.innerHTML = "<h2>Profits:</h2>";
        var profitItem = document.createElement("div");
        profitItem.className = "profit-item";
        profitItem.innerText = "1% Change: " + formattedProfitForOnePercentChange;
        profitsContainer.appendChild(profitItem);
        profitItem = document.createElement("div");
        profitItem.className = "profit-item";
        profitItem.innerText = "Total Change: " + formattedProfit;
        profitsContainer.appendChild(profitItem);
    }
}