var imgs=document.querySelectorAll('#imgs');
window.onload = function () {
    document.getElementById("showpig").style.display="none"
    }
for(var i=0;i<imgs.length;i++)
{   
    imgs[i].onclick=function(){
        document.getElementById("showpig").style.backgroundImage='url('+this.src+')'
        document.getElementById("showpig").style.display="block"
    }
}
var x=document.getElementById("x");
x.onclick=function()
{
    document.getElementById("showpig").style.display="none"
}