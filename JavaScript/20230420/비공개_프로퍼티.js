// # 키워드를 이용하면 프로퍼티를 비공개로 전환할 수 있습니다.
// 이제 #password 의 값에 접근하고 수정하려면 반드시 해당하는 기능을 하는 메서드를 사용해야합니다.
//이때 값을 불러오는 메서드를 getter 메서드, 값을 수정하는 메서드를 setter 메서드로 부릅니다

/* get 과 set을 사용할 때 주의할 점!
get과 set을 사용하면 마지 객체의 프로퍼티를 수정하는것 같은 간편함을 느낄 수 있습니다. 하지만 해당 코드를 직접 작성하지 않은 협업자들에게는 오해를 일으킬 소지가 있습니다. get, set 안에 어떤 로직이 들어있는지 파악하지 못하고 단순히 객체의 프로퍼티를 수정한다는 착각을 일으킬 수 있기 때문입니다.
때문에 협업 시에는 주석이나, 가이드 문서를 만들어 충분한 정보를 제공해주는것이 좋습니다.*/

class Robot {
    #password

    constructor(name, pw) {
        this.name = name;
        this.#password = pw;
    }


    sayYourName() {
        console.log(`삐리비리. 제 이름은 ${this.name}입니다. 주인님.`);
    }

    getPassword() {
        return this.#password
    }

    setPassword(pw) {
        this.#password = pw;
    }
}

const myBot = new Robot('김가람', '1000');