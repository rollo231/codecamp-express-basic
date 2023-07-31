// 구조분해할당 예제
const profile = {
    name: "lee",
    age: 12,
    school: "high"
}

const {name, school} = profile
console.log(name, school)

// 1. 일반 변수 전달하기
function zzz(aaa) { // const aaa = "사과"
    console.log(aaa) // 사과
}

zzz("사과")

// 2. 객체 전달하기
function zzz1(aaa) {
    console.log(aaa)
}

const basket = {apple: 3, banana: 10};
zzz1(basket)

// 3. 객체 전달하기 => 구조분해할당 방식
function zzz2({banana, apple}) {
    console.log(banana)
    console.log(apple)
}

zzz2(basket)