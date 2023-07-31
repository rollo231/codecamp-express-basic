function getWelcomeTemplate({name, age, school, createAt}) {
    const myTemplate = `
        <html lang="ko">
            <body>
                <h1>${name}님 가입을 환영합니다!</h1>
                <hr />
                <div>이름: ${name}</div>
                <div>나이: ${age}</div>
                <div>학교: ${school}</div>
                <div>가입일: ${createAt}</div>   
            </body>
        </html>
    `
    console.log(myTemplate)
}

const name = "철수"
const age = 23
const school = "다람쥐 초등학교"
const createAt = "2022-03-03"

getWelcomeTemplate({name, age, school, createAt})