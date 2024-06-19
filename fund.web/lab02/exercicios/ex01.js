function reverser() {
    document.getElementById('inputForm').addEventListener('submit', function(event) {
        event.preventDefault();

        const inputFrase = document.getElementById('inputFrase').value;
        const resultadoDiv = document.getElementById('resultado');
        
        resultadoDiv.innerHTML = '';

        if (inputFrase.trim() === '') {
            resultadoDiv.textContent = 'Por favor, insira uma frase válida.';
            return;
        }

        const fraseInvertida = inputFrase.split('').reverse().join('');
        
        resultadoDiv.textContent = `FRASE INVERTIDA: ${fraseInvertida}`;

        const numCaracteres = inputFrase.length;
        resultadoDiv.innerHTML += `<br>Número de caracteres na frase: ${numCaracteres}`;
    });
}

reverser();