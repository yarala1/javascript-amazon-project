import {formatCurrency} from '../../scripts/Utils/money.js';

console.log('test suit: formatCurrency');

// Basic case

if (formatCurrency(3095) === '30.95') {
  console.log('formatCurrency function works correctly');
} else {
  console.log('formatCurrency function does not work correctly');
}

// Edge cases

if(formatCurrency(0) === '0.00') {
  console.log('formatCurrency function handles zero correctly');
} else {
  console.log('formatCurrency function does not handle zero correctly');
}

if (formatCurrency(2000.5) === '20.01') {
  console.log('formatCurrency function rounds correctly');
} else {
  console.log('formatCurrency function does not round correctly');
}