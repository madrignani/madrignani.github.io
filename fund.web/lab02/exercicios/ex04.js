function showResult(palavraMaisUtilizada, vezesUtilizada) {
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = "PALAVRA MAIS UTILIZADA: " + palavraMaisUtilizada + ", VEZES UTILIZADA: " + vezesUtilizada;
}

function countPalavras(txt) {
    let palavras = txt.split(" ");
    let contagemPalavras = {};

    for (let i = 0; i < palavras.length; i++) {
        let palavraAtual = palavras[i];
        if (contagemPalavras[palavraAtual]) {
            contagemPalavras[palavraAtual]++;
        } else {
            contagemPalavras[palavraAtual] = 1;
        }
    }

    let palavraMaisUtilizada = "";
    let vezesUtilizada = 0;

    for (let palavra in contagemPalavras) {
        if (contagemPalavras[palavra] > vezesUtilizada) {
            palavraMaisUtilizada = palavra;
            vezesUtilizada = contagemPalavras[palavra];
        }
    }

    showResult(palavraMaisUtilizada, vezesUtilizada);
}

function main() {
    document.getElementById("textoForm").addEventListener("submit", function(event) {
        event.preventDefault();

        let texto = document.getElementById("textoInput").value;
        countPalavras(texto);
    });
}

main();