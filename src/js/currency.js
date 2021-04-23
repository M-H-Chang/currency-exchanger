export default class CurrencyExchange {
  static async getExchange(currency) {
    const response = await fetch (`https://v6.exchangerate-api.com/v6/230c8ba70e320bf625cb22e9/pair/USD/${currency}`);
    return await response.json();
  }
}
