// domain/invoice.js
export default class Invoice {
  constructor(strategyComponent) {
    this.component = strategyComponent; // strategy or decorated strategy
  }

  setComponent(c) { this.component = c; }
  calculate(kwh) { return this.component.calculate(kwh); }
}
