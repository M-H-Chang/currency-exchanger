import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyExchange from './js/currency.js';

function showCurrency(currencyValue) {
  let html = `<p>`;
  html += `Converted: ${currencyValue.conversion_rate}`;
  html += '</p>';
  $('#conversion').html(html);
}

$('#form').submit(async function(event) {
  event.preventDefault();
  let curr = $('#currencyType option:selected').val();
  try {
    const currencyValue = await CurrencyExchange.getExchange(curr);
    showCurrency(currencyValue);
    console.log(currencyValue);
  } catch (error) {
    console.log(error);
  }
});