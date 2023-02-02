function calculo() {
    const resultado = document.querySelector(".mostrar_resultado");

    const invalido = document.querySelector(".invalido");

    const peso_input = document.querySelector(".peso");

    const altura_input = document.querySelector(".altura");

    let peso = Number(peso_input.value);

    let altura = Number(altura_input.value);

    let imc = peso / (altura * altura);

    console.log(`${peso} ${altura} ${imc}`);

    if(peso == ""){
        resultado.innerHTML = "";
        invalido.innerHTML = `O campo "Peso" está vazio`;
    }

    else if(altura == ""){
        resultado.innerHTML = "";
        invalido.innerHTML = `O campo "Altura" está vazio`;
    }

    else{
        if (imc < 18.5) {
            invalido.innerHTML = "";
            resultado.innerHTML = `Seu IMC é de: ${imc} (Abaixo do Peso)`;
        }
    
        else if (imc < 24.9) {
            invalido.innerHTML = "";
            resultado.innerHTML = `Seu IMC é de: ${imc} (Peso Normal)`;
        }
    
        else if (imc <  29.9) {
            invalido.innerHTML = "";
            resultado.innerHTML = `Seu IMC é de: ${imc} (Sobrepeso)`;
        }
    
        else if (imc <  34.9) {
            invalido.innerHTML = "";
            resultado.innerHTML = `Seu IMC é de: ${imc} (Obresidade grau 1)`;
        }
    
        else if (imc <  39.9) {
            invalido.innerHTML = "";
            resultado.innerHTML = `Seu IMC é de: ${imc} (Obresidade grau 2)`;
        }
    
        else{
            invalido.innerHTML = "";
            resultado.innerHTML = `Seu IMC é de: ${imc} (Obresidade grau 3)`;
        };
    };

};
