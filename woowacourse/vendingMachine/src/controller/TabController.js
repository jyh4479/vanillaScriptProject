import ItemController from "./ItemController.js";

export default class TabController {
    constructor(view) {
        this.view = view;
        this.itemController = new ItemController(view);
    }

    init() {
        //최초 이벤트
        document.getElementById("product-add-button").addEventListener("click", () => this.itemController.addItem());

        document.getElementById("product-add-menu").addEventListener("click", () => {
            this.view.getProductManageTemplate();
            this.itemController.getItemView();
            document.getElementById("product-add-button").addEventListener("click", () => this.itemController.addItem());
        });
        document.getElementById("vending-machine-manage-menu").addEventListener("click", () => {
            this.view.getProductPurchaseTemplate();
        });
        document.getElementById("product-purchase-menu").addEventListener("click", () => {
            this.view.getChangeChargeTemplate();
        });
    }
}