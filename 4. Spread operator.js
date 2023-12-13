var arr1 = ['Dương', 'Trần'];
var arr2 = ['Ngọc', 'Trần', 'Hạ', 'Yểm'];
var arr3 = [...arr2, ...arr1];

console.log(arr3);



var obj1 = {
    name: 'Dương',
    address: 'Tây Sơn',
    age: 22
};

var obj2 = {
    age: 11
};

// Lưu ý: key trong obj nào được gọi ra sau thì nó sẽ trở thành key duy nhất của obj3
var obj3 = {
    ...obj2,
    ...obj1,
};

console.log(obj3);



// Phân biệt Rest và Spread
var array = ['Dương', 'Trần', 'Ngọc', 'Trần', 'Hạ', 'Yểm'];

// Rest
function logger(...rest) {
    for (var i = 0; i < rest.length; i++) {
        console.log(rest[i]);
    }
}

// Spread
logger(...array)