function ContarVocales(palabra){
    var contarVocales = 0;
    palabra.split('').forEach(element => {    
        if(element == 'a' || element == 'A'){
            contarVocales++;
        }
        if(element == 'e' || element == 'E'){
            contarVocales++;
        }
        if(element == 'i' || element == 'I'){
            contarVocales++;
        }
        if(element == 'o' || element == 'O'){
            contarVocales++;
        }
        if(element == 'u' || element == 'U'){
            contarVocales++;
        }
    });
    console.log(contarVocales);
    return contarVocales;
}

function ContarPalabras(texto){
	var contarPalabras = 0;
	texto.split(' ').forEach(element => {
    	contarPalabras++;    
    });
    console.log(contarPalabras);

    return contarPalabras;
}


function ContarCaracteres(texto){
    var resultado = 0;
    texto.split('').forEach(element => {
        resultado++;

    });
    console.log(resultado);
    return resultado;
}