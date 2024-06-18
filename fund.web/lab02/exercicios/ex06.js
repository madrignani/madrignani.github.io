document.getElementById("daysPassed").addEventListener("click",

        function daysInLife(){
                let bDay, bMonth, bYear;
                bDay = document.getElementById("dia").value;
                bMonth = document.getElementById("mes").value;
                bYear = document.getElementById("ano").value;

                let today = new Date();
                let dd = today.getDate();
                let mm = (today.getMonth()+1);
                let yyyy = today.getFullYear();        
                let date01 = new Date(bYear, bMonth, bDay);
                let date02 = new Date(yyyy, mm, dd);
                let time = (date02.getTime()-date01.getTime());
                let days = (time/(1000 * 3600 * 24));
                document.write("<br>");
                document.write(`PASSARAM-SE ${days.toFixed(0)} DESDE O DIA DO NASCIMENTO`);
        }
);