import Product from './Product';

class Cart {
    constructor() {
        this.items = [];
        this.totalPrice = 0;
        this.afterTaxPrice = 0;
    }
    addToCart(name, price, quantity) {
        let product = new Product(name, price);
        const salesTaxRate = 12.5;
        let salesTaxTotal = 0;

        for (let i = 0; i < quantity; i++) {
            this.items.push(product);
            this.totalPrice += product.price;
            salesTaxTotal = (this.totalPrice * salesTaxRate) / 100;
            this.afterTaxPrice = this.totalPrice + salesTaxTotal;
        }
        //console.log(this.items);
        this.totalPrice = (Math.round(this.totalPrice * 100) / 100);
        this.afterTaxPrice = (Math.round(this.afterTaxPrice * 100) / 100);
        
    }
};
export default Cart;