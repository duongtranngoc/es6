// 1. Function declaration: có thể được gọi trước khi khởi tạo
logger('Message:........');
function logger(log) {
    console.log(log);
};

// 2. Function expression
const logger = function (log) {
    console.log(log);
};
logger('Message:........');

// 3. Arrow function
const logger = (log) => {
    console.log(log);
};

// Cách viết ngắn gọn
const logger = (log) => console.log(log);
// Ngắn gọn hơn
const logger = log => console.log(log);
logger('Message:........');

// Nếu muốn return 1 Object bằng cách viết ngắn gọn
const logger = (a, b) => ({ a: a, b: b });
logger(2, 3);

// Context
const course = {
    name: 'duongtranngoc',
    getName: function () {
        return this.name; // Trong trường hợp này, this ở đây là course. Khi this tồn tại, nó được hiểu là 1 context
    },

    getName: () => {
        return this.name; // Arrow function không có context
    }
}

console.log(course.getName());

// Constructor
const People = function (name, age) {
    this.name = name;
    this.age = age;
}

// Arrow function không có Constructor
const Student = (name, age) => {
    this.name = name;
    this.age = age;
}

const student = new People('Dương', 22);
console.log(student);