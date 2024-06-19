function formatarTexto(txt, opcao) {
    switch (opcao) {
        case "maiuscula":
            return txt.toUpperCase();
        case "minuscula":
            return txt.toLowerCase();
        case "pontuacao":
            return txt.replace(/(^\w|\.\s+\w)/g, function(frase) {
                return frase.toUpperCase();
            });
        default:
            return "Opção inválida!";
    }
}

function main (){
    document.addEventListener("DOMContentLoaded", function() {
        document.getElementById("formularioTexto").addEventListener("submit", function(evento) {
            evento.preventDefault();

            let texto = document.getElementById("inputTexto").value;
            let opcao = document.getElementById("opcao").value;

            let textoFormatado = formatarTexto(texto, opcao);
            document.getElementById("outputTexto").value = textoFormatado;
        });
    });
}

main();