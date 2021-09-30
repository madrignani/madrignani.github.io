function encode(text){
	return text.replace(/t/g, "p").replace(/e/g, "o")
	.replace(/n/g, "l").replace(/i/g, "a").replace(/s/g, "r")
	.replace(/T/g, "P").replace(/E/g, "O")
	.replace(/N/g, "L").replace(/I/g, "A").replace(/S/g, "R");
}

document.getElementById("encoded").addEventListener("click", 

	function receive(){
		let text, encodedText;
		text = document.getElementById("phrase").value;
		document.write("<br>");
		document.write(text);
		encodedText = encode(text);
		document.write("<br>");
		document.write(encodedText);

	}
);