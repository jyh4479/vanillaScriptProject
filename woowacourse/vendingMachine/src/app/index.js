import View from "../view";

/*

app은 사용자 event에 따라 view를 컨트롤하여 보여줌 (ex controller와 비슷한 동작)

*/

export default class App {
    constructor() {
        this.view = new View();
    }

    init() {
        const $app = document.getElementById("app");

        $app.appendChild(this.view.init());
        this.view.getElement();

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