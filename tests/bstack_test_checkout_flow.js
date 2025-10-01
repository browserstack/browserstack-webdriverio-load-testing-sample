const { expect } = require('@wdio/globals');

describe('BStackDemo test checkout flow', () => {
  it('should complete checkout flow successfully', async () => {
    // visit the site
    await browser.url('https://bstackdemo.com/');

    // sign in
    await $('#signin').click();
    await $('#username svg').click();
    await $('#react-select-2-option-0-0').click();
    await $('#password svg').click();
    await $('#react-select-3-option-0-0').click();

    await $('#login-btn').click();
    await browser.pause(500);

    // click on buy item
    await $('#\\31  > .shelf-item__buy-btn').click();
    await $('.float-cart__close-btn').click();
    await $('#\\32  > .shelf-item__buy-btn').click();
    await $('.buy-btn').click();

    // add address details
    await $('#firstNameInput').setValue('first');
    await $('#lastNameInput').setValue('last');
    await $('#addressLine1Input').setValue('address');
    await $('#provinceInput').setValue('province');
    await $('#postCodeInput').setValue('pincode');

    // checkout
    await $('#checkout-shipping-continue').click();
    await $('*=Continue').click();
    await $('*=Orders').click();
  });
});
