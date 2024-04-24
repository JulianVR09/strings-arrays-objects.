let id = 0
let boolean = true
const mockedArr = [
    {
        id: 1, // Identificador único
        name: 'Evento 1', // Nombre del Evento
        date: '2021-12-31', // Fecha del Evento
        description: 'Descripción del Evento 1', // Descripción del Evento
    },
    {
        id: 2, // Identificador único
        name: 'Evento 2', // Nombre del Evento
        date: '2024-04-24', // Fecha del Evento
        description: 'Descripción del Evento 2', // Descripción del Evento
    },
    {
        id: 3, // Identificador único
        name: 'Evento 3', // Nombre del Evento
        date: '2021-12-31', // Fecha del Evento
        description: 'Descripción del Evento 3', // Descripción del Evento
    },
]
const arr = []

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
            let nameEvent = prompt(
                'Ingrese el nombre del evento que desea buscar: '
            )
            // const filteredEvents = arr.filter(e => e.event === nameEvent)

            const filteredEvents = mockedArr.filter(e => e.name === nameEvent)


            // if (filteredEvents.length === 0) {
            if (!filteredEvents.length) {
                console.log('No existe ningun evento con ese nombre')
                break
            }
            filteredEvents.forEach((event, index) => {
                console.log(event)
                console.log(`${index + 1}. ${event.name} | ${event.date}`)
            })
            break
        }
        case 3: {
            console.log(arr)
            break
        }
        
        case 6: {
            boolean = false
            break
        }
    }
}
