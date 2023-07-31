function qqq(aaa) {
    console.log(aaa) // object
    console.log(aaa.name) // 철수
    console.log(aaa.age) // 23
    console.log(aaa.school) // 다람쥐 초등학교
}

const name = "철수"
const age = 23
const school = "다람쥐 초등학교"

const profile = {name, age, school} // 키와 밸류가 같아서, 밸류를 생략함 => shorthand-property

qqq(profile) // 1. 변수에 담어서 보내주기
qqq({name, age, school}) // 2. 그냥 통째로 보내주기

