export const TAB_LIST = `
<div>
<button id="product-add-menu">상품 관리</button>
<button id="vending-machine-manage-menu">잔돈 충전</button>
<button id="product-purchase-menu">상품 구매</button>
</div>
`


export const PRODUCT_MANAGE_TEMPLATE = `
<div>
<h2>상품 추가하기</h2>
<input placeholder="상품"/>
<input placeholder="가격"/>
<input placeholder="수량"/>
<button>추가하기</button>
</div>
`
export const PRODUCT_PURCHASE_TEMPLATE = `
<div>
<h2>자판기 동전 충전하기</h2>
<input type="number"/>
<button>충전하기</button>
</div>
`
export const CHANGE_CHARGE_TEMPLATE = `
<div>
<h2>금액 투입</h2>
<input type="number"/>
<button>투입하기</button>
</div>
`