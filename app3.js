function flechas(valor){

    function getPositionAtCenter(element) {
        const {top, left, width, height} = element.getBoundingClientRect();
        return {
        x: left + width / 2,
        y: top + height / 2
        };
    }

    function angle(cx, cy, ex, ey){
        const dy = ey - cy;
        const dx = ex - cx;
        const rad = Math.atan2(dy, dx);
        const deg = rad * 180 / Math.PI;
        return deg;
    }

    ["arrow1", "arrow2", "arrow3", "arrow4", "arrow5","arrow6","arrow7","arrow8","arrow9","arrow10", "arrow11", "arrow12", "arrow13", "arrow14","arrow15","arrow16","arrow17","arrow18","arrow19","arrow20","arrow21","arrow22","arrow23","arrow24","arrow25","arrow26","arrow27","arrow28","arrow29","arrow30","arrow31","arrow32","arrow33","arrow34","arrow35"].forEach(arrowName=> {
        document.addEventListener("mousemove", (e) =>{
            let Qx = getPositionAtCenter(document.getElementById("y")).x;
            let Qy = getPositionAtCenter(document.getElementById("y")).y;
    
        
            const anchor = document.getElementById(arrowName);
            const rekt = anchor.getBoundingClientRect();
            const anchorX= rekt.left + rekt.width / 2;
            const anchorY= rekt.top + rekt.height / 2; 
    
            const angleDeg = angle(Qx, Qy, anchorX, anchorY);
        
            const arrows = document.querySelectorAll(`.${arrowName}`);
            arrows.forEach(arrow => {
                arrow.style.transform = "rotate(" + (valor + angleDeg) + "deg)";
            })
        })
    });

    

}





const k = 9.0*Math.pow(10, 9);



var dragValue;

function move(id){
    var element = document.getElementById("x");
    element.style.position = "absolute";
    element.onmousedown = function(){
        dragValue = element;
    }
}
function move2(id){
    var element = document.getElementById("y");
    element.style.position = "absolute";
    element.onmousedown = function(){
        dragValue = element;
    }
}


document.onmouseup = function(e){
    dragValue = null;
    
}


document.onmousemove = function(e){
    var x = e.pageX;
    var y = e.pageY;

    dragValue.style.left = x - 18 + "px";
    dragValue.style.top = y - 35 + "px";

    function getPositionAtCenter(element) {
        const {top, left, width, height} = element.getBoundingClientRect();
        return {
          x: left + width / 2,
          y: top + height / 2
        };
      }
     
     function getDistanceBetweenElements(a, b) {
       const aPosition = getPositionAtCenter(a);
       const bPosition = getPositionAtCenter(b);
     
       return Math.hypot(aPosition.x - bPosition.x, aPosition.y - bPosition.y);  
     }
     
     const distance = getDistanceBetweenElements(
       document.getElementById("x"),
       document.getElementById("y")
     );
     document.getElementById("distance").innerHTML = "Distancia: "+distance.toFixed(0.5)+"cm";
     
    let q = document.getElementById("Q").value;
    let q2 = document.getElementById("q2").value;
    let metros=distance/100;

    let f = (k*q*q2)/Math.pow(metros,2);
    
    if(q > 0){
        document.getElementById("signo1").innerHTML = "+";
        flechas(0);
    }else{
        document.getElementById("signo1").innerHTML = "-";
        flechas(180);
    }
    if(q2 > 0){
        document.getElementById("signo2").innerHTML = "+";
        flechas(0);
    }else{
        document.getElementById("signo2").innerHTML = "-";
        flechas(180);
    }

    document.getElementById("Fe").innerHTML = "Fuerza Electrica: "+f.toExponential(1);
}
