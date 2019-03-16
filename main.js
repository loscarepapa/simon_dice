var verde;
var azul;
var amarillo;
var rojo;
var puntos;

setTimeout(() => {
    verde = document.getElementById("verde");
    azul = document.getElementById("azul");
    amarillo = document.getElementById("amarillo");
    rojo = document.getElementById("rojo");
    puntos = document.getElementById("puntos_Totales");
        
    console.log(colores)
}, 0);

function empezar(id) {
    document.getElementById(id).style.display = "none";
    document.getElementById("x").className = "x";
    setTimeout(() => {
        random();
    }, 500);
    
}

var colores = [];

var num_Colores = 0;

function random() {

    var aleatorio = Math.round(Math.random() * 3);
    colores[num_Colores] = aleatorio;
    num_Colores++;
console.log(aleatorio);

    if (aleatorio == 0) {
        verde.style.border = "5px solid #fff";
        setTimeout(() => {
            verde.style.border = null;
        }, 1000);
    }
    if (aleatorio == 1) {
        azul.style.border = "5px solid #fff";
        setTimeout(() => {
            azul.style.border = null;
        }, 1000);
    }
    if (aleatorio == 2) {
        amarillo.style.border = "5px solid #fff";
        setTimeout(() => {
            amarillo.style.border = null;
        }, 1000);
        
    }
    if (aleatorio == 3) {
        rojo.style.border = "5px solid #fff";
        setTimeout(() => {
            rojo.style.border = null;
        }, 1000);
        
    }
    setTimeout(() => {
        document.getElementById("x").className = "";
    }, 2000);

}

var idOpcion; 

function pregunta(id){

    if (id == "verde") {
        idOpcion = 0;
    }else if (id == "azul") {
        idOpcion = 1;
    }else if (id == "amarillo") {
        idOpcion = 2;
    }else if (id == "rojo") {
        idOpcion = 3;
    }

    console.log(idOpcion);

    if (idOpcion == colores[num_Colores - 1]) {
        console.log("es el mismo color")
        puntos.innerHTML = num_Colores;
        reiniciar_bucle();
    }else{
        console.log("No es el mismo")
        puntos.innerHTML = "";

    }

}

function reiniciar_bucle() {

    setTimeout(() => {
        random();
    }, 1000);
    
}