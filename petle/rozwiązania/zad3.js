let speed, time;
speed = prompt("Podaj szybkość(większą od 0)", "1");
speed = parseInt(speed, 10);

while(isNaN(speed) || speed < 0){
    speed  = prompt("Błąd! podaj szybkość większą od 0!", "1");
    speed = parseInt(speed,10);

}

time = prompt("Podaj czas(większą od 1)", "1");
time = parseInt(time, 10);

while(isNaN(time) || time < 1){
    time = prompt("Błąd! podaj czas większy od 1!", "1");
    time= parseInt(time,10);
}

let dist;
document.write("Godzina Przebyta oddległość <br/>");
document.write("---------------------------------<br/>");

for(let i = 1; i <= time;i++){
    dist = speed * i;

    document.write( i + "--------------------" + dist + "<br/>");
}


document.write("Szybkość " + speed +", czas: " +time);

