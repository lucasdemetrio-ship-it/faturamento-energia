// decorators/baseDecorator.js
export default class BaseDecorator {
  constructor(component) {
    this.component = component;
  }

  calculate(kwh) {
    return this.component.calculate(kwh);
  }
}
