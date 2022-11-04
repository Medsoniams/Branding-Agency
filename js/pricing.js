(function () {
  let rates;
  const prising = [
    {
      id: "1",
      title: "Fresh",
      subtitle: "Introducing your brand",
      price: 500,
    },
    {
      id: "2",
      title: "Stable",
      subtitle: "External Communications",
      price: 800,
    },
    {
      id: "3",
      title: "Pro",
      subtitle: "Powerful brand platform",
      price: 1800,
    },
  ];
  function renderPricing() {
    const prisingContainer = document.querySelector(".pricing__cards");
    prisingContainer.innerHTML = "";
    for (const price of prising) {
      prisingContainer.innerHTML += `
                <div class="pricing__card">
                    <p class="pricing__card-title">${price.title}</p>
                    <p class="pricing__card-subtitle">${price.subtitle}</p>
                    <div class="pricing__card-pricing">
                        <span class="pricing__card-price">${
                            Math.floor(price.price * rate)
                        }</span>
                        <span class="pricing__card-month">monthly</span>
                    </div>
                    <button class="pricing__card-btn">Select plan</button>
                </div>`;
    }
  }
  const pricingCurrency = document.getElementById("pricing__currency");
  pricingCurrency.addEventListener("change", convertCurrency);
  async function convertCurrency() {
    const currency = pricingCurrency.value;
    if (!rates) {
      const response = await fetch(
        "https://api.exchangerate-api.com/v4/latest/USD"
      );
      rates = await response.json();
    }
    rate = rates.rates[currency];
    renderPricing();
  }
  convertCurrency();
})();
