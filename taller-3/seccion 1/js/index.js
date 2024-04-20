const users = [];

function diccionario(a, b){
    return{
        Email : a,
        Nickname : b,
    }
}

let i = 1;

while(i==1){
    let UserName = prompt("Ingrese su nombre y apellido: ").toLowerCase();
    console.log(UserName.split(" "))
    let name = UserName.split(" ")[0].slice(0, 3);
    let lastname = UserName.split(" ")[1].slice(0, 3);

    console.log("Su usuario es: " + name + lastname);
    console.log("Su correo electronico es: " + name + lastname + "@myDomain.com");

    let email = name + lastname + "@myDomain.com";
    let nickname = name + lastname; // user lastName = userlast
    let boolean = users.some(e => e.Email === email);
    console.log(boolean)

    if(boolean){
        let n = 1;
        let emailn = name + lastname + n + "@myDomain.com";
        let nicknamen = name + lastname + n;
        let booleann = users.some(e => e.Email === nicknamen);
        if (booleann){
            n += 1;
        } else {
            users.push(diccionario(emailn, nicknamen));
            i = parseInt(prompt("¿Deseas agregar otro usuario?: (1)Si (2)No"));
        };
    };

    if (!boolean){
        users.push(diccionario(email, nickname));
    i = parseInt(prompt("¿Deseas agregar otro usuario?: (1)Si (2)No"));
    };
};

console.log(users);