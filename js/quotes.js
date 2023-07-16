import { quote_categories } from "../constants/categories.js";
import randomNumber from "../utils/random_number.js";

function getQuote() {
  const category = quote_categories[randomNumber(quote_categories.length)];

  fetch(`https://api.api-ninjas.com/v1/quotes?category=${category}`, {
    method: "GET",
    headers: { "X-Api-Key": "vVGvNLtmBrPPWnF3HxudUQ==wJjgZ9L5Et9UkcSe" },
    contentType: "application/json",
  })
    .then((response) => response.json())
    .then((result) => {
      const quote = document.querySelector("div#quote");
      const author = document.querySelector("div#author");

      quote.innerText = result[0].quote;
      author.innerText = `- ${result[0].author}`;
    });
}

getQuote();
setInterval(getQuote, 200000);
