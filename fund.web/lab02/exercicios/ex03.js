function show(txt) {
	let words = txt.split(" ");
	let output = document.getElementById("output");

	output.innerHTML = ""; // Clear previous output

	for (let i = 0; i < words.length; i++) {
		let word = document.createElement("p");
		word.textContent = words[i];
		output.appendChild(word);
	}
}

function main(){
	document.getElementById("textInputForm").addEventListener("submit", function(event) {
		event.preventDefault();

		let text = document.getElementById("textInput").value;
		show(text);

		let wordCount = text.split(" ").filter(word => word.trim() !== "").length;
		document.getElementById("wordCount").textContent = "Total de palavras: " + wordCount;

		document.getElementById("textInput").value = "";
	});
}

main();