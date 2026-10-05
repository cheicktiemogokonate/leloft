(function(){
var P=[["index.html","Accueil"],["la-carte.html","La carte"],["le-lieu.html","Le lieu & événements"],["contact.html","Nous trouver"]];
var cur=location.pathname.split("/").pop()||"index.html";
var links=P.map(function(p){return '<a href="'+p[0]+'"'+(p[0]==cur?' aria-current="page"':'')+'>'+p[1]+'</a>'}).join("");
var tel="tel:+2250709220915";
document.body.insertAdjacentHTML("afterbegin",
'<header><a class="lg" href="index.html">Le Loft</a><nav class="d" aria-label="Navigation">'+links+'<a class="btn" href="'+tel+'">Réserver / Commander</a></nav><button id="mb" aria-expanded="false" aria-controls="mn">Menu</button></header><nav id="mn" aria-label="Menu">'+links+'<a href="'+tel+'" class="btn" style="font:600 1.1rem system-ui;align-self:flex-start">Réserver / Commander</a></nav><a class="cb" href="'+tel+'">Appeler · 07 09 22 09 15</a>');
document.body.insertAdjacentHTML("beforeend",
'<footer><div class="w"><div><strong style="color:#f2efea">Le LOFT Bouaké</strong><br>Air France 3, juste avant l’Hôtel Éléphant<br>Bouaké, Côte d’Ivoire</div><div>07 09 22 09 15<br><a href="mailto:leloftlounge@gmail.com">leloftlounge@gmail.com</a><br>Tous les jours, 11h à minuit</div><div><a href="https://www.facebook.com/LeLOFTlounge/" target="_blank" rel="noopener">Facebook</a><br><a href="https://maps.app.goo.gl/EZSDEHaryFbWprZy6" target="_blank" rel="noopener">Google Maps</a></div></div></footer>');
var b=document.getElementById("mb"),m=document.getElementById("mn");
function t(o){m.classList.toggle("o",o);b.setAttribute("aria-expanded",o);b.textContent=o?"Fermer":"Menu";document.body.style.overflow=o?"hidden":""}
b.onclick=function(){t(!m.classList.contains("o"))};
m.addEventListener("click",function(e){if(e.target.tagName=="A")t(false)});
document.addEventListener("keydown",function(e){if(e.key=="Escape")t(false)});
function f(e){var a=e.target.closest&&e.target.closest(".ev .it");if(!a)return;var s=a.closest(".evs");s.querySelectorAll(".evi img").forEach(function(m,k){m.classList.toggle("on",k==a.dataset.i)});s.querySelectorAll(".it").forEach(function(x){x.classList.toggle("on",x==a)})}
document.addEventListener("mouseover",f);document.addEventListener("focusin",f);document.addEventListener("click",f);
function st(){var o=new Date().getUTCHours()>=11;document.querySelectorAll(".op").forEach(function(e){e.classList.toggle("c",!o);e.innerHTML="<i></i>"+(o?"Ouvert maintenant, jusqu’à minuit":"Fermé pour l’instant, ouverture à 11h")})}
st();setInterval(st,60000);
document.addEventListener("click",function(e){var b=e.target.closest(".mt button");if(!b)return;var m=b.closest(".mn");m.querySelectorAll(".mt button").forEach(function(x){x.classList.toggle("on",x==b)});m.querySelectorAll(".mp").forEach(function(p,i){p.classList.toggle("on",i==b.dataset.c)})});
})();
