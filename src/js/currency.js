export default class CurrencyExchange {
  static async getExchange(currency) {
    const response = await fetch (`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair/USD/${currency}`);
    return await response.json();
  }
}
