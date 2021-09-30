function vowels(txt){
	let i;
		for(i=0; i<txt.length; i++){
			if(txt.charAt(i)=="a" || txt.charAt(i)=="e"
			|| txt.charAt(i)=="i" || txt.charAt(i)=="o"
			|| txt.charAt(i)=="u")
				document.write(txt.charAt(i).bold());
			else
				document.write(txt.charAt(i) );
		}
}
let text;
text = prompt("Insira texto aqui");
vowels (text);