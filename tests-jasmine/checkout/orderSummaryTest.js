import { renderOrderSummary } from "../../scripts/checkout/orderSummary.js";
import { loadFromStorage, cart } from "../../data/cart.js";

describe('test suit: renderOrderSummary', () => {
  const productId1 = 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6';
  const productId2 = '15b6fc6f-327a-4ec4-896f-486349e85a3d';

  beforeEach(() => {
    spyOn(localStorage, 'setItem');

    document.querySelector('.js-test-container').innerHTML = `
    <div class="js-order-summery"></div>
    <div class="js-payment-summary"></div>
    `;


  spyOn(localStorage, 'getItem').and.callFake(() => {
      return JSON.stringify([{
        productId: productId1,
        quantity: 2,
        deliveryOptionsID: '1'
      }, {
        productId: productId2,
        quantity: 1,
        deliveryOptionsID: '2'
      }]);
    });
    loadFromStorage();
    renderOrderSummary();
});

  it('displays the cart', () => {
    expect(
      document.querySelectorAll('.js-cart-item-container').length
    ).toEqual(2);

    // relaxed assertion: check for the quantity substring
    expect(
      document.querySelector(`.js-product-quantity-${productId1}`).innerText
    ).toContain('Quantity: 2');
        expect(
      document.querySelector(`.js-product-quantity-${productId2}`).innerText
    ).toContain('Quantity: 1');

    document.querySelector('.js-test-container').innerHTML =  '';


  });

  it('removes a product from the cart', () => {
    document.querySelector(`.js-delete-link-${productId1}`).click();
    expect(
      document.querySelectorAll('.js-cart-item-container').length
    ).toEqual(1);
    expect(
      document.querySelector(`.js-cart-item-container-${productId1}`)
    ).toBeNull();
    expect(
      document.querySelector(`.js-cart-item-container-${productId2}`)
    ).not.toBeNull();
    
    expect(cart.length).toEqual(1);
    expect(cart[0].productId).toEqual(productId2);

       document.querySelector('.js-test-container').innerHTML =  '';
  });
}); 