var verde,
    azul,
    amarillo,
    rojo,
    random,
    serie = [],
    numColores = 0;

setTimeout(() => {
    verde = document.getElementById("Verde"),
    azul = document.getElementById("Azul"),
    amarillo = document.getElementById("Amarillo"),
    rojo = document.getElementById("Rojo");
}, 0);

function iniciar(id){
    document.getElementById(id).style.display = "none";
    setTimeout(() => {
        
        random = Math.round(Math.random() * 3)
        serie[numColores] = random;
        numColores++;

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
}