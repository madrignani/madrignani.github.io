function calculateDays() {
        document.getElementById("daysPassed").addEventListener("click", function() {
                let bDay = parseInt(document.getElementById("dia").value);
                let bMonth = parseInt(document.getElementById("mes").value) - 1;
                let bYear = parseInt(document.getElementById("ano").value);

                let today = new Date();
                let dd = today.getDate();
                let mm = today.getMonth();
                let yyyy = today.getFullYear();

                let date01 = new Date(bYear, bMonth, bDay);
                let date02 = new Date(yyyy, mm, dd);

                let time = date02.getTime() - date01.getTime();
                let days = time / (1000 * 3600 * 24);

                let output = document.getElementById("output");
                output.innerHTML = `<br>PASSARAM-SE ${days.toFixed(0)} DIAS DESDE A DATA ESCOLHIDA`;
        });
}
    
calculateDays();    