// const express = require('express') // 옛날방식 => commonjs
import express from 'express' // 요즘방식 => module, export default 가져오기(이름변경가능)
import * as phone from './phone.js'

const app = express()
app.use(express.json())
const port = 3000

app.get('/boards', function (req, res) {
    // 1. DB에 접속 후, 데이터를 조회 => 데이터를 조회했다고 가정
    const result = [
        {number: 1, writer: "lee", title: "hi", contents: "neyo boy"},
        {number: 2, writer: "park", title: "hi", contents: "neyo man"},
        {number: 3, writer: "shu", title: "hi", contents: "neyo girl"}
    ]

    // 2. DB 에서 꺼내온 결과를 브라우저에 응답(response) 주기
    res.send(result)
})

app.post('/boards', function (req, res) {
    // 1. 브라우저에서 보내준 데이터 확인하기
    console.log(req)
    console.log("========================")
    console.log(req.body)

    // 2. DB에 접속 후, 데이터를 저장 => 데이터 저장했다고 가정

    // 3. DB에 저장된 결과를 브라우저에 응답(response) 주기
    res.send("게시물 등록에 성공하였습니다.")
})

app.post('/tokens/phone', function (req, res) {
    const isValid = phone.checkPhone(req.body.phoneNumber)
    if (!isValid) return

    // 2. 토큰 발급
    const token = phone.getToken()

    // 3. 휴대폰에 토큰 발송
    phone.sendTokenSMS(req.body.phoneNumber, token)

    res.send("인증완료!!!")
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})