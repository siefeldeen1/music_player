const img = Array.from(document.querySelectorAll(".img"))
const arr =["songs/1.mp3","songs/2.mp3","songs/3.mp3","songs/4.mp3",]
const audio = new Audio()

img.forEach((ele)=>{
    ele.addEventListener("click",(e)=>{
        const index = e.target.dataset.index;
        
        audio.src = arr[parseInt(index)]
        
        audio.play()

    })
})



