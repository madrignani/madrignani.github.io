function WeeksBetween(day, month, year){
        let today = new Date();
        let dd = today.getDate();
        let mm = (today.getMonth()+1);
        let yyyy = today.getFullYear();

        let date01 = new Date(year, month, day);
        let date02 = new Date(yyyy, mm, dd);
        let time = (date02.getTime()-date01.getTime());
        let weeks = (time/(1000 * 3600 * 24)/7);
        document.write(`PASSARAM-SE ${weeks.toFixed(0)} SEMANAS DESDE A DATA ANTERIOR.`);
}

let day, month, year;
day = prompt("Informe o dia da data anterior: ");
month = prompt("Informe o mês da data anterio: ");
year = prompt("Informe o ano da data anterio: ");
WeeksBetween(day, month, year);