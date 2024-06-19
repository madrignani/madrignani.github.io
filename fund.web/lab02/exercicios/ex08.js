function show(d, m, y){
	let date01 = new Date(y, m - 1, d);
	let mes = new Array("janeiro", "fevereiro", "março", 
	"abril", "maio", "junho",
	"julho", "agosto", "setembro",
	"outubro", "novembro", "dezembro");

	document.getElementById('result').innerHTML = `Você nasceu em ${d} de ${mes[m - 1]} de ${y}.`;
}

function calculateAge(d, m, y) {
	let today = new Date();
	let birthDate = new Date(y, m - 1, d);
	let age = today.getFullYear() - birthDate.getFullYear();
	let monthDiff = today.getMonth() - birthDate.getMonth();

	if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
		age--;
	}

	document.getElementById('result').innerHTML += `<br>Sua idade é ${age} anos.`;
}

function main(){
	document.getElementById('dateForm').addEventListener('submit', function(e) {
		e.preventDefault();
		let day = parseInt(document.getElementById('day').value);
		let month = parseInt(document.getElementById('month').value);
		let year = parseInt(document.getElementById('year').value);

		show(day, month, year);
		calculateAge(day, month, year);
	});
}

main();