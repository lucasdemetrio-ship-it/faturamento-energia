// tests/decorator.test.js
import FlatRateStrategy from '../strategies/flatRateStrategy.js';
import FlagDecorator from '../decorators/flagDecorator.js';
import TaxDecorator from '../decorators/taxDecorator.js';

test('Decorators compose: flag then tax', () => {
  const strategy = new FlatRateStrategy();
  const flagged = new FlagDecorator(strategy, 'red');
  const taxed = new TaxDecorator(flagged, 0.10);
  const base = strategy.calculate(100);
  const flaggedCost = flagged.calculate(100);
  const taxedCost = taxed.calculate(100);
  expect(flaggedCost).toBeGreaterThanOrEqual(base);
  expect(taxedCost).toBeGreaterThanOrEqual(flaggedCost);
});
