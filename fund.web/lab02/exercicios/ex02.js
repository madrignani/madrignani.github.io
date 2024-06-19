function countVowels() {
    document.getElementById('inputForm').addEventListener('submit', function(event) {
        event.preventDefault();

        const inputText = document.getElementById('inputText').value.toLowerCase();
        const resultadoDiv = document.getElementById('resultado');
        
        resultadoDiv.innerHTML = '';

        if (inputText.trim() === '') {
            resultadoDiv.textContent = 'Por favor, insira um texto válido.';
            return;
        }

        let count = 0;
        for (let i = 0; i < inputText.length; i++) {
            if (inputText[i] === 'a' || inputText[i] === 'e' || inputText[i] === 'i' || inputText[i] === 'o' || inputText[i] === 'u') {
                resultadoDiv.innerHTML += inputText[i].bold();
                count++;
            } else {
                resultadoDiv.innerHTML += inputText[i];
            }
        }
        
        resultadoDiv.innerHTML += `<br>Número de vogais encontradas: ${count}`;
    });
}

countVowels();