// infra/tariffSingleton.js
class TariffSingleton {
  constructor() {
    if (TariffSingleton.instance) return TariffSingleton.instance;
    // dados de exemplo: faixas (kWh até -> price per kWh)
    this.tariffTable = [
      { upto: 100, price: 0.50 },
      { upto: 200, price: 0.70 },
      { upto: Infinity, price: 1.00 }
    ];
    // bandeiras (simples)
    this.flags = {
      green: 0.0,
      yellow: 0.05, // R$/kWh extra
      red: 0.10
    };
    TariffSingleton.instance = this;
  }

  getTariffTable() { return this.tariffTable; }
  getFlagValue(flag) { return this.flags[flag] ?? 0; }
}

export default TariffSingleton;
