export default class Item {
    constructor() {
        this.itemList = [];
    }

    getItemList() {
        return this.itemList;
    }

    addItem(name, price, quantity) {
        this.itemList.push({name: name, price: price, quantity: quantity});
    }
}