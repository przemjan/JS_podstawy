let dailyRate = 1;
let days = 0;

let go = true;
let sum = 0;

while(go){
    days = prompt("Podaj ilość dni: (przynajmniej 1)", "1");
    days = parseInt(days, 10);

    if(isNaN(days) || days <1){
        alert("BŁĄD! Liczba dni nie jest liczbą lub jest za niska");
    }
    else{
        go = false;
    }

}

for(let i = 1; i <= days; i++){
    document.write("Dzień " + i + " stawka dzienna " + dailyRate/100 + "<br/>");
    //komentarz to samo co sum = sum + dailyRate
    sum += dailyRate;
    dailyRate = dailyRate * 2;

}


document.write("Ilość dni: " + days + ", suma wypłat" + sum/100);