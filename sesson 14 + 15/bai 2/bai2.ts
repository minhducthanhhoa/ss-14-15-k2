class Product1 {
    id:number;
    name:string;
    price:number;
    constructor(id:number,name:string,price:number){
        this.id = id;
        this.name = name;
        this.price = price;
    }
}
class CartProduct extends Product1{
    quanlity:number;
    constructor(id:number,name:string,price:number,quanlity:number){
        super(id,name,price);
        this.quanlity = quanlity;
    }
    calculatePrice(): number{
        return this.price * this.quanlity;
    }
    increaseQuanlity(): void{
        this.quanlity++;
    }
    decreaseQuanlity(): void{
        if(this.quanlity > 1){
            this.quanlity--;
        }
    }
}

class ShopProduct extends Product1{
    stock:number;
    constructor(id:number,name:string,price:number,stock:number){
        super(id,name,price);
        this.stock = stock;
    }
}
class Cart{
    items: CartProduct[];
    constructor(){
        this.items = [];
    }
    addItem(product: ShopProduct, quanlity:number):void{
        if(quanlity > product.stock){
            console.log(`Không thể thêm ${quanlity} ${product.name} vào giỏ hàng. Không đủ hàng`);
            return;
        }
        let cartProduct = new CartProduct(product.id,product.name,product.price,quanlity);
        this.items.push(cartProduct);
        console.log(`Thêm ${quanlity} ${product.name} vào giỏ hàng.`);
    }
    removeItem(cartProduct: CartProduct): void{
        let index = this.items.indexOf(cartProduct);
        if(index !== -1){
            this.items.splice(index,1);
            console.log(`Xóa ${cartProduct.name} ra khỏi giỏ hàng.`);
        }
    }
    getTotal():number{
        let total=0;
        for(let cartProduct of this.items){
            total += cartProduct.calculatePrice();
        }
        return total;
    }
}

let products: ShopProduct[] = [
    new ShopProduct(1, "minh thu", 10, 5),
    new ShopProduct(2, "hoa", 20, 3),
    new ShopProduct(3, "hue", 15, 7),
];
let cart = new Cart();

cart.addItem(products[0], 2);
cart.addItem(products[1], 4);
cart.addItem(products[2], 10);
cart.addItem(products[0], 6);

cart.removeItem(cart.items[1]);
console.log("Cart Total: ", cart.getTotal());