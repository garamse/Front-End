class Todo {
  constructor(content, status) {
    this.content = content;
    this.status = status;
  }

  changeState() {
    this.status = !this.status; // 상태를 바꾸는 함수 (!(not 연산자 활용))
  }
}

class TodoManager {
  constructor() {
    this.todoList = [];
  }

  addItem(content, status = false) {
    // 미리 상태 값 할당하기 = fasle
    const newTodo = new Todo(content, status);
    this.todoList.push(newTodo); // push로 배열에 요소 추가
  }

  getItems() {
    return this.todoList;
  }

  getLeftTodoCount() {
    return this.todoList.reduce((total, current) => {
        current.status === false ? ++total : total

    // return this.todoList.filter((content) => 
    //      content.status === false).length        // filter 방법
    
    }, 0); // 누산기 = total 초기 값 0으로 설정
  } 
}

const manager = new TodoManager();
manager.addItem('청소하기'); // false를 기본값으로 설정했기 때문에 status 값을 넣지 않아도 된다.
manager.getItems(); // {content : '청소하기', status : false}
manager.getItems()[0].changeState(); // {content : '청소하기', status : true}
manager.getLeftTodoCount(); // 남은 목록 알려줌
