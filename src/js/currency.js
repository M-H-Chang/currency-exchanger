export default class CurrencyExchange {
  static async getExchange(currency) {
    const response = await fetch (` https://v6.exchangerate-api.com/v6/${API_KEY}/latest/${currency}`);
    return await response.json();
  }
}