function checkPhone(phoneNumber) {
    if (phoneNumber.length < 10 || phoneNumber.length > 11) {
        console.log("에러 발생!!! 핸드폰 번호를 제대로 입력해 주세요!!")
        return false
    }
    return true
}

function getToken() {
    return String(Math.floor(Math.random() * 1000000)).padStart(6, "0")
}

function sendTokenSMS(phoneNumber, token) {
    console.log(phoneNumber + "번호로 인증번호 " + token + "를 전송합니다.")
}

function tokenAPI(phoneNumber) {
    // 1. 휴대폰 상태 점검
    const isValid = checkPhone(phoneNumber)
    if (!isValid) return

    // 2. 토큰 발급
    const token = getToken()

    // 3. 휴대폰에 토큰 발송
    sendTokenSMS(phoneNumber, token)
}

tokenAPI("01030227210");