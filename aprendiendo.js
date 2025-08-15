//
function miprimeralgoritmo(){
    var mensaje = "Hola Mundo";
    alert(mensaje);
}
function BinarioADecimal(binario){
    let decimal = 0
    for (let i = 0; i < binario.length; i++){
        decimal = decimal * 2 + (binario[i] === '1' ? 1 : 0);
    
    }
    return decimal;
}

function sumarbinario(bin1,bin2){
    const dec1 = BinarioADecimal(bin1);
    const dec2 = BinarioADecimal(bin2);
    return dec1 + dec2
}

//Ejemplo 
let bin1 = "1010";
let bin2 = "1101";
console.log("Suma en decimal:" , sumarbinario(bin1, bin2));