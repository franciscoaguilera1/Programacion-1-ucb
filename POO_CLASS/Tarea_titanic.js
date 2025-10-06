//
// 1. Definición de Clases
// -----------------------

/**
 * Clase Pasajero: Define la estructura de cada persona.
 */
class Pasajero {
    constructor(nombre, edad, genero, tipoBoleto) {
        this.nombre = nombre;
        this.edad = edad;
        this.genero = genero;
        this.tipoBoleto = tipoBoleto;
    }

    // Método para mostrar la información del pasajero.
    mostrarInfo() {
        return ${this.nombre} (Edad: ${this.edad}, Género: ${this.genero}, Boleto: ${this.tipoBoleto});
    }
}

// ---

/**
 * Clase BoteRescate: Define la capacidad y los ocupantes de cada bote.
 */
class BoteRescate {
    constructor(id, capacidad) {
        this.id = id;
        this.capacidad = capacidad;
        this.ocupantes = []; // Lista (Array) de pasajeros en el bote
    }

    // Método para añadir un pasajero si hay espacio.
    agregarPasajero(pasajero) {
        if (this.ocupantes.length < this.capacidad) {
            this.ocupantes.push(pasajero);
            return true; 
        }
        return false; 
    }

    // Método para mostrar el estado del bote.
    mostrarOcupantes() {
        console.log(\nBote de Rescate #${this.id} (Capacidad Máx: ${this.capacidad}, Ocupantes: ${this.ocupantes.length}));
        if (this.ocupantes.length === 0) {
            console.log('   - Vacio.');
        } else {
            this.ocupantes.forEach(pasajero => {
                console.log(`   - ${pasajero.mostrarInfo()}`);
            });
        }
    }
}

//
// 2. Función de Evacuación (Algoritmo de Prioridad)
// ------------------------------------

/**
 * Función que ordena pasajeros y los asigna a los botes.
 */
function ejecutarEvacuacion(pasajerosOriginal, botes) {
    console.log("\n--- INICIANDO ALGORITMO DE EVACUACIÓN ---");
    
    // Crear una COPIA del array de pasajeros para evitar modificar el original.
    let pasajerosParaEvacuar = [...pasajerosOriginal];

    // Definir prioridades numéricas: Menor número = Mayor prioridad.
    const prioridadGenero = { 'Femenino': 1, 'Masculino': 2 }; 
    const prioridadBoleto = { '1ra Clase': 1, '2da Clase': 2, '3ra Clase': 3 }; 

    // Ordenar a los pasajeros por múltiples criterios
    pasajerosParaEvacuar.sort((a, b) => {
        // Criterio 1: Género (Femenino primero)
        let diffGenero = prioridadGenero[a.genero] - prioridadGenero[b.genero];
        if (diffGenero !== 0) {
            return diffGenero; 
        }

        // Criterio 2: Edad (El más viejo va primero: b.edad - a.edad)
        let diffEdad = b.edad - a.edad; 
        if (diffEdad !== 0) {
            return diffEdad; 
        }
        
        // Criterio 3: Tipo de Boleto (1ra Clase primero)
        return prioridadBoleto[a.tipoBoleto] - prioridadBoleto[b.tipoBoleto]; 
    });

    console.log(Pasajeros ordenados por prioridad: Genero > Edad (mayor) > Boleto (1ra));
    
    // Asignar pasajeros a los botes
    for (const bote of botes) {
        // Sigue asignando mientras queden pasajeros Y haya espacio en el bote
        while (pasajerosParaEvacuar.length > 0 && bote.ocupantes.length < bote.capacidad) {
            // .shift() saca el pasajero más prioritario del inicio del array.
            const pasajeroPrioritario = pasajerosParaEvacuar.shift(); 
            bote.agregarPasajero(pasajeroPrioritario);
        }
    }

    // Los pasajeros que queden en 'pasajerosParaEvacuar' son los que no subieron.
    const pasajerosFuera = pasajerosParaEvacuar;

    return { botes, pasajerosFuera };
}


//
// 3. Función Principal de Simulación
// ----------------------------------

function iniciarSimulacion() {
    // --- CREACIÓN DE PASAJEROS (mínimo 10) ---
    const listaPasajeros = [
        new Pasajero("Sofía", 25, "Femenino", "1ra Clase"),     
        new Pasajero("Carlos", 60, "Masculino", "3ra Clase"),   
        new Pasajero("Ana", 70, "Femenino", "2da Clase"),       
        new Pasajero("Luis", 35, "Masculino", "1ra Clase"),     
        new Pasajero("Elena", 40, "Femenino", "3ra Clase"),     
        new Pasajero("David", 18, "Masculino", "2da Clase"),    
        new Pasajero("Laura", 55, "Femenino", "1ra Clase"),     
        new Pasajero("Pedro", 80, "Masculino", "1ra Clase"),    
        new Pasajero("Marta", 30, "Femenino", "2da Clase"),     
        new Pasajero("Jorge", 20, "Masculino", "3ra Clase"),    
        new Pasajero("Isabel", 22, "Femenino", "3ra Clase"),    
        new Pasajero("Andrés", 45, "Masculino", "2da Clase"),   
    ];

    // --- CREACIÓN DE BOTES ---
    const listaBotes = [
        new BoteRescate(1, 4), // Capacidad 4
        new BoteRescate(2, 5), // Capacidad 5
        new BoteRescate(3, 1), // Capacidad 1
    ];

    // --- EJECUTAR EL ALGORITMO ---
    const resultado = ejecutarEvacuacion(listaPasajeros, listaBotes);

    //
    // 4. Mostrar Resultados
    // ---------------------

    console.log("\n-------------------------------------------------");
    console.log("            RESULTADOS DE LA SIMULACIÓN");
    console.log("-------------------------------------------------");

    // Mostrar Ocupantes de cada Bote
    resultado.botes.forEach(bote => bote.mostrarOcupantes());

    // Mostrar Pasajeros que quedaron fuera
    console.log("\nPASAJEROS QUE QUEDARON FUERA DEL RESCATE:");
    if (resultado.pasajerosFuera.length === 0) {
        console.log("   - Todos los pasajeros subieron a un bote.");
    } else {
        resultado.pasajerosFuera.forEach(pasajero => {
            console.log(`   - ${pasajero.mostrarInfo()}`);
        });
    }
    console.log("-------------------------------------------------");
}

// Inicia la simulación
iniciarSimulacion();