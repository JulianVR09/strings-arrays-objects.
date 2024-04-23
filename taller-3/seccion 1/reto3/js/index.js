const email = prompt("Ingrese el correo electronico");

let arr = email.split("");
let counterspecial = 0;
let counterpoint = 0;
let counterspace = 0;

arr.forEach(e => {if(e === "@"){counterspecial ++}});

arr.forEach(e => {if(e === "."){counterpoint ++}});

arr.forEach(e => {if(e === " "){counterspace ++}});

if(counterspecial != 1 || counterpoint != 1 || counterspace != 0){
    console.log("Su correo es invalido");
};

console.log("Tu correo es valido")
