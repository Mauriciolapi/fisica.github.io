const dragBtn1 = document.querySelector('.carga1');
const dragBtn2 = document.querySelector('.carga2');
const dragBtn3 = document.querySelector('.punto');
const k = 9.0*Math.pow(10, 9);
const chkQ = document.querySelector("#campoQ1");
const chkQ2 = document.querySelector("#campoQ2");
const anchor = document.querySelector(".anchor");
const p = document.getElementById('p');



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
const drag3 = (e) => {
    dragBtn3.style.left = e.pageX +'px';
    dragBtn3.style.top = e.pageY +'px';

}
////////////////////////////////////////////////////////////////





function flechas(valor1,valor2, id1, id2) {

    dragBtn1.addEventListener('mousedown', () => {
        window.addEventListener("mousemove", drag1);
    });
    
    dragBtn2.addEventListener('mousedown', () => {
        window.addEventListener("mousemove", drag2);
    });
    
    dragBtn3.addEventListener('mousedown', () => {
        window.addEventListener("mousemove", drag3);
        punto.style.transform = "translate(-80%, -60%)";
    });
    
    window.addEventListener("mouseup", () => {
        window.removeEventListener("mousemove", drag1);
        window.removeEventListener("mousemove", drag2);
        window.removeEventListener("mousemove", drag3);
    });

    let q1value1 = document.getElementById('q1value1').value;
    let q1value2 = document.getElementById('q1value2').value;

    let q2value1 = document.getElementById('q2value1').value;
    let q2value2 = document.getElementById('q2value2').value;

    let prefijo1 = document.getElementById('prefijo1').value;
    let prefijo2 = document.getElementById('prefijo2').value;

    let q1 = q1value1 * Math.pow(10, q1value2);
    let q2 = q2value1 * Math.pow(10, q2value2);

    if(q1value1 > 0){
        if(prefijo1 == 'C'){
            q1 = q1value1 * Math.pow(10, q1value2);
        }else if(prefijo1 == 'mC'){
            q1 = (q1value1 * Math.pow(10, q1value2)) / 1e+6;
        }else if(prefijo1 == 'pC'){
            q1 = (q1value1 * Math.pow(10, q1value2)) / 1e+12;
        }else if(prefijo1 == 'nC'){
            q1 = (q1value1 * Math.pow(10, q1value2)) / 1e+9;
        }
    }

    if (q2value1 > 0){
        if(prefijo2 == 'C'){
            q2 = q2value1 * Math.pow(10, q2value2);
        }else if(prefijo2 == 'mC'){
            q2 = (q2value1 * Math.pow(10, q2value2)) / 1e+6;
        }else if(prefijo2 == 'pC'){
            q2 = (q2value1 * Math.pow(10, q2value2)) / 1e+12;
        }else if(prefijo2 == 'nC'){
            q2 = (q2value1 * Math.pow(10, q2value2)) / 1e+9;
        }
    }

   

    

    ["arrow1", "arrow2", "arrow3", "arrow4", "arrow5","arrow6","arrow7","arrow8","arrow9","arrow10", "arrow11", "arrow12", "arrow13", "arrow14","arrow15","arrow16","arrow17","arrow18","arrow19","arrow20","arrow21","arrow22","arrow23","arrow24","arrow25","arrow26","arrow27","arrow28","arrow29","arrow30","arrow31","arrow32","arrow33","arrow34","arrow35"].forEach(arrowName=> {
        document.addEventListener("mousemove", (e) =>{
            let Q1x = getPositionAtCenter(document.getElementById(id1)).x;
            let Q1y = getPositionAtCenter(document.getElementById(id1)).y;
            let Q2x = getPositionAtCenter(document.getElementById(id2)).x;
            let Q2y = getPositionAtCenter(document.getElementById(id2)).y;

            if(q1 > 0){
                document.getElementById("signo1").innerHTML = "+";      
            }else{
                document.getElementById("signo1").innerHTML = "-";
            }
            if(q2 > 0){
                document.getElementById("signo2").innerHTML = "+";
            }else{
                document.getElementById("signo2").innerHTML = "-";
            }
        
            let distance1 = getDistanceBetweenElements(
                document.getElementById("x"),
                document.getElementById("canva")
            );

            let distance2 = getDistanceBetweenElements(
                document.getElementById("y"),
                document.getElementById("canva")
            );


        
            document.getElementById("distance1").innerHTML = "Distancia entre q1 y p: "+distance1.toFixed(0.5)+"cm";
            document.getElementById("distance2").innerHTML = "Distancia entre q2 y p: "+distance2.toFixed(0.5)+"cm";

            let metros1=distance1/100;
            let metros2=distance2/100;
        
            let f1 = (k*q1*q2)/Math.pow(metros1,2);
            let f2 = (k*q1*q2)/Math.pow(metros2,2);
            document.getElementById("Fe1").innerHTML = "Fuerza Electrica q1: "+f1.toExponential(1)+"N";
            document.getElementById("Fe2").innerHTML ="Fuerza Electrica q2: "+f2.toExponential(1)+"N";
        

            const anchor2 = document.getElementById('canva');
            const rekt2 = anchor2.getBoundingClientRect();
            const anchorX2= rekt2.left + rekt2.width / 2;
            const anchorY2= rekt2.top + rekt2.height / 2; 
            
            const anchor = document.getElementById(arrowName);
            const rekt = anchor.getBoundingClientRect();
            const anchorX= rekt.left + rekt.width / 2;
            const anchorY= rekt.top + rekt.height / 2; 
    
            const angleDeg1 = angle(Q1x, Q1y, anchorX, anchorY);
            const angleDeg2 = angle(Q2x, Q2y, anchorX, anchorY);

            const angleDeg3 = angle(Q1x, Q1y, anchorX2, anchorY2);
            const angleDeg4 = angle(Q2x, Q2y, anchorX2, anchorY2);

            
        
            const arrows = document.querySelectorAll(`.${arrowName}`);
            arrows.forEach(arrow => {


                if(q1 > 0){
                    canva2.style.transform = "rotate(" + (angleDeg3 - 45)+ "deg)"; 
                }else{
                    canva2.style.transform = "rotate(" + (angleDeg3 - 45 + 180)+ "deg)";
                }
                if(q2 > 0){
                    canvas.style.transform = "rotate(" + (angleDeg4 - 45)+ "deg)";
                }else{
                    canvas.style.transform = "rotate(" + (angleDeg4 - 45 + 180)+ "deg)";
                }



                canva3.style.transform = "rotate(" + (angleDeg3 + angleDeg4)+ "deg)";

                if(getDistanceBetweenElements(arrow, x) < getDistanceBetweenElements(arrow, y)){
                    if(q2 < 0){
                        arrow.style.transform = "rotate(" + (valor1 + angleDeg1 + angleDeg2 + 180) + "deg)";
                    }else{
                        arrow.style.transform = "rotate(" + (valor1 + angleDeg1) + "deg)";
                    }
                }else if(getDistanceBetweenElements(arrow, y) < getDistanceBetweenElements(arrow, x)){
                    if(q1 < 0){
                        arrow.style.transform = "rotate(" + (valor2 + angleDeg1 + angleDeg2) + "deg)";
                    }else{
                        arrow.style.transform = "rotate(" + (valor2 + angleDeg2) + "deg)";
                    }
                }
            })
        })
    });
}







function submit(){
    let q1value1 = document.getElementById('q1value1').value;
    let q1value2 = document.getElementById('q1value2').value;

    let q2value1 = document.getElementById('q2value1').value;
    let q2value2 = document.getElementById('q2value2').value;

    let q1 = q1value1 * Math.pow(10, q1value2);
    let q2 = q2value1 * Math.pow(10, q2value2);
    
    anchor.classList.remove("hidden");
    anchor.classList.add("show");

    if ((q1 > 0) && (q2 < 0)) {
        flechas(0, 180, "x","y");
    }  
    if((q2 > 0) && (q1 < 0)) {
        flechas(180, 0, "x","y");
    } 
    if((q1 > 0) && (q2 > 0)){
        flechas(0, 0, "x","y");
    }
          
    if((q1 < 0) && (q2 < 0)){
        flechas(180, 180, "x","y");
    }
      
}




let canvas = document.getElementById('canva');
let ctx = canvas.getContext('2d');

let radius = canvas.height / 2;

ctx.translate(radius, radius);
ctx.arc(0, 0, radius-85, 0, 2*Math.PI);
ctx.fillStyle = 'coral';
ctx.fill();

ctx.beginPath();
ctx.moveTo(11, 11);
ctx.lineTo(100,100);
ctx.lineTo(92,80);
ctx.moveTo(100,100);
ctx.lineTo(80,92);
ctx.lineWidth = 4;
ctx.strokeStyle = 'red';
ctx.stroke();
ctx.closePath();



let canva2 = document.getElementById('canva2');
let ctx2 = canva2.getContext('2d');

let radius2 = canva2.height / 2;

ctx2.translate(radius, radius);
ctx2.fill();

ctx2.beginPath();
ctx2.moveTo(11, 11);
ctx2.lineTo(100,100);
ctx2.lineTo(92,80);
ctx2.moveTo(100,100);
ctx2.lineTo(80,92);
ctx2.lineWidth = 4;
ctx2.strokeStyle = 'red';
ctx2.stroke();
ctx2.closePath();


let canva3 = document.getElementById('canva3');
let ctx3 = canva3.getContext('2d');

let radius3 = canva3.height / 2;

ctx3.translate(radius, radius);
ctx3.fill();

ctx3.beginPath();
ctx3.moveTo(11, 11);
ctx3.lineTo(100,100);
ctx3.lineTo(92,80);
ctx3.moveTo(100,100);
ctx3.lineTo(80,92);
ctx3.lineWidth = 4;
ctx3.strokeStyle = 'green';
ctx3.stroke();
ctx3.closePath();