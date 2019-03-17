var verde,
    azul,
    amarillo,
    rojo,
    random,
    serie = [],
    totalColores = 0,
    numColores = 0,
    nivel = 0;

setTimeout(() => {
    verde = document.getElementById("Verde"),
    azul = document.getElementById("Azul"),
    amarillo = document.getElementById("Amarillo"),
    rojo = document.getElementById("Rojo");
}, 0);

function iniciar(id){
    document.getElementById(id).style.display = "none";
    document.getElementById("bloqueo").className = "bloqueo";
    setTimeout(() => {
        
        random = Math.round(Math.random() * 3)
        serie[numColores] = random;
        numColores++;
        setTimeout(() => {
            document.getElementById("bloqueo").className = "none";
        }, 1000);

        if(random == 0){
            verde.style.border = "3px solid #fff";
            setTimeout(() => {
            verde.style.border = "";                
            }, 1000);
        } else if (random == 1) {
            azul.style.border = "3px solid #fff";
            setTimeout(() => {
            azul.style.border = "";                
            }, 1000);
        } else if (random == 2) {
            amarillo.style.border = "3px solid #fff";
            setTimeout(() => {
            amarillo.style.border = "";                
            }, 1000);
        } else if (random == 3) {
            rojo.style.border = "3px solid #fff";
            setTimeout(() => {
            rojo.style.border = "";                
            }, 1000);
        }
        
        console.log(random)
        console.log(serie)


    }, 1000);

    if(document.getElementById("perdiste").className == "perdiste"){
        document.getElementById("perdiste").className = "none";
    }


}


function prueba(id){

    console.log(id);

    if (id == serie[numColores - 1]) {
        document.getElementById("puntos_Totales").innerHTML = nivel + 1;
        nivel++;
        setTimeout(() => {
            sigNivel();
        }, 1000);
    }else{
        document.getElementById("iniciar").style.display = "block";
        document.getElementById("puntos_Totales").innerHTML = "";
        nivel = 0;
        document.getElementById("perdiste").className = "perdiste";
        serie = [];
        numColores = 0;
    }

}
function sigNivel() {
    random = Math.round(Math.random() * 3)
    serie[numColores] = random;
    numColores++;

    if (random == 0) {
        verde.style.border = "3px solid #fff";
        setTimeout(() => {
            verde.style.border = "";
        }, 1000);
    } else if (random == 1) {
        azul.style.border = "3px solid #fff";
        setTimeout(() => {
            azul.style.border = "";
        }, 1000);
    } else if (random == 2) {
        amarillo.style.border = "3px solid #fff";
        setTimeout(() => {
            amarillo.style.border = "";
        }, 1000);
    } else if (random == 3) {
        rojo.style.border = "3px solid #fff";
        setTimeout(() => {
            rojo.style.border = "";
        }, 1000);
    }
}