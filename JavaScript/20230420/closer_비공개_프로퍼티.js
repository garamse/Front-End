function PersonGenrator() {
    let age = 25;  // 숨김 처리 할 것이다. (접근불가)

    function InnerPersonType() { }; // 이 함수에게 age를 접근시킴

    InnerPersonType.prototype.getAge = function () {  // 클로저 패턴 사용
        return age;
    }

    return InnerPersonType;
}

const Person = PersonGenrator(); // Person에 함수 할당
const myPerson = new Person(); // 셍성자 함수 생성 

const PersonGenerator2 = (function () {
    let age = 25;

    function InnerPersonType() { };

    InnerPersonType.prototype.getAge = function () {
        return age;
    }

    return InnerPersonType;
})();

const myPerson2 = new PersonGenerator2();