// strategies/baseStrategy.js
export default class BaseStrategy {
  calculate(kwh) {
    throw new Error('calculate() must be implemented');
  }
}
