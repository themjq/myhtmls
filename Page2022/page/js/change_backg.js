//换壁纸
        var imgs=document.querySelectorAll('#back_img');
        window.onload = function () {
            for(var i=0;i<imgs.length;i++)
                {
                    imgs[i].style="display: none;position: fixed;bottom: 10px;";
                }
            }
        document.onclick=function(e){
            var bot=event.srcElement;
            if(bot.type == "button"&&bot.id=="back_botton") {  
                for(var i=0;i<imgs.length;i++)
                    imgs[i].style="display: block;";
            }
            else if(bot.type == "button"&&bot.id=="back_botton2") {  
                for(var i=0;i<imgs.length;i++)
                    imgs[i].style="display: none;";
            }
        }
        for(var i=0;i<imgs.length;i++)
        {   
            imgs[i].onclick=function(){
                document.getElementById("backg").style.backgroundImage='url('+this.src+')'
            }
        }