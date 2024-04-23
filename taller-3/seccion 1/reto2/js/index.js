let password = prompt("Ingrese una contraseña: ");

function valuedpassword (a){
    return /[a-zA-Z0-9!@#$%^&*()+=_-{}[\]:;"'?<>,.|/\~`].{8,}/.test(a)
};

const boolean = valuedpassword(password)

if (boolean){
    console.log("Tu contraseña es segura")
} else{
    console.log("Tu contraseña es insegura")
};