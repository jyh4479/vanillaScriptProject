export default class TabController {
    constructor(view) {
        this.view = view;
    }

    init() {
        document.getElementById("product-add-menu").addEventListener("click", () => {
            this.view.getProductManageTemplate();
        });
        document.getElementById("vending-machine-manage-menu").addEventListener("click", () => {
            this.view.getProductPurchaseTemplate();
        });
        document.getElementById("product-purchase-menu").addEventListener("click", () => {
            this.view.getChangeChargeTemplate();
        });
    }
}