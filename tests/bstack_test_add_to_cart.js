const { expect } = require('@wdio/globals');

describe('BStackDemo test add to cart', () => {
  it('should add product to cart successfully', async () => {
    // visit the site
    await browser.url('https://bstackdemo.com/');

    // get name of product we want to add to cart
    const productElement = await $('#\\33  > p');
    const productToAdd = await productElement.getText();

    // click on add to cart
    await $('#\\33  > .shelf-item__buy-btn').click();

    // get name of item in cart
    const cartItemElement = await $('#__next > div > div > div.float-cart.float-cart--open > div.float-cart__content > div.float-cart__shelf-container > div > div.shelf-item__details > p.title');
    const productInCart = await cartItemElement.getText();
    
    // check if product in cart is same as one added
    expect(productInCart).toEqual(productToAdd);
  });
});
