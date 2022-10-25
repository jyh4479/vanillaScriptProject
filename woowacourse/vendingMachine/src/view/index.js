import {CHANGE_CHARGE_TEMPLATE, PRODUCT_MANAGE_TEMPLATE, PRODUCT_PURCHASE_TEMPLATE, TAB_LIST} from "./viewTemplate";
import {clearChildElement, stringToHTML, stringToTableHTML} from "../util/Dom.js";

export default class View {
    $header;
    $body;

    constructor() {
    }

    init() {
        const appContainer = document.createElement("div");
        const headerContainer = document.createElement("div");
        const bodyContainer = document.createElement("div");

        headerContainer.setAttribute("id", "appHeader");
        bodyContainer.setAttribute("id", "appBody");

        headerContainer.appendChild(stringToHTML(TAB_LIST));
        bodyContainer.appendChild(stringToHTML(PRODUCT_MANAGE_TEMPLATE));

        appContainer.appendChild(headerContainer);
        appContainer.appendChild(bodyContainer);

        return appContainer;
    }

    getElement() {
        this.$header = document.getElementById("appHeader");
        this.$body = document.getElementById("appBody");
    }

    getProductManageTemplate() {
        clearChildElement(this.$body);
        this.$body.appendChild(stringToHTML(PRODUCT_MANAGE_TEMPLATE));
    }

    getProductPurchaseTemplate() {
        clearChildElement(this.$body);
        this.$body.appendChild(stringToHTML(PRODUCT_PURCHASE_TEMPLATE));
    }

    getChangeChargeTemplate() {
        clearChildElement(this.$body);
        this.$body.appendChild(stringToHTML(CHANGE_CHARGE_TEMPLATE));
    }

    /* ------------------------------------------------------------ */

    getItemListView(itemList) {
        const $tableBody = document.getElementById("product-body");
        clearChildElement($tableBody);

        itemList.forEach(item => {
            $tableBody.appendChild(stringToTableHTML(`<td>${item.name}</td><td>${item.price}</td><td>${item.quantity}</td>`));
        })
    }
}