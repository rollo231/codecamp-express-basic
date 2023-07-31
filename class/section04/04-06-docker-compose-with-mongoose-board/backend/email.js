import nodemailer from 'nodemailer'

export function checkEmail(email) {
    if (email === undefined || email.includes("@") === false) {
        console.log("에러 발생!!! 이메일 주소를 제대로 입력해 주세요!")
        return false
    }
    return true
}

export function getWelcomeTemplate({name, age, school}) {
    return `
        <html lang="ko">
            <body>
                <h1>${name}님 가입을 환영합니다!</h1>
                <hr />
                <div>이름: ${name}</div>
                <div>나이: ${age}</div>
                <div>학교: ${school}</div>
                <div>가입일: ${Date.now()}</div>   
            </body>
        </html>
    `
}

export async function senTemplateToEmail(email, myTemplate) {
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "231rollo@gmail.com",
            pass: ""
        }
    })

    const res = await transporter.sendMail({
        from: "231rollo@gmail.com",
        to: email,
        subject: "축하합니다",
        html: myTemplate
    })
    console.log(res)
}