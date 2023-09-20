const calcularFatorial = function (valorFatorial) {
    let fatorial = parseInt(valorFatorial);

    if (isNaN(fatorial) || fatorial < 0) {
        return 'ERRO: Valor inválido para cálculo de fatorial.';
    } else if (fatorial === 0 || fatorial === 1) {
        return `Fatorial de ${fatorial} é 1`;
    } else {
        let resultado = 1;
        let fatorialString = `Fatorial de ${fatorial} é ${fatorial}`;

        for (let contador = fatorial; contador >= 2; contador--) {
            resultado *= contador;
            fatorialString += `x${contador - 1}`;
        }

        fatorialString += ` = ${resultado}`;
        return fatorialString;
    }
};

const exibirResultado = function (valorFatorial) {
    console.log(calcularFatorial(valorFatorial));
}

module.exports = { calcularFatorial, exibirResultado };
