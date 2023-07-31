import express from 'express'
import {ProductController} from "./mvc/controllers/product.controller.js";
import {CouponController} from "./mvc/controllers/coupon.controller.js";
import {CashService} from "./mvc/controllers/services/cash.service.js";
import {PointService} from "./mvc/controllers/services/point.service.js";
import {ProductService} from "./mvc/controllers/services/product.service.js";

const app = express()
const port = 3000

// services
const cashService = new CashService();
const pointService = new PointService();
const productService = new ProductService();

// controllers
const productController = new ProductController(cashService, productService);
app.post('/products/buy', productController.buyProduct)
app.post('/products/refund', productController.refundProduct)

const couponController = new CouponController(cashService);
app.post("/coupons/buy", couponController.buyCoupon)

// listen
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
