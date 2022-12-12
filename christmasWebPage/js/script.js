document.querySelector("form.formulario-contacto").addEventListener("submit", function (event) {

    event.preventDefault();// parar envío

    // Texto
    console.log(event.target.elements);
    console.log(event.target.name.value);
    console.log(event.target.email.value);
    console.log(event.target.message.value);

    // Radio
    console.log(event.target.fav.value);

    // Select
    console.log(event.target.fav_event.value);

    //Checkbox
    console.log(event.target.conditions.checked);


    const name = event.target.name.value;
    const email = event.target.email.value;
    const message = event.target.message.value;
    const fav = event.target.fav.value;
    const conditions = event.target.conditions.checked;
    const fav_event = event.target.fav_event.value;

    let validated = true;

    if (name.length < 5) {
        alert("Nombre muy corto");
        validated = false;
    }

    if (!email.includes("@") && !email.endsWith(".com")) {
        alert("Falta @ email y/o .com al final");
        validated = false;
    }

    if (fav == "") {
        alert("Selecciona algún favorito");
        validated = false;
    }

    if (!conditions) {
        alert("Falta aceptar condiciones");
        validated = false;
    }
    // Comprobación final - Todo validado
    if (validated) {
        alert("ÉXITO - Formulario correcto y enviado")
        event.target.submit();
    }
})