const imgchange1=document.getElementById("imgchange1");
imgchange1.addEventListener("click",img1);
document.getElementById("features-1").style.display="block";
function img1() {
    document.getElementById("features-1").style.display="block";
    document.getElementById("features-2").style.display="none";
    document.getElementById("features-3").style.display="none";
    document.getElementById("features-4").style.display="none";
}

const imgchange2=document.getElementById("imgchange2");
imgchange2.addEventListener("click",img2);
document.getElementById("features-2").style.display="none";

function img2() {
    document.getElementById("features-2").style.display="block"
    document.getElementById("features-1").style.display="none";
    document.getElementById("features-3").style.display="none";
    document.getElementById("features-4").style.display="none";
}

const imgchange3=document.getElementById("imgchange3");
imgchange3.addEventListener("click",img3);
document.getElementById("features-3").style.display="none";
function img3() {
    document.getElementById("features-3").style.display="block";
    document.getElementById("features-1").style.display="none";
    document.getElementById("features-2").style.display="none";
    document.getElementById("features-4").style.display="none";
}

const imgchange4=document.getElementById("imgchange4");
imgchange4.addEventListener("click",img4);
document.getElementById("features-4").style.display="none";
function img4() {
    document.getElementById("features-4").style.display="block";
    document.getElementById("features-2").style.display="none";
    document.getElementById("features-3").style.display="none";
    document.getElementById("features-1").style.display="none";
}