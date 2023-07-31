import express from 'express'
import * as phone from './phone.js'
import swaggerUi from 'swagger-ui-express'
import swaggerJsdoc from 'swagger-jsdoc'
import {options} from "./swagger/config.js"
import cors from 'cors'
import {checkEmail, getWelcomeTemplate, senTemplateToEmail} from "./email.js"

const app = express()
const port = 4000
app.use(express.json())
app.use(cors())
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerJsdoc(options)));

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

app.post("/users", (req, res) => {
    const {name, age, school, email, createdAt} = req.body

    // 1. 이메일이 정상인지 확인(1-존재여부, 2-"@"포함여부)
    const isValid = checkEmail(email)
    if (!isValid) return

    // 2. 가입환영 템플릿 만들기
    const myTemplate = getWelcomeTemplate({name, age, school, createdAt})

    // 3. 이메일에 가입환영 템플릿 전송하기
    senTemplateToEmail(email, myTemplate)

    res.send("가입완료!")
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})