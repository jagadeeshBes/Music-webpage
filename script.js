
document.addEventListener('DOMContentLoaded',function(){
var mySong = document.getElementsByTagName('audio')[0];
var icon = document.querySelector('.play');

icon.onclick = function(){
    if(mySong.paused){
        mySong.play();
        icon.src=".\asset\play.jpeg"
    }
   else{
        mySong.pause();
        icon.src=".\asset\phuse.jpeg"
   }
   
 
}
});