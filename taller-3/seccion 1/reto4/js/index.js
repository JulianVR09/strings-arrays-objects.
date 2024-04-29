let id = 0
let boolean = true
function obj(a, b, c, d) {
    return {
        id: d,
        name: a,
        date: b,
        description: c,
    }
}

while (boolean) {
    let menu = parseInt(
        prompt(
            'Ingresa el nuemro de la opcion que deseas realizar:\
                                \n1)Crear evento.\
                                \n2)Buscar evento.\
                                \n3)Visualizar todos los eventos.\
                                \n4)Actualizacion de evento.\
                                \n5)Eliminacion de evento.\
                                \n6)Salir.'
        )
    )
    switch (menu) {
        case 1: {
            let event = prompt('Ingresa el nombre del evento: ')
            let date = prompt('Ingrese la fecha del evento: ')
            let description = prompt('Ingrese la descripcion del objeto: ')
            arr.push(obj(event, date, description, id))
            id = ++id
            break
        }
        case 2: {
            let nameEvent = prompt('Ingrese el nombre del evento que desea buscar: ');
            const filteredEvents = arr.filter(e => e.name === nameEvent)
            if (!filteredEvents.length) {
                console.log('No existe ningun evento con ese nombre')
                break
            };
            filteredEvents.forEach((event, index) => {
                console.log(event)
                console.log(`${index + 1}. ${event.name} | ${event.date}`)
            })
            break;
        };
        case 3: {
            console.log(arr)
            break;
        };
        case 4: {
            let update = prompt("Cual es el evento que deseas modificar: ");
            let eventUpdate = arr.find(e => e.name === update);

            if(eventUpdate){
                for(let i in eventUpdate){
                    let newValor = prompt(`Ingresa el nuevo nombre que: `).trim();
                    if(newValor !== ""){
                        eventUpdate[key] = newValor;
                    };
                };
            } else{
                console.log("No se encontro ningun evento");
            };
            break;
        };
        
        case 5: {
            let eventDeleted = prompt("Ingrese el evento a eliminar: ");

        }

        case 6: {
            boolean = false
            break;
        };
    };
};
