// decorators/taxDecorator.js
import BaseDecorator from './baseDecorator.js';

export default class TaxDecorator extends BaseDecorator {
  constructor(component, taxPercent = 0.12) { // ex.: 12% impostos
    super(component);
    this.taxPercent = taxPercent;
  }

  calculate(kwh) {
    const base = super.calculate(kwh);
    const tax = base * this.taxPercent;
    return base + tax;
  }
}
