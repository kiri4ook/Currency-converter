import {resultFrom} from "./logic.js";
import {resultTo} from "./logic.js";
import {searchValue} from "./logic.js";
import {costUAHtoUSD} from "./constants.js";
import {costUAHtoEUR} from "./constants.js";
import {valueFrom} from "./constants.js";
import {valueTo} from "./constants.js";

export function displayResults(currency) {
   let fromRate = currency.rates[resultFrom];
   let toRate = currency.rates[resultTo];
   valueTo.value = ((toRate / fromRate) * searchValue).toFixed(2);
   // console.log(valueTo.value);
}

export function displayUAH(currency) {
   let fromUSD = currency.rates["USD"];
   let fromEUR = currency.rates["EUR"];
   let toUAH = currency.rates["UAH"];
   costUAHtoUSD.innerHTML = (toUAH / fromUSD).toFixed(2);
   costUAHtoEUR.innerHTML = (toUAH / fromEUR).toFixed(2);
}
