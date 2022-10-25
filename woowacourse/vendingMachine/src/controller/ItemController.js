import Item from "../model/Item.js";

export default class ItemController {
    constructor(view) {
        this.view = view;
        this.item = new Item();
    }

    init() {
        document.getElementById("product-add-button").addEventListener("click", () => this.addItem());
    }

    addItem() {
        const name = document.getElementById("product-name-input").value;
        const price = document.getElementById("product-price-input").value;
        const quantity = document.getElementById("product-quantity-input").value;

        this.item.addItem(name, price, quantity);
        this.view.getItemListView(this.item.getItemList());
    }
}