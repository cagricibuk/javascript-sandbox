var canvas = document.createElement("canvas");
    document.body.appendChild(canvas);
    canvas.width = 600;
    canvas.height = 400;
    let cizim = canvas.getContext("2d");
    addEventListener("mousemove",update);
   let yazi = document.getElementById("yazi");
    
let kirmizi = {
    x:250,
    y:150,
    w:50,
    h:50

};


    function update(e){
        let mouse = e;
        cizim.clearRect(0,0,canvas.width,canvas.height);
        cizim.fillStyle = "red";
        cizim.fillRect(kirmizi.x,kirmizi.y,kirmizi.w,kirmizi.h);
        cizim.fillStyle = "blue";
        cizim.fillRect(mouse.x,mouse.y,50,50);
        if((kirmizi.x- 50  < mouse.x && mouse.x < kirmizi.x + 50) &&  (kirmizi.y - 50 < mouse.y && mouse.y < kirmizi.y + 50 )  ){
            document.body.style.color = "red";
            
        }
        else{
            document.body.style.color = "green";
        }
        
    
    
     yazi.innerHTML = "Mavi Kutu X = "+Number(mouse.x)+" Y = "+Number(mouse.y)+"<br> X = "+(kirmizi.x+" Y = "+kirmizi.y);
     
        
    }


    



