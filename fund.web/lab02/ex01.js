function reverser(){
	let i, j, text, splitted;
	text = prompt("Insira frase aqui");
	splitted = text.split(" ");
	document.write("FRASE INVERTIDA: ");
		for(i=0; i<text.length; i++){
			for(j=splitted[i].length ; j>=0 ; j--){
				document.write(splitted[i].charAt(j));
			}
		}
}
reverser();