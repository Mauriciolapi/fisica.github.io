function limpiar(){
    document.getElementById("output1").innerHTML = "";
    document.getElementById("output2").innerHTML = "";
    document.getElementById("output3").innerHTML = "";
    document.getElementById("cargaPuntual").value = "";
    document.getElementById("fuerzaE").value = "";
    document.getElementById("distance1").value = "";
    document.getElementById("cargaFuente").value = "";
    document.getElementById("distance2").value = "";
    document.getElementById("campoE").value = "";
}
function E(){
    let cargaP = document.getElementById("cargaPuntual").value;
    let fuerzaE = document.getElementById("fuerzaE").value;
    let cargaFuente = document.getElementById("cargaFuente").value;
    let distancia1 = document.getElementById("distance1").value;
    let distancia2 = document.getElementById("distance2").value;
    let campoE = document.getElementById("campoE").value;
    const k = 9.0*Math.pow(10, 9);

    if((fuerzaE &&  cargaP) != 0){
        let e = fuerzaE/cargaP;
        document.getElementById("output1").innerHTML = "E: "+e.toExponential(2)+" N/C";
    }
    if((cargaFuente && distancia1) != 0){
        let e2 = (k*cargaFuente)/Math.pow(distancia1, 2);
        document.getElementById("output2").innerHTML = "E: "+e2.toExponential(2)+" N/C";
    }
            
    if((campoE && distancia2) != 0){
        let q1 = (campoE*Math.pow(distancia2, 2))/k;
        document.getElementById("output3").innerHTML = "Q: "+q1.toExponential(2)+" C";
            
    }
}

