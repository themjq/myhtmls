let rootA="mp3/";
let rootP="mp3/img/"
let Pic=document.getElementById('musicImg');
let songs=['Christopher - Told You So.mp3','LINKIN PARK - Numb.mp3','花粥 - 纸短情长.mp3','凌子 - 猜不透 (Live).mp3','尹婕 - 退后.mp3'];
let Pics=['Told you so.jpg','Numb.jpg','纸短情长.jpg','猜不透.jpg','退后.jpg'];
let bf=document.getElementById("bofang");
let zt=document.getElementById("zhanting");
var Music_Img=document.getElementById("musicImg");
var i=0;
pre.onclick=function last(){
            let song;
            i>0?--i:i=songs.length-1;
            audio.src = rootA+songs[i];
            audio.play();
            Pic.src=rootP+Pics[i];
            bf.style.display="none";
            zt.style.display="block";
}
next.onclick=function next(){
        if (++i>songs.length-1) {
            i=0
        }
        let song=songs[i];
        audio.src=rootA+song;
        Pic.src=rootP+Pics[i];
        bf.style.display="none";
        zt.style.display="block";
        audio.play();
    }
bofang.onclick = function(){
    if(audio.paused){
        audio.play();
        bf.style.display="none";
        zt.style.display="block";
        Music_Img.style.animation="cirImg 10s linear infinite";
    }
}
// 暂停
zhanting.onclick = function(){
    if(audio.played){
        audio.pause();
        zt.style.display="none";
        bf.style.display="block";
        Music_Img.style.animation="none";
    }
}
volume_img.onclick=function(){
        volume_img.style.display="none";
        mute.style.display="block";
        volume.style="width:0px";
        audio.volume=0;
}
mute.onclick=function(){
    setVolume();
    volume_img.style.display="block";
    mute.style.display="none";
    volume.style="width:100px";
}
function setVolume(){
    audio.volume=volume.value;
} 
function setplan(){
    total = audio.duration;
    audio.currentTime=total*plan.value/100;
}
var now = 0;
var total = 0;
function fmtTime(time) { /*时间转换*/
    time *= 1000;
    time = new Date(time);
    var min = time.getMinutes();
    var sec = time.getSeconds();
    min = min < 10? '0'+ min:min;
    sec = sec < 10? '0'+ sec:sec;
    return min+':'+sec;
}
audio.addEventListener('loadeddata',function () { /*时间条*/
    now = audio.currentTime;
    total = audio.duration;
    document.getElementById("now_time").innerText = fmtTime(now);
    document.getElementById('total_time').innerText = fmtTime(total);
});
audio.addEventListener("timeupdate",updateProgress);
function updateProgress () {
    now = audio.currentTime;
    var p = now/total * 100;
    document.getElementById('plan').value=p;
    document.getElementById("now_time").innerText = fmtTime(now);
}


function Initial_Music()
{
    if(audio.pause)
    {
        bf.style.display="none";
        zt.style.display="block";
    }
    audio.play();
    Music_Img.style.animation="cirImg 10s linear infinite";
}
play1.onclick=function(){
    audio.src = rootA+songs[0];
    Pic.src=rootP+Pics[0];
    Initial_Music();
}
play2.onclick=function(){
    audio.src = rootA+songs[1];
    Pic.src=rootP+Pics[1];
    Initial_Music();
}
play3.onclick=function(){
    audio.src = rootA+songs[2];
    Pic.src=rootP+Pics[2];
    Initial_Music();
}
play4.onclick=function(){
    audio.src = rootA+songs[3];
    Pic.src=rootP+Pics[3];
    Initial_Music();
}
play5.onclick=function(){
    audio.src = rootA+songs[4];
    Pic.src=rootP+Pics[4];
    Initial_Music();
}
