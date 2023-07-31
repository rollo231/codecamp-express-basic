import coolsms from 'coolsms-node-sdk'

const mysms = coolsms.default

export function checkPhone(phoneNumber) {
    if (phoneNumber.length < 10 || phoneNumber.length > 11) {
        console.log("에러 발생!!! 핸드폰 번호를 제대로 입력해 주세요!!")
        return false
    }
    return true
}

export function getToken() {
    return String(Math.floor(Math.random() * 1000000)).padStart(6, "0")
}

export async function sendTokenSMS(phoneNumber, token) {
    const messageService = new mysms('ENTER_YOUR_API_KEY', 'ENTER_YOUR_API_SECRET');
    const res = await messageService.sendOne({
            to: phoneNumber,
            from: "01030227210",
            text: `[ㅎㅇㅎㅇ] 요청하신 인증번호는 ${token}`
        }
    )
    console.log(res)
}