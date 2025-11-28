// decorators/flagDecorator.js
import BaseDecorator from './baseDecorator.js';
import TariffSingleton from '../infra/tariffSingleton.js';

export default class FlagDecorator extends BaseDecorator {
  constructor(component, flag = 'green') {
    super(component);
    this.flag = flag;
    this.tariff = new TariffSingleton();
  }

  calculate(kwh) {
    const base = super.calculate(kwh);
    // bandeira adiciona valor fixo por kWh
    const additional = this.tariff.getFlagValue(this.flag) * kwh;
    return base + additional;
  }
}
