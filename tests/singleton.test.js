// tests/singleton.test.js
import TariffSingleton from '../infra/tariffSingleton.js';

test('TariffSingleton returns same instance', () => {
  const a = new TariffSingleton();
  const b = new TariffSingleton();
  expect(a).toBe(b);
});
