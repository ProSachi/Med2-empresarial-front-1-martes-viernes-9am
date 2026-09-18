

do {
    let opcion = prompt("Elija una opción:\n 1. Consultar Saldo\n 2. Retirar Dinero\n 3. Salir")

    switch (opcion) {
        case "1":
            alert("Su saldo es $1000").
                break;
        case "2":
            alert("Dinero retirado").
                break;
        case "3":
            alert("Gracias por usar el sistema").
                break;

        default:
            break;
    }

} while (opcion != "3");