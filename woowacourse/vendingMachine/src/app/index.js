import View from "../view";
import TabController from "../controller/TabController.js";

/*

프로젝트 구조

App이 TabController를 포함하고 TabController는 다른 Controller의 상호작용을 관리하는 구조

 */

export default class App {
    constructor() {
        this.view = new View();
        this.tabController = new TabController(this.view);
    }

    init() {
        const $app = document.getElementById("app");
        $app.appendChild(this.view.init());
        this.view.getElement();
        this.tabController.init();
    }


}