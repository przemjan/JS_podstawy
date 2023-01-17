let word = prompt("Podaj wyraz", "");
let len = word.length;
let litera = prompt("Podaj literę", "");
let sum = 0;
for(let i = 0; i < len; i++){
    if(litera == word.charAt(i)){
        sum++;
    }
}
document.write("Ilość wystąpień znaku " + litera + " w wyrazie " + word + " to  " + sum);


