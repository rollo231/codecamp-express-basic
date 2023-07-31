class Monster {
    power = 0

    constructor(power) {
        this.power = power
    }

    attack = () => {
        console.log("공격하지!!")
        console.log("내 공격력은 " + this.power + "야!!")
    }

    run = () => {
        console.log("도망가자!!!")
    }
}

class WingMonster extends Monster {
    constructor(power) {
        super(power + 1);
    }

    // 오버라이딩
    run = () => {
        console.log("날라서 도망가자!!")
    }
}

class LandMonster extends Monster {
    constructor(power) {
        super(power + 2);
    }

    // 오버라이딩
    run = () => {
        console.log("뛰어서 도망가자!!")
    }
}

const myMonster1 = new Monster(10)
myMonster1.attack()
myMonster1.run()

const myMonster2 = new WingMonster(20)
myMonster2.attack()
myMonster2.run()

const myMonster3 = new LandMonster(20)
myMonster3.attack()
myMonster3.run()
