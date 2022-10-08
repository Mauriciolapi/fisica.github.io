
function Fe(){
    let carga1 = document.getElementById("carga1").value;
    let carga2 = document.getElementById("carga2").value;
    let carga3 = document.getElementById("carga3").value;
    let campoE = document.getElementById("campoE").value;
    let distancia1 = document.getElementById("distance1").value;
    const k = 9.0*Math.pow(10, 9);
    
    if((carga1 && carga2 && distancia1) != 0){
        let f = (k*carga1*carga2)/Math.pow(distancia1, 2);
        document.getElementById("output1").innerHTML = "F: "+f.toExponential(5)+" N";
    }
        
    if((carga3 && campoE) != 0){
        let Fe = campoE*carga3;
        document.getElementById("output2").innerHTML = "F: "+Fe.toExponential(5)+" N";
    }
    
}

function limpiar(){
    document.getElementById("output1").innerHTML = "";
    document.getElementById("output2").innerHTML = "";
    document.getElementById("carga1").value = "";
    document.getElementById("carga2").value = "";
    document.getElementById("distance1").value = "";
    document.getElementById("campoE").value = "";
    document.getElementById("carga3").value = "";
}


