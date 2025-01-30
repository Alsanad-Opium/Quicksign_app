
//here we fist initialised the elements of html
const colorPicker = document.getElementById('colorPicker')

const bgcolor = document.getElementById('bgColor')

const fsize = document.getElementById('fontPicker')

const canvas = document.getElementById('canvas')

const clearBtn = document.getElementById('clear')

const saveCanvas = document.getElementById('SaveCanvas')

const retreive = document.getElementById('retreive')

const ctx = canvas.getContext('2d') //used the getcontent method on the canvas we created which will render it in 2 dimensional

let isDrawing //this will decide when to draw

colorPicker.addEventListener('change',(e)=>{
    ctx.strokeStyle = e.target.value //stroke color

    ctx.fillStyle = e.target.value //stroke fill
})

canvas.addEventListener('mousedown',(e)=>{

    isDrawing = true
     lastX = e.offsetX  //this gives us the position of the stroke on the canvas
     lastY = e.offsetY
})

canvas.addEventListener('mousemove', (e)=>{

    if (isDrawing) {
        ctx.beginPath() //this start the drawing by following the path
        ctx.moveTo(lastX,lastY)
        ctx.lineTo(e.offsetX, e.offsetY)
        ctx.stroke()

        lastX = e.offsetX // this is necessary for a smoooth flow and to avoid extra lines to the point of the cursor
        lastY = e.offsetY
    }
})


canvas.addEventListener('mouseup', ()=>{
    isDrawing = false
})

bgcolor.addEventListener('change',(e)=>{
   
    ctx.fillStyle = e.target.value
    ctx.fillRect(0,0, canvas.width, canvas.height)
})

clearBtn.addEventListener('click', ()=>{
    ctx.clearRect(0,0,canvas.width,canvas.height)
})

fsize.addEventListener('change',(e)=>{
    ctx.lineWidth = e.target.value
})

saveCanvas.addEventListener('click', ()=>{
    localStorage.setItem('saved_canvas', canvas.toDataURL() )  //saves the canvas drawing to the local storage in a url format which will  be used to download the image and can be later used to retreive the image using this url

    let link =  document.createElement('a')

    link.download = 'my-canva.png'

    link.href = canvas.toDataURL()

    link.click()
})

retreive.addEventListener('click', ()=>{

    let savedcontent = localStorage.getItem('saved_canvas')

    if (savedcontent) {
        
        let img = new Image()
        img.src = savedcontent //here url is used
        ctx.drawImage(img,0,0)
    }
   
})