class MenuItem {
    id:number;
    name:string;
    price:number;
    constructor(id:number,name:string,price:number){
        this.id = id;
        this.name = name;
        this.price = price;
    }
}
class Table {
    id:number;
    capacity:number;
    available:boolean;
    constructor(id:number,capacity:number){
        this.id = id;
        this.capacity = capacity;
        this.available = true;
    }
}
class Reservation {
    id:number;
    customerName:string;
    tableId:number;
    constructor(id:number,customerName:string,tableId:number){
        this.id = id;
        this.customerName = customerName;
        this.tableId = tableId;
    }
}
class Order {
    id:number;
    tableId:number;
    items:MenuItem[];
    constructor(id:number,tableId:number,items:MenuItem[]){
        this.id = id;
        this.tableId = tableId;
        this.items = items;
    }
    getTotal():number{
        let total = 0;
        for(let item of this.items){
            total += item.price;
        }
        return total;
    }
}
class Restaurant {
    menu:MenuItem[];
    tables:Table[];
    reservations: Reservation[];
    orders:Order[];
    constructor(){
        this.menu = [];
        this.tables = [];
        this.reservations = [];
        this.orders = [];
    }
    addMenuItem(item:MenuItem):void{
        this.menu.push(item);
    }
    addTable(table:Table):void{
        this.tables.push(table);
    }
    makeReservation(reservation: Reservation):void{
        let table = this.tables.find((t) => t.id === reservation.tableId);
        if(table){
            if(table.available){
                table.available = false;
                this.reservations.push(reservation);
                console.log(`Bàn ${table.id} được dành cho ${reservation.customerName}.`);
            } else {
                console.log(`Bàn ${table.id} đã được đặt trước.`);
            } 
        } else {
            console.log(`Bàn ${reservation.tableId} không tồn tại.`);
        }
    }
    placeOrder(order:Order){
        this.orders.push(order);
    }
    generateBill(tableId:number):void{
        let order = this.orders.find((o) => o.tableId === tableId);
        if(order){
            let total = order.getTotal();
            console.log(`Hóa đơn bàn ${tableId}: $${total}.`);
            let table = this.tables.find((t) => t.id === tableId);
            if(table){
                table.available = true;
            }
        } else {
            console.log(`Không tìm thấy đơn hàng nào cho bàn ${tableId}`);
        }
    }
}
const restaurant = new Restaurant();

const menuItem1 = new MenuItem(1, "Item 1", 10);
const menuItem2 = new MenuItem(2, "Item 2", 15);
restaurant.addMenuItem(menuItem1);
restaurant.addMenuItem(menuItem2);

const table1 = new Table(1, 4);
const table2 = new Table(2, 6);
restaurant.addTable(table1);
restaurant.addTable(table2);

const reservation1 = new Reservation(1, "John Doe", 1);
const reservation2 = new Reservation(2, "Jane Smith", 2);
restaurant.makeReservation(reservation1);
restaurant.makeReservation(reservation2);
restaurant.makeReservation(reservation2); 

const order1 = new Order(1, 1, [menuItem1, menuItem2]);
const order2 = new Order(2, 2, [menuItem2]);
restaurant.placeOrder(order1);
restaurant.placeOrder(order2);

restaurant.generateBill(1);
restaurant.generateBill(2);