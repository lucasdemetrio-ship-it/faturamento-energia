// app/index.js
import readline from 'readline';
import FlatRateStrategy from '../strategies/flatRateStrategy.js';
import SeasonalStrategy from '../strategies/seasonalStrategy.js';
import FlagDecorator from '../decorators/flagDecorator.js';
import TaxDecorator from '../decorators/taxDecorator.js';
import Invoice from '../domain/invoice.js';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function showMenu() {
  console.clear();
  console.log('=== Faturamento de Energia ===');
  console.log('1) Calcular com Flat Rate');
  console.log('2) Calcular com Seasonal (alta)');
  console.log('0) Sair');
  console.log('\n(Desenvolvido por: Lucas Eduardo Demétrio)');
}

async function question(q) {
  return new Promise(res => rl.question(q, ans => res(ans)));
}

async function main() {
  let opt;
  do {
    showMenu();
    opt = await question('Opção: ');
    if (opt === '1' || opt === '2') {
      const kwh = parseFloat(await question('kWh consumidos: '));
      let strategy;
      if (opt === '1') strategy = new FlatRateStrategy();
      else strategy = new SeasonalStrategy('high');
      // decore: bandeira e imposto
      const withFlag = new FlagDecorator(strategy, 'yellow');
      const withTaxes = new TaxDecorator(withFlag, 0.12);
      const invoice = new Invoice(withTaxes);
      const total = invoice.calculate(kwh);
      console.log(`Total: R$ ${total.toFixed(2)}`);
      await question('\nEnter para continuar...');
    }
  } while (opt !== '0');
  rl.close();
}

main().catch(err => { console.error(err); rl.close(); });
