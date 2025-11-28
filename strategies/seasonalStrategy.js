// strategies/seasonalStrategy.js
import BaseStrategy from './baseStrategy.js';
import TariffSingleton from '../infra/tariffSingleton.js';

export default class SeasonalStrategy extends BaseStrategy {
  constructor(season = 'normal') {
    super();
    this.season = season; // 'normal' | 'high'
    this.tariff = new TariffSingleton();
  }

  calculate(kwh) {
    // exemplo: em sazonalidade alta, aplica multiplicador
    const multiplier = this.season === 'high' ? 1.2 : 1.0;
    // usa flat price of top bracket for simplicity
    const basePrice = this.tariff.getTariffTable().slice(-1)[0].price;
    return kwh * basePrice * multiplier;
  }
}
