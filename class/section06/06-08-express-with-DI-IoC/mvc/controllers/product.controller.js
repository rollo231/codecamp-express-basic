export class ProductController {

    cashService
    productService

    constructor(cashService, productService) {
        this.cashService = cashService
        this.productService = productService
    }

    buyProduct = (req, res) => {
        // 1. 가진 돈 검증하는 코드 (대략 10줄)
        const hasMoney = this.cashService.checkValue()

        // 2. 판매여부 검증하는 코드 (대략 10줄)
        const isSoldOut = this.productService.checkSoldOut()

        // 3. 상품 구매하는 코드
        if (hasMoney && !isSoldOut) {
            res.send("상품 구매 완료!")
        }
    }

    refundProduct = (req, res) => {
        // 1. 판매여부 검증하는 코드 (대략 10줄)
        const isSoldOut = this.productService.checkSoldOut()

        // 2. 상품 환불하는 코드
        if (isSoldOut) {
            res.send("상품 환불 완료!")
        }
    }
}