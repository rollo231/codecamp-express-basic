class WingPart {
    run = () => {
        console.log("날라서 도망가자!!!")
    }
}

class LandPart {
    run = () => {
        console.log("뛰어서 도망가자!!!")
    }
}

class Monster {
    power = 10
    part

    constructor(part) {
        this.part = part
    }

    attack = () => {
        console.log("공격하지!!")
        console.log("내 공격력은 " + this.power + "야!!")
    }

    run = () => {
        this.part.run()
    }
}

const myMonster1 = new Monster(new WingPart())
myMonster1.attack()
myMonster1.run()

const myMonster2 = new Monster(new LandPart())
myMonster2.attack()
myMonster2.run()
