import Cart from '../src/Components/Cart'

//Test Case 1: Add products to the shopping cart.
describe('When user adds 5 Shower gels in the shopping cart', () => {
  it('Cart should contain 5 gels each with unit price of 49.99', () => {
    let cart = new Cart();
    cart.addToCart('gel', 49.99, 5);
    expect(cart.items.length).toBe(5);
    let expectedItems = [{
      name: 'gel',
      price: 49.99
    }, {
      name: 'gel',
      price: 49.99
    }, {
      name: 'gel',
      price: 49.99
    }, {
      name: 'gel',
      price: 49.99
    }, {
      name: 'gel',
      price: 49.99
    }];
    expect(cart.items).toEqual(
      expect.arrayContaining(expectedItems)
    );
  });
  it('And the shopping cart’s total price should equal 249.95 ', () => {
    let cart = new Cart();
    cart.addToCart('gel', 49.99, 5);
    expect(parseFloat(cart.totalPrice)).toBe(249.95);
  });
});
//Test Case 2: Add additional products of the same type to the shopping cart.
describe('When user adds 5 Shower gels in the shopping cart and then adds 3 shower gels', () => {
  it('Cart should contain 8 gels each with unit price of 49.99', () => {
    let cart = new Cart();
    cart.addToCart('gel', 49.99, 5);
    cart.addToCart('gel', 49.99, 3);
    expect(cart.items.length).toBe(8);
    let expectedItems = [{
        name: 'gel',
        price: 49.99
      }, {
        name: 'gel',
        price: 49.99
      }, {
        name: 'gel',
        price: 49.99
      }, {
        name: 'gel',
        price: 49.99
      }, {
        name: 'gel',
        price: 49.99
      }, {
        name: 'gel',
        price: 49.99
      },
      {
        name: 'gel',
        price: 49.99
      }, {
        name: 'gel',
        price: 49.99
      }
    ];
    expect(cart.items).toEqual(
      expect.arrayContaining(expectedItems)
    );
  });

  it('And the shopping cart’s total price should equal 399.92 ', () => {
    let cart = new Cart();
    cart.addToCart('gel', 49.99, 8);
    expect(parseFloat(cart.totalPrice)).toBe(399.92);
  });
});

//Test Case 3: Calculate the tax rate of the shopping cart with multiple items
describe('The user adds 2 Shower Gels to the shopping cart, And then adds 2 Deodorant to the shopping cart', () => {
  it('should contain 2 gels each with unit price of 49.99 and 2 deodrants each with unit price 99.99', () => {
    let cart = new Cart();
    cart.addToCart('gel', 49.99, 2);
    cart.addToCart('deodrant', 99.99, 2);
    expect(cart.items.length).toBe(4);
    let expectedItems = [{
      name: 'gel',
      price: 49.99
    }, {
      name: 'gel',
      price: 49.99
    }, {
      name: 'deodrant',
      price: 99.99
    }, {
      name: 'deodrant',
      price: 99.99
    }];
    expect(cart.items).toEqual(
      expect.arrayContaining(expectedItems)
    );
  });


  it('And the shopping cart’s total price should equal 249.95 ', () => {
    let cart = new Cart();
    cart.addToCart('gel', 49.99, 2);
    cart.addToCart('deodrant', 99.99, 2);
    expect(parseFloat(cart.afterTaxPrice)).toBe(337.46);
  });
});