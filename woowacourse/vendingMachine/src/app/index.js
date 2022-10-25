import View from "../view";
import TabController from "../controller/TabController.js";
import ItemController from "../controller/ItemController.js";

export default class App {
    constructor() {
        this.view = new View();
        this.tabController = new TabController(this.view);
        this.itemController = new ItemController(this.view);
    }

    init() {
        const $app = document.getElementById("app");

        $app.appendChild(this.view.init());
        this.view.getElement();

        this.tabController.init();
        this.itemController.init();
    }
}