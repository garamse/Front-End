
class Sausage {
    constructor(type1, type2) {
        this.inside1 = type1;
        this.inside2 = type2;
    }

    taste() {
        console.log(`이건 ${this.inside1}맛과(와) ${this.inside2}맛이 나는 소세지!`)
    }
}

// 상속 받는 클래스

class FireSausage extends Sausage {
    constructor(type1,type2, type3) {
        super(type1,type2);
        this.inside3 = type3;
    }

    // 오버라이딩
    taste() {
        console.log(`이건 ${this.inside1}맛과(와) ${this.inside2}맛과 (와) ${this.inside3} 맛이 나는 소세지!`)
    }
}

const sausage = new Sausage('불고기', '카레');
const fireSausage = new FireSausage('불고기', '카레', '매운');