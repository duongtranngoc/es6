// 1. Định nghĩa key, value cho object
var name = 'Dương';
var age = 22;

var student = {
    // name: name,
    // age: age,
    // Rút gọn phần trên thành phần bên dưới
    name,
    age
}

console.log(student);


// 2. Định nghĩa method cho object
var name = 'Dương';
var age = 22;

var student = {
    name,
    age,
    // getName: function() {
    //     return name;
    // }
    // Rút gọn phần trên thành phần bên dưới
    getName() {
        return name;
    }
}

console.log(student.getName());

// 3. Định nghĩa key cho object dưới dạng biến
var fieldName = 'name';
var fieldAge = 'age';

var student = {
    [fieldName]: 'Dương',
    [fieldAge]: '22',
}

console.log(student);