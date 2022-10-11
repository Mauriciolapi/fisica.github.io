const dragBtn1 = document.querySelector('.carga1');
const dragBtn2 = document.querySelector('.carga2');
const k = 9.0*Math.pow(10, 9);
const chkQ = document.querySelector("#campoQ1");
const chkQ2 = document.querySelector("#campoQ2");



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


function angle(cx, cy, ex, ey){
    const dy = ey - cy;
    const dx = ex - cx;
    const rad = Math.atan2(dy, dx);
    const deg = rad * 180 / Math.PI;
    return deg;
}



//Makes circles draggables
const drag1 = (e) => {
    dragBtn1.style.left = e.pageX +'px';
    dragBtn1.style.top = e.pageY +'px';
}

const drag2 = (e) => {
    dragBtn2.style.left = e.pageX +'px';
    dragBtn2.style.top = e.pageY +'px';
}
dragBtn1.addEventListener('mousedown', () => {
    window.addEventListener("mousemove", drag1);
});

dragBtn2.addEventListener('mousedown', () => {
    window.addEventListener("mousemove", drag2);
});

window.addEventListener("mouseup", () => {
    window.removeEventListener("mousemove", drag1);
    window.removeEventListener("mousemove", drag2);
});
////////////////////////////////////////////////////////////////








function flechas(valor, id){

    ["arrow1", "arrow2", "arrow3", "arrow4", "arrow5","arrow6","arrow7","arrow8","arrow9","arrow10", "arrow11", "arrow12", "arrow13", "arrow14","arrow15","arrow16","arrow17","arrow18","arrow19","arrow20","arrow21","arrow22","arrow23","arrow24","arrow25","arrow26","arrow27","arrow28","arrow29","arrow30","arrow31","arrow32","arrow33","arrow34","arrow35"].forEach(arrowName=> {
        document.addEventListener("mousemove", (e) =>{
            let Qx = getPositionAtCenter(document.getElementById(id)).x;
            let Qy = getPositionAtCenter(document.getElementById(id)).y;
    
        
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







document.addEventListener("mousemove",(e) => {
    let q = document.getElementById("Q").value;
    let q2 = document.getElementById("q2").value;
    const anchorArrows = document.getElementById("anchor");

    if (chkQ.checked && !chkQ2.checked) {
        anchorArrows.classList.add("show");
        anchorArrows.classList.remove("hidden");
        if (q > 0) {
          flechas(0, "x");
        } else {
          flechas(180, "x");
        }
      } else if (chkQ2.checked && !chkQ.checked) {
        anchorArrows.classList.add("show");
        anchorArrows.classList.remove("hidden");
        if (q2 > 0) {
          flechas(0, "y");
        } else {
          flechas(180, "y");
        }
      } else {
        anchorArrows.classList.remove("show");
        anchorArrows.classList.add("hidden");
      }




    
    if(q > 0){
        document.getElementById("signo1").innerHTML = "+";      
    }else{
        document.getElementById("signo1").innerHTML = "-";
    }
    if(q2 > 0){
        document.getElementById("signo2").innerHTML = "+";
    }else{
        document.getElementById("signo2").innerHTML = "-";
    }

    const distance = getDistanceBetweenElements(
        document.getElementById("x"),
        document.getElementById("y")
     );

    document.getElementById("distance").innerHTML = "Distancia: "+distance.toFixed(0.5)+"cm";
     
    let metros=distance/100;

    let f = (k*q*q2)/Math.pow(metros,2);

    document.getElementById("Fe").innerHTML = "Fuerza Electrica: "+f.toExponential(1);

    
});































