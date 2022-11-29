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

// Ejecución de funciones
//ejemploIfElse()