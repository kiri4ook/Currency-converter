import {getResults} from "./api.js";
import {valueFrom} from "./constants.js";
import {valueTo} from "./constants.js";
import {fromCurrecySelect} from "./constants.js";
import {toCurrecySelect} from "./constants.js";

export let resultFrom;
export let resultTo;
export let searchValue;

export const onFromCurrencyChange = event => {
   resultFrom = `${event.target.value}`;
   getResults();
}

export const onToCurrencyChange = event => {
   resultTo = `${event.target.value}`;
   getResults();
}

export function updateValue(e) {
   searchValue = e.target.value;
}

export function exchangeCurrency() {
   let intermediateCurrency = fromCurrecySelect.value;
   let intermediateValue = valueFrom.value;
   fromCurrecySelect.value = toCurrecySelect.value;
   toCurrecySelect.value = intermediateCurrency;
   resultFrom =  fromCurrecySelect.value;
   resultTo = toCurrecySelect.value;
   valueFrom.value = valueTo.value;
   valueTo.value = intermediateValue;
}

export function clearValues() {
   window.location.reload();
}
