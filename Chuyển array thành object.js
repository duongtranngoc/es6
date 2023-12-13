var arr = [5, 6, 7, 8];
var arrayToString = JSON.stringify(Object.assign({}, arr));  // convert array to string
var stringToJsonObject = JSON.parse(arrayToString);  // convert string to json object

console.log(stringToJsonObject);



function arrToObj(arr) {
    const obj = Object.fromEntries(arr);
    return obj;
}

const obj1 = arrToObj([
    ['name', 'Dương'],
    ['age', 22],
    ['address', 'Tây Sơn']
]);

console.log(obj1);

const obj2 = arrToObj([
    ['name', 'Thy'],
    ['age', 22],
    ['address', 'Hoàng Văn Thái']
])
console.log(obj2)