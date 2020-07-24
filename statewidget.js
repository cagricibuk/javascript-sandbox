var yazi = document.getElementById("yazi");
       
      var yemekdegeri =  document.getElementById("ilerleme2");
      var sudegeri = document.getElementById("ilerleme1");
      var uykudegeri = document.getElementById("ilerleme3");
      var id3 = setInterval(frame3,1000);
      var id2 = setInterval(frame2,1000);
      var id = setInterval(frame,1000);
      var sayideger = 160;
      var sayideger2 = 120;
      var sayideger3 = 220;
      function frame3(){
       
    if(sayideger3 < 40){
        
        setTimeout(uyuyemek,4000);
           function uyuyemek(){
            yazi.innerHTML = "Uyku degeri kritik Uyunuyor = "+sayideger3;
               sayideger3+=40;
               uykudegeri.style.width = Number(sayideger3) +"px";
           } 
        
        
    }else{
        sayideger3 -=2;
        uykudegeri.style.width = Number( sayideger3) + "px";
    }
        
    
    
}
      function frame2(){
        
    if(sayideger2 < 15){
        
        setTimeout(suyemek,4000);
           function suyemek(){
            yazi.innerHTML = "Su degeri kritik su içiliyor = "+sayideger2;
               sayideger2+=26;
               sudegeri.style.width = Number(sayideger2) +"px";
           } 
        
        
    }else{
        sayideger2 -=5;
        sudegeri.style.width = Number( sayideger2) + "px";
    }
        
        
    
}
       
function frame(){
    
    if(sayideger < 30){
        
        setTimeout(yemekyemek,4000);
           function yemekyemek(){
            yazi.innerHTML = "Yemek degeri kritik yemek yeniyor = "+sayideger;
               sayideger+=18;
               yemekdegeri.style.width = Number(sayideger) +"px";
           } 
        
        
    }else{
        sayideger -=3;
        yemekdegeri.style.width = Number( sayideger) + "px";
    }
       
    
}
setInterval(sayma,1000);
    function sayma(){
        yazi.innerHTML = " SU = "+sayideger2+" YEMEK = "+ sayideger+" ENERJİ = "+sayideger3 ;
       
        
    }