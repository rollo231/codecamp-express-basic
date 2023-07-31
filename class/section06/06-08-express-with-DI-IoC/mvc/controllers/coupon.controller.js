export class CouponController {

    cashService

    constructor(cashService) {
        this.cashService = cashService
    }

    buyCoupon = (req, res) => {
        // 1. 가진 돈 검증하는 코드
        const hasMoney = this.cashService.checkValue()

        // 2. 상품권 구매
        if (hasMoney) {
            res.send("상품권 구매 완료!!")
        }
    }
}