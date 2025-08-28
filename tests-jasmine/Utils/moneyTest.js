import {formatCurrency} from '../../scripts/Utils/money.js';
 
describe('test suite: formatCurrency', () => { 
  it('Converts cents into dolars', () => {
    expect(formatCurrency(3095)).toEqual ('30.95');
  });

  it('Works with zero', () => {
    expect(formatCurrency(0)).toEqual('0.00');
   });
   it('Rounds correctly', () => {
    expect(formatCurrency(2000.5)).toEqual('20.01');
  });
});