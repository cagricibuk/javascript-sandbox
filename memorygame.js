function yeniden(){
    location.reload();
}
let renkler = ["Purple","Blue","Red","Yellow"];
let kullaniciArray = [];     
let random = Math.floor(Math.random()*renkler.length);
let random1 = Math.floor(Math.random()*renkler.length);
let random2 = Math.floor(Math.random()*renkler.length);
let random3 = Math.floor(Math.random()*renkler.length);
let RastgeleRenkDizisi = [renkler[random],renkler[random1],renkler[random2],renkler[random3]]

let morb = document.getElementById("mor");
let mavib = document.getElementById("mavi");
let kirmizib = document.getElementById("kirmizi");
let sarib = document.getElementById("sari");
let div = document.getElementById("kare");
let kdiv = document.getElementById("kkare");
let i=0;
function baslat(){
let buttonStart = document.getElementById("startbutton");
buttonStart.style.display = "none"; 
if(i<1){
setTimeout(ilk,800);

function ilk(){
div.style.backgroundColor = RastgeleRenkDizisi[0];
kdiv.innerHTML = "<h1>1</h1>";
setTimeout(iki,800);
}
function iki(){
div.style.backgroundColor = RastgeleRenkDizisi[1];
kdiv.innerHTML = "<h1>2</h1>";
setTimeout(üc,800);
}
function üc(){
div.style.backgroundColor = RastgeleRenkDizisi[2];
kdiv.innerHTML = "<h1>3</h1>";
setTimeout(dört,800);
}
function dört(){
kdiv.innerHTML = "<h1>4</h1>";
div.style.backgroundColor = RastgeleRenkDizisi[3];

}
}
i++;
}

function morsec(){



kdiv.insertAdjacentHTML("beforeend","<button id='mor'>"+"</button>");
kullaniciArray.push("Purple");




}
function mavisec(){

if(kullaniciArray.length < 4){
kdiv.insertAdjacentHTML("beforeend","<button id='mavi'>"+"</button>");
kullaniciArray.push("Blue");
}else{
alert("daha fazla ekleyemezsiniz");
}  


}
function kirmizisec(){

if(kullaniciArray.length < 4){
kdiv.insertAdjacentHTML("beforeend","<button id='kirmizi'>"+"</button>");
kullaniciArray.push("Red");
}else{
alert("daha fazla ekleyemezsiniz");
}  






}
function sarisec(){

if(kullaniciArray.length < 4){
kdiv.insertAdjacentHTML("beforeend","<button id='sari'>"+"</button>");
kullaniciArray.push("Yellow");
}else{
alert("daha fazla ekleyemezsiniz");
}  



}
let trues = 0;
let falses = 0;
function kontrol(){

for(let x=0;x<4;x++){
if(kullaniciArray[x] == RastgeleRenkDizisi[x]){
trues+=1;
}else{
falses+=1;
}
}
if(trues == 4){

div.style.backgroundColor = "green";
div.innerHTML = "Kazandınız";

}else{
div.style.backgroundColor = "Red";
div.innerHTML = "Kaybettiniz";
}
}
