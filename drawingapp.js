let boyut = document.getElementById('range');
let canvas = document.getElementById("canvas");
let ColorSelect = document.getElementById("renksec");

canvas.width = 800;
canvas.height = 480;
let renk = "black";
let cizim = canvas.getContext("2d");
let paint ;
canvas.addEventListener("mousedown", tik);



function temizle(){
    cizim.clearRect(0,0,canvas.width,canvas.height);
}

function tik(){
canvas.addEventListener("mousemove", ciz);
canvas.addEventListener("mouseup", bos);



function bos(){
    canvas.removeEventListener("mousemove", ciz);
}
function ciz(e){
    


  
    
 cizim.fillRect(e.x,e.y,boyut.value,boyut.value);
   
 
   cizim.fillStyle = ColorSelect.value;
   cizim.stroke();
 
}
    
}






