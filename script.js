const pizzas = [
    {
        "id": 1,
        "nombre": "Muza",
        "ingredientes": ["Tomate", "Mozarela", "Oregano"],
        "precio": 500
    },
    {
        "id": 2,
        "nombre": "Margarita",
        "ingredientes": ["Tomate", "Mozarela", "Albahaca"],
        "precio": 600
    },
    {
        "id": 3,
        "nombre": "Cuatro Quesos",
        "ingredientes": ["Mozarela", "Gorgonzola", "Fontina", "Parmesano"],
        "precio": 800
    },
    {
        "id": 4,
        "nombre": "Fugazzeta",
        "ingredientes": ["Mozarela", "Cebolla"],
        "precio": 600
    },
    {
        "id": 5,
        "nombre": "Pepperoni",
        "ingredientes": ["Tomate", "Mozarela", "Pepperoni"],
        "precio": 700
    },
    {
        "id": 6,
        "nombre": "JamonYMorron",
        "ingredientes": ["Tomate", "Mozarela", "Jamon", "Morron"],
        "precio": 700
    }
]

console.log("¡Bienvenido/a a Pizerria de la Nonna!")
console.log("A continuación le dejo la carta con nuestra selección de pizzas:")
pizzas.forEach((pizza) =>
    console.log(pizza.nombre)
)
console.log('Para más informacion acerca de nuestras pizzas acceda a los puntos (a, b, c y d) inicializando la funcion con la letra respectiva y pasandole como parametro (pizzas). Ejemplo: "a(pizzas)".')
console.log("a: Pizzas con ID impar.")
console.log("b: Pizza con precio menor a $600.")
console.log("c: Cada pizza con su precio.")
console.log("d: Todos los ingredientes de cada pizza.")

function a(pizzas) {
    pizzas.filter((pizza) => pizza.id % 2 !== 0 ? console.log(`La pizza ${pizza.nombre} tiene un ID impar.`) : null)
}

function b(pizzas) {
    pizzas.some((pizza) => pizza.precio < 600 ? console.log(`La pizza ${pizza.nombre} tiene un precio menor a $600.`) : null)
}

function c(pizzas) {
    pizzas.forEach((pizza) => console.log(`La pizza ${pizza.nombre} tiene un precio de: $${pizza.precio}.`))
}
function d(pizzas) {
    pizzas.forEach((pizzas) => {
        console.log(`La pizza ${pizzas.nombre} tiene:`)
    
        pizzas.ingredientes.forEach( (ingrediente) => {
            console.log(`- ${ingrediente}`)
        })
    })
}
