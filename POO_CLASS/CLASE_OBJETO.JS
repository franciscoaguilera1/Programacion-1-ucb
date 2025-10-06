class Pasajerp{
    //Atributos de la clase
    nombre = "";
    edad = 0;
    genero = "";
    TipoBoleto = "";

    //Constructor
    constructor(paramNombre, paramEdad, paramGenero, paramTipoBoleto){
        this.nombre = paramNombre;
        this.edad = paramEdad;
        this.genero = paramGenero;
        this.TipoBoleto = paramTipoBoleto;
    }

    //Setters
    setNombre(paramNombre){this.nombre = paramNombre}
    setEdad(paramEdad){this.edad = paramEdad}
    setGenero(paramGenero){this.genero = paramGenero}
    setTipoBoleto(paramTipoBoleto){this.TipoBoleto = paramTipoBoleto}
    //Getters
    GetNombre(){return this.nombre;}
    GetEdad(){return this.edad;}
    GetGenero(){return this.genero;}
    GetTipoBoleto(){return this.TipoBoleto;}

    //Mostrar los Valores de los atributos
    ToString() {
        return "Pasajero: " + "Nombre: " + this.GetNombre() + "Edad :" + this.GetEdad() + "Genero: " + this.GetGenero() + "Tipo de Boleto: " + this.GetTipoBoleto();
    }
}