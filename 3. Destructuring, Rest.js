var arr = ['Trần', 'Hạ', 'Yểm'];
var [a, ...rest] = arr;
// ...rest sẽ lấy các phần tử còn lại

console.log(a);
console.log(rest);



var obj = {
    name: 'Dương',
    age: 22,
    address: 'Tây Sơn',
    description: 'Đần'
};
var { name, ...newObject } = obj;
var { name, description = 'default' } = obj;

console.log(newObject);
console.log(description); // nếu không có trong obj thì nó sẽ hiển thị default



function logger(a, b, ...params) {
    console.log(params);
};

logger(1, 2, 3, 4, 5, 6);



function logger({ nameInput, ageInput, ...rest }) {
    console.log(nameInput);
    console.log(ageInput);
    console.log(rest);
};

logger({
    name: 'Dương',
    age: 22,
    address: 'Tây Sơn',
    description: 'Đần'
});



function logger([a, b, ...rest]) {
    console.log(a);
    console.log(b);
    console.log(rest);
};

logger([1, 2, 3, 4, 5, 6]);