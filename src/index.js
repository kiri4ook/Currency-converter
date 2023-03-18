import {onFromCurrencyChange} from "./logic.js";
import {onToCurrencyChange} from "./logic.js";
import {updateValue} from "./logic.js";
import {getResults} from "./api.js";
import {getUAH} from "./api.js";
import {exchangeCurrency} from "./logic.js";
import {fromCurrecySelect} from "./constants.js";
import {toCurrecySelect} from "./constants.js";
import {clearValues} from "./logic.js";
import {searchFromInput} from "./constants.js";
import {searchToInput} from "./constants.js";
import {exchangeButton} from "./constants.js";
import {resetButton} from "./constants.js";

document.addEventListener('DOMContentLoaded', getUAH);

fromCurrecySelect.addEventListener('change', onFromCurrencyChange);

toCurrecySelect.addEventListener('change', onToCurrencyChange);

searchFromInput.addEventListener('input', updateValue);

searchToInput.addEventListener('keyup', getResults);

exchangeButton.addEventListener('click', exchangeCurrency);

resetButton.addEventListener('click', clearValues);

