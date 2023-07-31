import express from 'express'
import {ProductController} from "./mvc/controllers/product.controller.js";

const app = express()
const port = 3000

// 상품 API
const productController = new ProductController();
app.post('/products/buy', productController.buyProduct)
app.post('/products/refund', productController.refundProduct)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
