function verificarPrimo() {
    const numero = parseInt(document.getElementById('numero').value);
    let isPrimo = true;

    if (numero <= 1) {
        isPrimo = false;
    } else {
        for (let i = 2; i <= Math.sqrt(numero); i++) {
            if (numero % i === 0) {
                isPrimo = false;
                break;
            }
        }
    }

    if (isPrimo) {
        document.getElementById('resultado').innerHTML = `O número ${numero} é primo.`;
    } else {
        document.getElementById('resultado').innerHTML = `O número ${numero} não é primo.`;
    }
}