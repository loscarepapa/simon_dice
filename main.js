
let verde,
    azul,
    amarillo,
    rojo,
    random,
    serie = [],
    numSerie = serie.length,
    numTotalSerie = 0,
    totalColores = 0,
    numColores = 0,
    nivel = 0,
    tiempoTotalSerie;

setTimeout(() => {
    verde = document.getElementById("Verde"),
    azul = document.getElementById("Azul"),
    amarillo = document.getElementById("Amarillo"),
    rojo = document.getElementById("Rojo");
}, 0);

function iniciar(id){
    document.getElementById(id).style.display = "none";
    document.getElementById("bloqueo").className = "bloqueo";
    serie = [];
    numTotalSerie = 0;
    numColores = 0;
    setTimeout(() => {
        
        random = Math.round(Math.random() * 3)
        serie[numColores] = random;
        numColores++;
        setTimeout(() => {
            document.getElementById("bloqueo").className = "none";
        }, 1000);

        if(random == 0){
            verde.style.border = "3px solid #fff";
            verde.style.filter = "grayscale(.4)";
            setTimeout(() => {
            verde.style.border = "";                
            verde.style.filter = "";                
            }, 1000);
        } else if (random == 1) {
            azul.style.border = "3px solid #fff";
            azul.style.filter = "grayscale(.4)";
            setTimeout(() => {
            azul.style.border = "";                
            azul.style.filter = "";                
            }, 1000);
        } else if (random == 2) {
            amarillo.style.border = "3px solid #fff";
            amarillo.style.filter = "grayscale(.4)";
            setTimeout(() => {
            amarillo.style.border = "";                
            amarillo.style.filter = "";                
            }, 1000);
        } else if (random == 3) {
            rojo.style.border = "3px solid #fff";
            rojo.style.filter = "grayscale(.4)";
            setTimeout(() => {
            rojo.style.border = "";                
            rojo.style.filter = "";                
            }, 1000);
        }
        
        numSerie = serie.length;
        console.log(numSerie);
        console.log(random);
        console.log(serie);


    }, 1000);

    if(document.getElementById("perdiste").className == "perdiste"){
        document.getElementById("perdiste").className = "none";
    }


}

function prueba(id){

    if (id == 0) {
        document.getElementById("Verde").className = "sinclick_v";
        setTimeout(() => {
            document.getElementById("Verde").className = "simon_Verde";
        }, 0);
    }else if (id == 1) {
        document.getElementById("Azul").className = "sinclick_a";
        setTimeout(() => {
            document.getElementById("Azul").className = "simon_Azul";
        }, 0);
    }else if (id == 2) {
        document.getElementById("Amarillo").className = "sinclick_am";
        setTimeout(() => {
            document.getElementById("Amarillo").className = "simon_Amarillo";
        }, 0);
    }else if (id ==3) {
        document.getElementById("Rojo").className = "sinclick_r";
        setTimeout(() => {
            document.getElementById("Rojo").className = "simon_Rojo";
        }, 0);
    }



    console.log(numSerie);
    console.log(numTotalSerie);
    console.log(id);
            if (id == serie[numTotalSerie]) {
                numTotalSerie++;

                if (numTotalSerie == numSerie) {
                    document.getElementById("bloqueo").className = "bloqueo";
                    document.getElementById("puntos_Totales").innerHTML = nivel + 1;
                    nivel++;
                    setTimeout(() => {
                        mostrarSerie();
                    }, 1000);
                }


            } else {
                document.getElementById("iniciar").style.display = "block";
                document.getElementById("puntos_Totales").innerHTML = "";
                nivel = 0;
                document.getElementById("perdiste").className = "perdiste";
                serie = [];
                numTotalSerie = 0;
                console.log("Perdiste")
                console.log(id);
            }

}


function mostrarSerie() {

    random = Math.round(Math.random() * 3)
    serie[numColores] = random;
    numSerie = serie.length;
    numTotalSerie = 0;
        console.log(serie);

        document.getElementById("bloqueo").className = "bloqueo";

        setTimeout(() => {
            document.getElementById("bloqueo").className = "none";
        }, ((numColores * 2) * 1000)+ 100);

        numColores++;

        for (let i = 0; i < numColores; i++) {
            
            setTimeout(() => {

                        if (serie[i] == 0) {
                            verde.style.border = "3px solid #fff";
                            verde.style.filter = "grayscale(.4)";
                            setTimeout(() => {
                                verde.style.border = "";
                                verde.style.filter = "";
                            }, 1000);
                        } else if (serie[i] == 1) {
                            azul.style.border = "3px solid #fff";
                            azul.style.filter = "grayscale(.4)";
                            setTimeout(() => {
                                azul.style.border = "";
                                azul.style.filter = "";
                            }, 1000);
                        } else if (serie[i] == 2) {
                            amarillo.style.border = "3px solid #fff";
                            amarillo.style.filter = "grayscale(.4)";
                            setTimeout(() => {
                                amarillo.style.border = "";
                                amarillo.style.filter = "";
                            }, 1000);
                        } else if (serie[i] == 3) {
                            rojo.style.border = "3px solid #fff";
                            rojo.style.filter = "grayscale(.4)";
                            setTimeout(() => {
                                rojo.style.border = "";
                                rojo.style.filter = "";
                            }, 1000);
                        }
            },i * 1300);

        }
        
}

