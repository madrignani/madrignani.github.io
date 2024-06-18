function show(txt){
	let i, words, aux;
	words = txt.split(" ");
		for(i=0; i<words.length; i++){
			document.write(words[i]);
			document.write("<br>");
		}
}

let text;
text = prompt("Insira o texto a seguir:");
show(text);