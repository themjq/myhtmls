var img1=document.getElementById("My_img1");
var img2=document.getElementById("My_img2");
window.onload=function(){
    img2.style.display="none";
} 
img1.onclick=function(){
    img2.style.display="block";
    img1.style.display="none";
}
img2.onclick=function(){
    img1.style.display="block";
    img2.style.display="none";
}