import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyExchange from './js/currency.js';

function showCurrency(currencyValue) {
  let rate = parseInt($('#usd').val());
  let curr = $('#currencyType option:selected').val();
  let output = currencyValue.conversion_rate * rate;
  let round = Math.round(output * 100) / 100;
  if (isNaN(rate)) {
    return alert("Please Enter a number!");
  }

  if (currencyValue.result === "success") {
    let html = `<p>`;
    html += `Converted: ${round}`;
    html += '</p>';
    $('#conversion').html(html);
    if (curr === "KRW") {
      $('.images').hide();
      $('#wonImg').show();
    } else if (curr === "CAD") {
      $('.images').hide();
      $('#cadImg').show();
    } else if (curr === "AUD") {
      $('.images').hide();
      $('#audImg').show();
    } else if (curr === "EUR") {
      $('.images').hide();
      $('#euroImg').show();
    } else {
      return; 
    }
  } else if (currencyValue.result === "error" && currencyValue['error-type'] === "unsupported-code"){
    $('.images').hide();
    let html = `<p>`;
    html += `${currencyValue.result}: Currency not Supported`;
    html += '</p>';
    $('#conversion').html(html);
  } else {
    let html = `<p>${currencyValue['error-type']}</p>`;
    $('.images').hide();
    $('#conversion').html(html);
  }
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