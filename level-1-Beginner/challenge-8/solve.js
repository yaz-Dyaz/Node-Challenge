
//* Solving

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Enter temperature (e.g., 25C or 77F): ', (input) => {
  const value = parseFloat(input.slice(0, -1));
  const unit = input.slice(-1).toUpperCase();

  if (unit === 'C') {
    const fahrenheit = (value * 9) / 5 + 32;
    console.log(`Fahrenheit: ${fahrenheit.toFixed(2)}°F`);
  } else if (unit === 'F') {
    const celsius = ((value - 32) * 5) / 9;
    console.log(`Celsius: ${celsius.toFixed(2)}°C`);
  } else {
    console.log('Invalid input format. Use 25C or 77F.');
  }

  rl.close();
});

/**
 ** Explanation:
 * Input suhu diambil menggunakan modul readline.
 * Berdasarkan unit (C atau F), rumus konversi yang sesuai diterapkan.
 */