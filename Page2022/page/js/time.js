//时间
        function getTime(){
            let date=new Date;
            let year = date.getFullYear();
            let month= date.getMonth();
            let day = date.getDate();
            let hour = date.getHours();
            let minu = date.getMinutes();
            let second=date.getSeconds();
            month = month+1;
            var day2=getMonthWeek(year, month, day)-1;
            if(month==2)var num=4;
                else var num=5;
            var day1=date.getDay();
            if(day1==0)day1=6;
            document.getElementById("progress_sec").style.width=100*second/60+"%";
            document.getElementById("progress_minu").style.width=100*minu/60+"%";
            document.getElementById("progress_hour").style.width=100*hour/24+"%";
            document.getElementById("progress_day").style.width=100*day1/7+"%";
            document.getElementById("progress_day2").style.width=100*day2/num+"%";
            document.getElementById("progress_month").style.width=100*month/12+"%";
            document.getElementById("HOUR").innerHTML=hour;
            document.getElementById("DAY").innerHTML=day1;
            document.getElementById("DAY2").innerHTML=day2;
            document.getElementById("MONTH").innerHTML=month;
            document.getElementById("MINU").innerHTML=minu;
            document.getElementById("SEC").innerHTML=second;
            hour=checkTime(hour);
            minu=checkTime(minu);
            second=checkTime(second);
            let arr_work = new Array("星期日","星期一","星期二","星期三","星期四","星期五","星期六");
            let week = arr_work[date.getDay()];
            let time = year+"/"+month+"/"+day+" "+week+" "+hour+":"+minu+":"+second;
            document.getElementById("datetime").innerHTML=time;
        }
        setInterval("getTime();",1000);
        function checkTime(t)
        {
            if (t<10)
                t="0" + t;
            return t;
        }

    function getMonthWeek(a, b, c) {
            var date = new Date(a, parseInt(b) - 1, c),
                w = date.getDay(),
                d = date.getDate();
            if(w==0){
                w=7;
            } 
            return Math.ceil((d + 6 - w) / 7);
        };