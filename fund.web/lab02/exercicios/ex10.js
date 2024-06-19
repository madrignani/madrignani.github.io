const morseCodeMap = {
    'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.', 'G': '--.', 'H': '....', 'I': '..', 'J': '.---',
    'K': '-.-', 'L': '.-..', 'M': '--', 'N': '-.', 'O': '---', 'P': '.--.', 'Q': '--.-', 'R': '.-.', 'S': '...', 'T': '-',
    'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-', 'Y': '-.--', 'Z': '--..', '0': '-----', '1': '.----', '2': '..---',
    '3': '...--', '4': '....-', '5': '.....', '6': '-....', '7': '--...', '8': '---..', '9': '----.', '.': '.-.-.-', ',': '--..--',
    '?': '..--..', "'": '.----.', '!': '-.-.--', '/': '-..-.', '(': '-.--.', ')': '-.--.-', '&': '.-...', ':': '---...', ';': '-.-.-.',
    '=': '-...-', '+': '.-.-.', '-': '-....-', '_': '..--.-', '"': '.-..-.', '$': '...-..-', '@': '.--.-.', ' ': '/'
};

function encodeToMorse(text) {
    return text.toUpperCase().split('').map(char => morseCodeMap[char] || char).join(' ');
}

function decodeFromMorse(morseText) {
    return morseText.split(' ').map(code => {
        for (let char in morseCodeMap) {
            if (morseCodeMap[char] === code) return char;
        }
        return code;
    }).join('');
}

function main() {
    let encoding = true;
    const toggleBtn = document.getElementById("toggleBtn");

    toggleBtn.addEventListener("click", function () {
        encoding = !encoding;
        toggleBtn.textContent = encoding ? "Alternar para Decodificar" : "Alternar para Codificar";
    });

    document.getElementById("textForm").addEventListener("submit", function (e) {
        e.preventDefault();
        let text = document.getElementById("phrase").value;
        let outputText = encoding ? encodeToMorse(text) : decodeFromMorse(text);
        document.getElementById("output").innerHTML = `
            <p><strong>${encoding ? "Texto original" : "Texto codificado (Morse)"}:</strong> ${text}</p>
            <p><strong>${encoding ? "Texto codificado (Morse)" : "Texto decodificado"}:</strong> ${outputText}</p>
        `;
    });
}

main();