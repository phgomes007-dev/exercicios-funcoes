// a) Objeto carro
const carro = {
    ligado: false,
    velocidade: 0
};

// Função auxiliar para imprimir o status sem repetição de código
function imprimirStatus(carro) {
    const estado = carro.ligado ? "ligado" : "desligado";
    console.log(`Carro ${estado}. Velocidade: ${carro.velocidade}.`);
}

// B) Função ligar
function ligar(carro) {
    if (carro.ligado) {
        console.log("Este carro já está ligado.");
    } else {
        carro.ligado = true;
        imprimirStatus(carro);
    }
}

// c) Função desligar
function desligar(carro) {
    if (!carro.ligado) {
        console.log("Este carro já está desligado.");
    } else {
        carro.ligado = false;
        carro.velocidade = 0;
        imprimirStatus(carro);
    }
}

// D) Função acelerar
function acelerar(carro) {
    if (!carro.ligado) {
        console.log("Não é possível acelerar um carro desligado.");
    } else {
        carro.velocidade += 10;
        imprimirStatus(carro);
    }
}

// e) função desacelerar 
function desacelerar(carro) {
    if (!carro.ligado) {
        console.log("Não é possível desacelerar um carro desligado.");
    } else {
        // Garante que a velocidade não caia abaixo de 0
        if (carro.velocidade > 0) {
            carro.velocidade -= 10;
        }
        imprimirStatus(carro);
    }
}

// g) Sequencia de chamadas
desligar(carro);
ligar(carro);
ligar(carro);
acelerar(carro);
acelerar(carro);
desacelerar(carro);
desligar(carro);
acelerar(carro);
desacelerar(carro);