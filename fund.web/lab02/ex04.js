function show(qtt, words){
	let j, grandPosition=0, grandValue=0;
		for(j=0; j<words.length; j++){
			if(qtt[j]>grandValue)
				grandPosition = j;
				grandValue = qtt[j];
		}
	document.write("PALAVRA MAIS UTILIZADA: "+words[grandPosition]);
	document.write(", VEZES UTILIZADA: " +grandValue);
}

function count(txt){
	let i, words;
	words = txt.split(" ");
	let qtt = [];
		for(i=0; i<words.length; i++){
			if(words[i] == words[i+1])
				qtt[i]++;
			else
				qtt[i]=1;
		}
	show(qtt, words);
}

let text;
text = prompt("Insira o texto a seguir:");
count(text);