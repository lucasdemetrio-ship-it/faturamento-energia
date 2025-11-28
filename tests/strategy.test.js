// tests/strategy.test.js
import FlatRateStrategy from '../strategies/flatRateStrategy.js';
import SeasonalStrategy from '../strategies/seasonalStrategy.js';

test('FlatRateStrategy returns numeric cost', () => {
  const s = new FlatRateStrategy();
  const cost = s.calculate(150);
  expect(typeof cost).toBe('number');
  expect(cost).toBeGreaterThanOrEqual(0);
});

test('SeasonalStrategy increases cost in high season', () => {
  const normal = new SeasonalStrategy('normal').calculate(100);
  const high = new SeasonalStrategy('high').calculate(100);
  expect(high).toBeGreaterThanOrEqual(normal);
});
