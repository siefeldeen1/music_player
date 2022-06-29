const img = Array.from(document.querySelectorAll(".img"))
const arr =["songs/1.mp3","songs/2.mp3","songs/3.mp3","songs/4.mp3",]
const audio = new Audio()
let isplaying = false;

img.forEach((ele)=>{
    ele.addEventListener("click",(e)=>{
        const index = e.target.dataset.index; 
        audio.src = arr[parseInt(index)] 
    
       
            
           ele.onclick = function(){
            if(isplaying == false){
            audio.play()
            isplaying = true
            console.log("PLAYING");
           }else if (isplaying == true ){
            audio.pause()
            isplaying = false
           }


     } //else if(audio.pause){
     // ele.onclick = function(){
     //     audio.play()}
     // }
   
 })

})


