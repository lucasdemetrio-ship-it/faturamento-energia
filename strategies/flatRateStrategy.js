// strategies/flatRateStrategy.js
import BaseStrategy from './baseStrategy.js';
import TariffSingleton from '../infra/tariffSingleton.js';

export default class FlatRateStrategy extends BaseStrategy {
  constructor() { super(); this.tariff = new TariffSingleton(); }

  calculate(kwh) {
    // aplica tabela por faixas simples
    let remaining = kwh;
    let cost = 0;
    for (const tier of this.tariff.getTariffTable()) {
      const prevUpto = tier.upto === Infinity ? Infinity : tier.upto;
      // cálculo simples por faixa (assume faixas acumuladas)
      // Para simplicidade: aplica preço da faixa ao kwh inteiro se estiver nessa faixa
      if (kwh <= prevUpto) {
        cost += kwh * tier.price;
        break;
      }
    }
    return cost;
  }
}
