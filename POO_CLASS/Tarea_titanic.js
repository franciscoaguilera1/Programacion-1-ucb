//
// 1. Definición de Clases
// -----------------------

/**
 * Clase Pasajero: Representa a una persona que será evacuada.
 */
class Pasajero {
    // El 'constructor' inicializa un nuevo objeto Pasajero con sus atributos.
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

// -------------------------------------------------------

/**
 * Clase BoteRescate: Representa un bote con una capacidad limitada.
 */
class BoteRescate {
    constructor(id, capacidad) {
        this.id = id;
        this.capacidad = capacidad;
        this.ocupantes = []; // Array para guardar los objetos Pasajero
    }

    // Método para añadir un pasajero al bote si hay espacio.
    agregarPasajero(pasajero) {
        if (this.ocupantes.length < this.capacidad) {
            this.ocupantes.push(pasajero);
            return true; 
        }
        return false; 
    }

    // Método para mostrar la lista de ocupantes del bote.
    mostrarOcupantes() {
        console.log(\n*** Bote de Rescate #${this.id} (Capacidad Máx: ${this.capacidad}, Ocupantes: ${this.ocupantes.length}) ***);
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
// 2. Función de Evacuación (Algoritmo)
// ------------------------------------

/**
 * Función principal para gestionar la evacuación.
 */
function ejecutarEvacuacion(pasajeros, botes) {
    console.log("\n--- INICIANDO ALGORITMO DE EVACUACIÓN ---");
    
    // Prioridad: Femenino (1) > Masculino (2). 1ra Clase (1) > 3ra Clase (3).
    const prioridadGenero = { 'Femenino': 1, 'Masculino': 2 }; 
    const prioridadBoleto = { '1ra Clase': 1, '2da Clase': 2, '3ra Clase': 3 }; 

    // Ordenar a los pasajeros
    pasajeros.sort((a, b) => {
        // Criterio 1: Género
        let diffGenero = prioridadGenero[a.genero] - prioridadGenero[b.genero];
        if (diffGenero !== 0) {
            return diffGenero;
        }

        // Criterio 2: Edad (El mayor va primero: b.edad - a.edad)
        let diffEdad = b.edad - a.edad; 
        if (diffEdad !== 0) {
            return diffEdad; 
        }
        
        // Criterio 3: Tipo de Boleto
        return prioridadBoleto[a.tipoBoleto] - prioridadBoleto[b.tipoBoleto];
    });

    console.log(Pasajeros ordenados por prioridad: Genero > Edad (mayor) > Boleto (1ra));
    
    // Asignar pasajeros a los botes
    let pasajerosRestantes = [...pasajeros]; 
    
    for (const bote of botes) {
        // Asigna pasajeros al bote hasta que se llene o no queden pasajeros
        while (pasajerosRestantes.length > 0 && bote.ocupantes.length < bote.capacidad) {
            const pasajeroPrioritario = pasajerosRestantes.shift(); // Saca al pasajero con mayor prioridad
            bote.agregarPasajero(pasajeroPrioritario);
        }
    }

    // Los pasajeros que quedan en 'pasajerosRestantes' no pudieron subir.
    const pasajerosFuera = pasajerosRestantes;

    return { botes, pasajerosFuera };
}


//
// 3. Ejecución de la Simulación
// ------------------------------

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

console.log("\n*****************");
console.log("            RESULTADOS DE LA SIMULACIÓN");
console.log("*****************");

// Mostrar Ocupantes de cada Bote
resultado.botes.forEach(bote => bote.mostrarOcupantes());

// Mostrar Pasajeros que quedaron fuera
console.log("\n** PASAJEROS QUE QUEDARON FUERA DEL RESCATE **");
if (resultado.pasajerosFuera.length === 0) {
    console.log("   - Todos los pasajeros subieron a un bote.");
} else {
    resultado.pasajerosFuera.forEach(pasajero => {
        console.log(`   - ${pasajero.mostrarInfo()}`);
    });
}
console.log("*****************");