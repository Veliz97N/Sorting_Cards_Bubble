let valores_cartas=["2","3","4","5","6","7","8","9","10","J","Q","K","A"];
let valores_pintas=["spade","club","heart","diamond"];

function RandomIndex(array) {
    let largo_array = array.length;
    let indice_random = Math.floor(Math.random() * (largo_array));
    return indice_random;
}
function RandonCard(){
    let indice_carta=RandomIndex(valores_cartas);
    let indice_pinta=RandomIndex(pintas);
    if(valores_pintas[indice_pinta]=="spade"){
        
    }
    else if(valores_pintas[indice_pinta]=="club"){

    }
    else if(valores_pintas[indice_pinta]=="heart"){

    }
    else if(valores_pintas[indice_pinta]=="diamond"){

    }
}