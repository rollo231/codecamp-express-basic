import express from 'express'
import {ProductController} from "./mvc/controllers/product.controller.js";
import {CouponController} from "./mvc/controllers/coupon.controller.js";

const app = express()
const port = 3000

// 상품 API
const productController = new ProductController();
app.post('/products/buy', productController.buyProduct)
app.post('/products/refund', productController.refundProduct)

// 쿠폰(상품권)API
const couponController = new CouponController();
app.post("/coupons/buy", couponController.buyCoupon)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
