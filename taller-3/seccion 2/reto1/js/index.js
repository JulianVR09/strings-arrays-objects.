let marks = prompt("Ingresa las calificaciones separandolas por comas(,);");
let arrayMark = marks.split(",");
let newArr = [];
for(let i = 0; i < arrayMark.length; i++){
    newArr.push(Number(arrayMark[i]));
};
let mark = 0

for(let i = 0; i < newArr.length; i++){
    mark = newArr[i] + mark;
};

let prom = mark/newArr.length

console.log(prom);