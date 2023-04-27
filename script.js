
let btn = document.querySelectorAll(".key");
 for (let i = 0; i < btn.length; i++) {     
     btn[i].addEventListener("click",()=>{
       let btnText = this.innerHTML;
         makeSound(btnText);
         keyAnimation(btnText);
     })
 }

 document.addEventListener("keypress", (e)=>{
     makeSound(e.key.toUpperCase());
     keyAnimation(e.key);
 })
 
 const makeSound = (key)=>{
     if (key === 'A') {
        let clap = new Audio('sounds/clap.wav');
        clap.play();
     }
     else if (key === 'S') {
        let hihat = new Audio('sounds/hihat.wav');
         hihat.play();
     }
     else if (key === 'D') {
        let kick = new Audio('sounds/kick.wav');
        kick.play();
     }
     else if (key === 'F') {
        let openhat = new Audio('sounds/openhat.wav');
         openhat.play();
     }
     else if (key === 'G') {
        let boom = new Audio('sounds/boom.wav');
        boom.play();
     }
     else if (key === 'H') {
         let ride = new Audio('sounds/ride.wav');
         ride.play();
     }
     else if (key === 'J') {
         let snare = new Audio('sounds/snare.wav');
         snare.play();
     }
     else if (key === 'K'){
        let tom = new Audio('sounds/tom.wav');
        tom.play();
     }
     else if (key === 'L') {
        let tink = new Audio('sounds/tink.wav');
        tink.play();
     }
 }

 const keyAnimation = (activeKey)=>{
    let currentKey = document.querySelector("." + activeKey)
    currentKey.classList.add("pressed")

    setTimeout(()=>{
        currentKey.classList.remove("pressed")
    }, 200)
 }
