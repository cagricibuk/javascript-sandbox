let takimadi1 ;
let takimadi2 ;
let tepepuan = 30;
let normalbitmepuan = 4;
let okeybitmepuan = 8;
let göstergepuan = 2; //varsayilan deger daha sorna değiştirilebilir.
let takim1puan=30,takim2puan=30;
let sonuclar = document.getElementById("sonuclar");
function restart(){
    location.reload();
}

function gecmisgizle(){
    let gecmis = document.getElementById("sonuclar").style;
    gecmis.display = "none";
}
function gecmisgoster(){
    let gecmis = document.getElementById("sonuclar").style;
    gecmis.display = "block";
    
}
function gosterge1(){
     takim1puan -=2;
     document.getElementById("takim1puan").innerHTML = takim1puan;   
    document.getElementById("takim2puan").innerHTML = takim2puan;  
    var satir = document.createElement("p");
    satir.innerHTML = takim1puan+"  ---  "+takim2puan;                   
sonuclar.appendChild(satir);  
    if(takim1puan <= 0 || takim2puan <= 0){
            if(takim1puan > takim2puan){
                alert(takimadi2 + " kazandı.");
            }else{
                alert(takimadi1 + " kazandı.");
            }
         }
}
function gosterge2(){
     takim2puan -=2;
     document.getElementById("takim1puan").innerHTML = takim1puan;   
    document.getElementById("takim2puan").innerHTML = takim2puan;
    var satir = document.createElement("p");
    satir.innerHTML = takim1puan+"  ---  "+takim2puan;                   
sonuclar.appendChild(satir);   
    if(takim1puan <= 0 || takim2puan <= 0){
            if(takim1puan > takim2puan){
                alert(takimadi2 + " kazandı.");
            }else{
                alert(takimadi1 + " kazandı.");
            }
         } 
}
function ayarlarikapat(){
    document.getElementById("buttonayarlari").style.display = "none";
}
function farklibitme1(){
   let puan = window.prompt("Kaç değer düşüleceğini giriniz","12");
   takim1puan -=puan;
   document.getElementById("takim1puan").innerHTML = takim1puan;   
    document.getElementById("takim2puan").innerHTML = takim2puan;
    var satir = document.createElement("p");
    satir.innerHTML = takim1puan+"  ---  "+takim2puan;                   
sonuclar.appendChild(satir);   
if(takim1puan <= 0 || takim2puan <= 0){
            if(takim1puan > takim2puan){
                alert(takimadi2 + " kazandı.");
            }else{
                alert(takimadi1 + " kazandı.");
            }
         }
}
function farklibitme2(){
    let puan = window.prompt("Kaç değer düşüleceğini giriniz","12");
  takim2puan -=puan;
  document.getElementById("takim1puan").innerHTML = takim1puan;   
    document.getElementById("takim2puan").innerHTML = takim2puan; 
    var satir = document.createElement("p");
    satir.innerHTML = takim1puan+"  ---  "+takim2puan;                   
sonuclar.appendChild(satir);  
if(takim1puan <= 0 || takim2puan <= 0){
            if(takim1puan > takim2puan){
                alert(takimadi2 + " kazandı.");
            }else{
                alert(takimadi1 + " kazandı.");
            }
         }
}
function normalbelirle(){
    normalbitmepuan = window.prompt("Normal şekilde bitildiğinde değerden düşülecek puanı giriniz","4");
    

}

function gostgergebelirle(){
    gostergepuan = window.prompt("Gösterge yapıldığında tepe değerden düşülecek puanı giriniz","2");
    

}
function okeybitmebelirle(){
    okeybitmepuan = window.prompt("Okey ile  bitildiğinde tepe değerden düşülecek puanı giriniz","8");
    

}
function adlaribelirle(){
    takimadi1 = window.prompt("Birinci Takımını adını giriniz");
    takimadi2 = window.prompt("İkinci takimin adını giriniz");
    document.getElementById("takimadlari").innerHTML = takimadi1 + " < - - > " + takimadi2;
    document.getElementById("takimlararchive").innerHTML = takimadi1 + " < - - > " + takimadi2; ;
    
}
function puanayarlari(){

  

   let puanayarlari = document.getElementById('puanayarlari');
   let puanayarhtml = "<div id='buttonayarlari'> <button onclick='tepepuanbelirle()'> Tepe Puanı </button> <button onclick='normalbelirle()'> Normal Bitme Puanı </button><br><button onclick='okeybitmebelirle()'> Okeyle Bitme Puanı </button><button onclick='gostgergebelirle()'> Gösterge Puanı </button> <button onclick='ayarlarikapat()'>Ayarları Kapat</button></div>"
   puanayarlari.innerHTML = puanayarhtml ;
   window.scrollTo(0, document.body.scrollHeight);

}
function tepepuanbelirle(){
    tepepuan = window.prompt("Bitme ve Gösterge puanlarının düşüleceği tepe puanı değerini giriniz","30");
    document.getElementById("takim1puan").innerHTML = tepepuan;
    document.getElementById("takim2puan").innerHTML = tepepuan;
    takim1puan = tepepuan;
    takim2puan = tepepuan;
}
 function bitti1(){
    var okeylimi = confirm("Okeyle mi Bitti");
if (okeylimi == true) {
takim1puan -= okeybitmepuan;
} else {
takim1puan -= normalbitmepuan;

}
if(takim1puan <= 0 || takim2puan <= 0){
            if(takim1puan > takim2puan){
                alert(takimadi2 + " kazandı.");
            }else{
                alert(takimadi1 + " kazandı.");
            }
         }
document.getElementById("takim1puan").innerHTML = takim1puan;   
    document.getElementById("takim2puan").innerHTML = takim2puan;     
                  

    var satir = document.createElement("p");
    satir.innerHTML = takim1puan+"  ---  "+takim2puan;                   
sonuclar.appendChild(satir);
 }
 function bitti2(){
    
var okeylimi = confirm("Okeyle mi Bitti");
if (okeylimi == true) {
takim2puan -= okeybitmepuan;
} else {
takim2puan -= normalbitmepuan;

}
if(takim1puan <= 0 || takim2puan <= 0){
            if(takim1puan > takim2puan){
                alert(takimadi2 + " kazandı.");
            }else{
                alert(takimadi1 + " kazandı.");
            }
         }
    document.getElementById("takim1puan").innerHTML = takim1puan;   
    document.getElementById("takim2puan").innerHTML = takim2puan; 
                  
    
            var satir = document.createElement("p");
            
            satir.innerHTML = takim1puan+"  ---  "+takim2puan;    

            sonuclar.appendChild(satir);              
    
         }
         