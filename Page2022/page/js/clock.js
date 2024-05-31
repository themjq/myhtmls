//时钟
        (function(){
            var canvas=null;
            var ctx=null;
            var cw=0;
            var ch=0;
            window.addEventListener("load",function(){
                canvas=document.getElementById("clock");
                ctx=canvas.getContext("2d");
                cw=parseInt(canvas.width);
                ch=parseInt(canvas.height);
                ctx.translate(cw/2,ch/2+5);//改变映射位置
                draw_watch(); 
            },false);
            function draw_watch(){
                ctx.clearRect(-cw/2,-ch/2,cw,ch);
                var len=Math.min(cw,ch)/2;
                var tlen=len*0.85;
                ctx.font="14px 'Arial";
                ctx.fillStyle="black";
                ctx.textAlign="center";
                ctx.textBaseLine="middle";
            for(var i=1;i<=12;i++)
            {
                var tag1=Math.PI*2*(3-i)/12;
                var tx=tlen*Math.cos(tag1);
                var ty=-tlen*Math.sin(tag1);
                ctx.fillText(i,tx,ty);
            }
            var date=new Date();
            var hour=date.getHours();
            var min=date.getMinutes();
            var sec=date.getSeconds();
            if(hour>12){
                hour=hour-12;
            }

            //绘制时针
            var angle1=Math.PI*2*(3-(hour+min/60))/12;
            var length1=len*0.5;
            var width1=5;
            var color1="#000000";
            drawhand(angle1,length1,width1,color1);

            //绘制分针
            var angle2 = Math.PI * 2 *(15 - (min+ sec/60))/60;
            var length2=len * 0.7;
            var width2=3;
            var color2="#555555";
            drawhand(angle2,length2,width2,color2);
            
            //绘制秒针
            var angle3 = Math.PI * 2 *(15 - sec)/60;
            var length3=len * 0.8;
            var width3=1;
            var color3="#aa0000";
            drawhand(angle3,length3,width3,color3);
            
            //设置timer
            ctx.beginPath();
            ctx.strokeStyle="white";
            ctx.arc(0,-5,74,0,2*Math.PI,false)
            ctx.lineWidth=3;
            ctx.stroke();
            setTimeout(draw_watch,1000);
            
        }
            function drawhand(angle,len,width,color){
                var x=len*Math.cos(angle);
                var y=-len*Math.sin(angle);
                //绘制针
                ctx.strokeStyle=color;
                ctx.lineWidth=width;
                ctx.lineCap="round";
                ctx.beginPath();
                ctx.moveTo(0,0);
                ctx.lineTo(x,y);
                ctx.stroke();
            }
            
   
        })();