import {displayResults} from "./displays.js";
import {displayUAH} from "./displays.js";

const api = "https://api.exchangerate-api.com/v4/latest/USD";

export function getResults() {
   return fetch(`${api}`)
      .then(currency => currency.json())
      .then(displayResults)
      .catch(error => console.log(error.message));
}

export function getUAH() {
   return fetch(`${api}`)
      .then(currency => currency.json())
      .then(displayUAH)
      .catch(error => console.log(error.message));
}