function show(d, m, y){
	let date01 = new Date(y, m, d);
	let mes = new Array("janeiro", "fevereiro", "março", 
	"abril", "maio", "junho",
	"julho", "agosto", "setembro",
	"outubro", "novembro", "dezembro", );
	document.write(`Você nasceu no dia ${d} de ${mes[m-1]} de ${y}.`);
}

let day, month, year;
day = prompt("A seguir, informe o dia do nascimento: ");
month = prompt("A seguir, informe o mês do nascimento: ");
year = prompt("A seguir, informe o ano do nascimento: ");
show(day, month, year);