var base ="";
document.getElementById("area").value = base;

function aggiungi(n){
    document.getElementById("area").value = document.getElementById("area").value+n;
    document.getElementById("area").innerHTML =  document.getElementById("area").value;
}
 function canc() {
    document.getElementById("area").value = base;
 }

function uguale(){
    var risultato = eval(document.getElementById("area").value);
    document.getElementById("area").value = risultato;
    document.getElementById("area").innerHTML = risultato;
}
