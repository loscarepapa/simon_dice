let verde,
    azul,
    amarillo,
    rojo
    serie = [0,2,3,1,0,2,0,1,3,2,2,1,0,3]
    numSerie = serie.length,
    numColor = 0;


    setTimeout(() => {
        verde = document.getElementById("Verde");
        azul = document.getElementById("Azul");
        amarillo = document.getElementById("Amarillo");
        rojo = document.getElementById("Rojo");
    }, 0);

    function pregunta(num) {

        if (numColor <= numSerie && num == serie[numColor]) {
            
                console.log(num)
                
                numColor++;
            }else{
                
                console.log("Perdiste")
        }
    }