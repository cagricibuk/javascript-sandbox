var sel = document.getElementById("liste1");
       
let stemel = 1;
let ttemel = 2;
let ytemel = 3;
        let envanter = 0;
        let yazi = document.getElementById("islem");
    var tutulanBaliklar = 0;
    var cesit = ["Sazan","Turna","Yayın"];
    var balikA = ["3","5.6","12.5","19","0.8","0.3"];
    var balikB = ["5","45","12","11","0.5","0.2"];
    var balikC = ["6","3","5.6","12.5","45","12","11"];
    var listArray = [];
    let fiyatı=0;


function baliktut(){
    if(envanter  >= 5){
        alert("Envanter Doldu");
    }
    else{
    
    yazi.innerHTML = "Balik tutuluyor";
setTimeout(balik,2800);
function balik(){
    let randomTur = Math.floor(Math.random()*cesit.length);
    if(randomTur == "Yayın"){
        var randomKilo = Math.floor(Math.random()*balikC.length);
        yazi.innerHTML = cesit[randomTur] +" "+ balikC[randomKilo]+"kg";
        
        var option = document.createElement("option");
      option.text = cesit[randomTur] +" "+ balikC[randomKilo]+"kg";
                sel.add(option);
       envanter +=1;
       if(randomKilo>15){
           fiyatı += 100;
           fiyatı *= ytemel;
       }
       if(randomKilo>35){
           fiyatı += 600;
           fiyatı *= ytemel;
       }
       else{
           fiyatı += 50;
           fiyatı *= ytemel;
       }

        
    }
    if(randomTur == "Sazan"){
        var randomKilo = Math.floor(Math.random()*balikA.length);
        yazi.innerHTML = cesit[randomTur] +" "+ balikA[randomKilo]+"kg";
        var option = document.createElement("option");
      option.text = cesit[randomTur] +" "+ balikA[randomKilo]+"kg";
                sel.add(option);
        
                envanter +=1;
                if(randomKilo>15){
           fiyatı += 100;
           fiyatı *= stemel;
       }
       if(randomKilo>35){
           fiyatı += 600;
           fiyatı *= stemel;
       }
       else{
           fiyatı += 50;
           fiyatı *= stemel;
       }
    }
    else{
        var randomKilo = Math.floor(Math.random()*balikB.length);
        yazi.innerHTML = cesit[randomTur] +" "+ balikB[randomKilo]+"kg";
        var option = document.createElement("option");
        option.text = cesit[randomTur] +" "+ balikB[randomKilo]+"kg";
                sel.add(option);
                envanter +=1;
                if(randomKilo>15){
           fiyatı += 100;
           fiyatı *= ttemel;
       }
       if(randomKilo>35){
           fiyatı += 600;
           fiyatı *= ttemel;
       }
       else{
           fiyatı += 50;
           fiyatı *= ttemel;
       }
    }
  

    }
}
    
}
function sat(){
    var kazanc = document.getElementById("kazanc");
    if(envanter < 5){
        alert("Envanter Dolmadan Satamazsınız");
    }
    else{
    
    kazanc.innerHTML = fiyatı+" TL";
    }
   
}






