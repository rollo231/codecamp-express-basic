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

export function sendTokenSMS(phoneNumber, token) {
    console.log(phoneNumber + "번호로 인증번호 " + token + "를 전송합니다.")
}