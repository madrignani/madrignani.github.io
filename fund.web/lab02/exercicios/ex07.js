function WeeksBetween(day, month, year) {
	let today = new Date();
	let date01 = new Date(year, month - 1, day);
	let timeDiff = today.getTime() - date01.getTime();
	let daysDiff = Math.floor(timeDiff / (1000 * 3600 * 24));
	let weeks = Math.floor(daysDiff / 7);
	document.getElementById('result').innerHTML = `Passaram-se ${weeks} semanas desde a data anterior.`;
}

function main(){
	document.getElementById('dateForm').addEventListener('submit', function (e) {
		e.preventDefault();
		let day = parseInt(document.getElementById('day').value);
		let month = parseInt(document.getElementById('month').value);
		let year = parseInt(document.getElementById('year').value);

		WeeksBetween(day, month, year);
	});
}

main();