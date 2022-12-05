console.log("Welcome to JS!");
//alert("hola!");

/********IF-ELSE********/
function ejemploIfElse() {

    // 3 condiciones --> green,yellow,red
    let color = prompt("Introduzca color");

    if (color === "green") {
        console.log("Puedes pasar");
    } else if (color === "yellow") {
        console.log("Cruza. Cambiará rápido");
    }
    else if (color === "blue") {
        console.log("No sé que es esto. Corre!");
    }
    else { // red
        console.log("Espera");
    }
}


/********SWITCH*********/
function ejemploSwitch() {
    // 3 condiciones --> green,yellow,red
    let color = prompt("Introduzca color");

    switch (color) {
        case "green":
            console.log("Puedes pasar");
            break;
        case "yellow":
            console.log("Cruza. Cambiará rápido");
            break;
        case "blue":
            console.log("No sé que es esto. Corre!");
            break;
        case "red":
            console.log("Espera");
            break;
        default:
            console.log("Error de semáforo");
            break;
    }
}

function encenderPC() {
    // 3 condiciones --> green,yellow,red
    let option = prompt("Introduzca opción");

    switch (option) {
        case "reset":
            console.log("F.Reinicia sistema");
        case "start":
            console.log("F.Enciende PC");
        case "login":
            console.log("F.Loguearse en el sistema");
            break;

        default:
            console.log("Error de PC");
            break;
    }
}

function ejemploFor() {
    for (let i = 1996; i <= 2022; i++) {

        if (i % 2 == 0) {
            continue;
        }

        if (i > 2011) {
            break;
        }
        console.log("Año " + i);
    }
}

function ejemploWhile() {

    let i = 1996;
    while (i <= 2022) {

        if (i % 2 == 0) {
            i++;
            continue;
        }

        if (i > 2011) {
            break;
        }

        console.log("Año " + i);
        i++;
    }
}

function comprobarNombre() {
    let intentos = 0;
    while (intentos < 3) {
        let nombre = prompt("introduce nombre");
        if (nombre != "") {
            console.log("Nombre: " + nombre);
            break;
        }

        intentos++;
    }
}
function comprobarNombre2() {

    while (true) {
        let nombre = prompt("introduce nombre");
        if (nombre != "") {
            console.log("Nombre: " + nombre);
            break;
        }

    }
}

// While --> 0-N veces
// Do-While --> 1-N veces

function ejemploDoWhile() {
    i = 0;
    let text = "";
    do {
        text += "The number is " + i + "\n";
        console.log(text);
        i++;
    }
    while (i < 10);
}

//Si es mult2 y distinto 20 y distinto 0 y además no es mult8 o ni de mult6
function ejemploCondicionales(num) {
    if (num % 2 == 0 && num != 20 && num != 0 && !(num % 8 == 0 || num % 6 == 0)) {
        console.log("Número cumple las restricciones");
    }
}

function ejemploCondicionalesHell(num) {
    if (num % 2 == 0) {
        if (num != 20) {
            if (num != 0) {
                if (!(num % 8 == 0 || num % 6 == 0)) {
                    console.log("Número cumple las restricciones");
                } else {
                    console.log("Falla condicion 4");
                }
            } else {
                console.log("Falla condicion 3");
            }
        } else {
            console.log("Falla condicion 2");
        }
    } else {
        console.log("Falla condicion 1");
    }
}



function ejemploArray() {
    // posición 0 a N-1 --> N es data.length
    let data = [1, "hola", 2.2, true, [2, 3, 5], [[5, 3], [2, 7], [1, 10]]];
    console.log(data[1]); //"hola"
    console.log(data[data.length - 1]); //[[5,3],[2,7],[1,10]]
    console.log(data[4][1]);
    console.log(data[5][1][1]);

    const fruits = ["Banana", "Orange", "Apple", "Strawberry", "Tangerine"];

    for (let i = 0; i < fruits.length; i++) {
        console.log(fruits[i]);
    }

    //Sólo para arrays For-each
    fruits.forEach(function (fruit) {
        console.log(fruit);
    })

    // Añadir elementos
    fruits.push("Mango");
    fruits.push("Rabsperry", "Grapes", "Melon");

    console.log(fruits);

    // Borrar elementos
    //ultimo
    fruits.pop();
    console.log(fruits);

}


function sum(a, b) {
    return a + b;
}
const res = sum(1, 3);
console.log("El resultado fue " + res);
console.log("El cuadrado del resultado es: " + res ** 2);

// Función flecha
const sum2 = (a, b) => a + b;
const res2 = sum2(1, 3);
console.log("El resultado fue " + res2);
console.log("El cuadrado del resultado es: " + res2 ** 2);



const sub = function (a, b) {
    let result = a - b;
    return result;
}

function getDate() {
    const date = new Date();
    return date;
}

function createUser(name) {

    if (name.length > 0 && name.length < 10) {
        return "usuario creado: " + name;
    } else {
        return "error nombre usuario";
    }
}

function ejemploObjetos() {
    let cars = [{ type: 'Fiat', model: '500', color: 'white' }, { type: 'Opel', model: 'Corsa', color: 'Blue' }, { type: 'Peugeot', model: '609', color: 'green' }]
    cars[1]['model']

    let cars2 = [{ type: 'Fiat', model: '500', color: 'white', 'max-tara': 1500 }, { type: 'Opel', model: 'Corsa', color: 'Blue', 'max-tara': 1600 }, { type: 'Peugeot', model: '609', color: 'green', 'max-tara': 1700 }]
    cars2[1]['max-tara']
    // cars[1].max-tara // Error  

    let car = {
        type: "Fiat",
        model: "500",
        color: "white",
        'max-tara': 1700,
        speed: 0,
        drive: function (newSpeed) {
            this.speed = newSpeed;
            console.log("Estás conduciendo a:" + this.speed);
        },
        getInfo: function () {
            console.log(this.type, this.model, this.color, this['max-tara']);
        }
    };
}

function ejemploString() {

    let cadena = "hola que tal te va la vida";

    for (let i = 0; i < cadena.length; i++) {
        if (cadena[i] !== " ") {
            console.log(cadena[i]);
        }
    }
    text.slice(7, 13);

    text.slice(-12);
    let email = "hola@gmail.com"
    email.slice(-4)


    //Reemplazar parte de un string
    let message = "hola que tal";
    let arrMess = message.split(" ");
    arrMess[0] = 'adios';
    arrMess.join(" ");
}


// Ejecución de funciones
//ejemploIfElse()

// Lectura
//TAG
document.getElementsByTagName("a")
document.getElementsByTagName("a")[1]
document.getElementsByTagName("a")[1].href

//ID
document.getElementById("miId5");
document.getElementById("miId5").innerHTML
//ID escritura
document.getElementById("miId5").innerHTML = "queso"

// Lectura
// Class
document.getElementsByClassName("miClase");

document.getElementsByClassName("miClase")[2]
// Escritura
// Class
document.getElementsByClassName("miClase")[2].innerHTML = "paella";

// Todas las <a>
const links = document.getElementsByTagName("a");

// Todos los links
for (let i = 0; i < links.length; i++) {
    console.log(links[i].href);
}

// Query Selector
console.log("******************");

let lista2 = document.querySelectorAll(".clase2 > a");
console.log(lista2[0].href);
console.log(lista2[1].href);



console.log(document.querySelector('#miDiv .miClase').innerText)

console.log(document.querySelector('#miDiv #miId1.miClase').innerText)

let textos = document.querySelectorAll("#miDiv .miClase");

// Todos los links
for (let i = 0; i < textos.length; i++) {
    console.log(textos[i].innerHTML);
}
/*

// pruebas con selectores
console.log(document.getElementById('miId1').innerText) // uno

 // uno
console.log(document.querySelectorAll("#miDiv .miClase"));
*/


document.querySelector("#boton1").addEventListener("click", displayDate);

document.querySelector("#boton1").addEventListener("mouseout", sendAlert);

function displayDate() {
    document.getElementById("result1").innerHTML = Date();
}

function sendAlert() {
    alert("Click me again please!!!!!");
}

document.getElementById("boton2").addEventListener("click", function () {
    console.error("Alerta de fusión en el núcleo");
    console.warn("Lean la documentación");
});


// Paso de valores por parámentro
let p1 = 5;
let p2 = 7;
let result = 0;

document.getElementById("boton3").addEventListener("click", function () {
    myFunction(p1, p2);
});

function myFunction(a, b) {
    if (result == 0) {
        result = p1 + p2;
        document.getElementById("result2").innerHTML += result;
    }
    else {
        alert("Ya se hizo la cuenta");
    }

}

// Crear nodo
document.getElementById("boton4").addEventListener("click",function(){
    const para = document.createElement("p");
    const node = document.createTextNode("Texto creado desde JS");
    
    para.id = "p3";
    para.appendChild(node);
    
    para.classList.add("new");

    const element = document.getElementById("div1");
    element.appendChild(para);
})

document.getElementById("boton5").addEventListener("click",function(){
    const parent = document.getElementById("div1");
    const child = document.getElementById("p1");
    const para = document.createElement("p");
    const node = document.createTextNode("Este es tu nuevo texto");
    para.appendChild(node);
    parent.replaceChild(para,child);

})







