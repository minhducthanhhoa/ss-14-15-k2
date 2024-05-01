"use strict";
class MenuItem {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}
class Table {
    constructor(id, capacity) {
        this.id = id;
        this.capacity = capacity;
        this.available = true;
    }
}
class Reservation {
    constructor(id, customerName, tableId) {
        this.id = id;
        this.customerName = customerName;
        this.tableId = tableId;
    }
}
class Order {
    constructor(id, tableId, items) {
        this.id = id;
        this.tableId = tableId;
        this.items = items;
    }
    getTotal() {
        let total = 0;
        for (let item of this.items) {
            total += item.price;
        }
        return total;
    }
}
class Restaurant {
    constructor() {
        this.menu = [];
        this.tables = [];
        this.reservations = [];
        this.orders = [];
    }
    addMenuItem(item) {
        this.menu.push(item);
    }
    addTable(table) {
        this.tables.push(table);
    }
    makeReservation(reservation) {
        let table = this.tables.find((t) => t.id === reservation.tableId);
        if (table) {
            if (table.available) {
                table.available = false;
                this.reservations.push(reservation);
                console.log(`Bàn ${table.id} được dành cho ${reservation.customerName}.`);
            }
            else {
                console.log(`Bàn ${table.id} đã được đặt trước.`);
            }
        }
        else {
            console.log(`Bàn ${reservation.tableId} không tồn tại.`);
        }
    }
    placeOrder(order) {
        this.orders.push(order);
    }
    generateBill(tableId) {
        let order = this.orders.find((o) => o.tableId === tableId);
        if (order) {
            let total = order.getTotal();
            console.log(`Hóa đơn bàn ${tableId}: $${total}.`);
            let table = this.tables.find((t) => t.id === tableId);
            if (table) {
                table.available = true;
            }
        }
        else {
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
