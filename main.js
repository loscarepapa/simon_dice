
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
        }, ((numColores * 2) * 1000)+ 300);

        numColores++;

        for (let i = 0; i < numColores; i++) {
            
            setTimeout(() => {

                        if (serie[i] == 0) {
                            verde.style.border = "3px solid #fff";
                            setTimeout(() => {
                                verde.style.border = "";
                            }, 1000);
                        } else if (serie[i] == 1) {
                            azul.style.border = "3px solid #fff";
                            setTimeout(() => {
                                azul.style.border = "";
                            }, 1000);
                        } else if (serie[i] == 2) {
                            amarillo.style.border = "3px solid #fff";
                            setTimeout(() => {
                                amarillo.style.border = "";
                            }, 1000);
                        } else if (serie[i] == 3) {
                            rojo.style.border = "3px solid #fff";
                            setTimeout(() => {
                                rojo.style.border = "";
                            }, 1000);
                        }
            },i * 1300);

        }
        
}

