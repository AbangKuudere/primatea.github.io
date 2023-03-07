//toggle class active
const navbarNav = document.querySelector

('.navbar-nav');


//if menu click in
document.querySelector('#hamburger-menu').

onclick = () =>{
    navbarNav.classList.toggle ('active');
}


//remove class active
const hamburger = document.querySelector
('#hamburger-menu');

document.addEventListener('click', function(e){
    if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
});


//music
  var myAudio = document.getElementById("myAudio");
        var btnplay = document.getElementById("btnplay");

        btnplay.onclick = function(){
            if(myAudio.paused){
                myAudio.play();
               
            }else{
                myAudio.pause();
              
            }
        }


//autoplay
window.addEventListener('load', function() {
    document.getElementById('myAudio').play();
  });

alert ('website ini hanya untuk tugas teknik rekayasa saya selamat menikmati')



