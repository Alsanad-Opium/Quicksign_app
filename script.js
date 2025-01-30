const colorPicker = document.getElementById('colorPicker')

const bgcolor = document.getElementById('bgColor')

const fsize = document.getElementById('fontPicker')

const canvas = document.getElementById('canvas')

const clearBtn = document.getElementById('clear')

const saveCanvas = document.getElementById('SaveCanvas')

const retreive = document.getElementById('retreive')

const ctx = canvas.getContext('2d')

let isDrawing

colorPicker.addEventListener('change',(e)=>{
    ctx.strokeStyle = e.target.value

    ctx.fillStyle = e.target.value
})

canvas.addEventListener('mousedown',(e)=>{

    isDrawing = true
     lastX = e.offsetX
     lastY = e.offsetY
})

canvas.addEventListener('mousemove', (e)=>{

    if (isDrawing) {
        ctx.beginPath()
        ctx.moveTo(lastX,lastY)
        ctx.lineTo(e.offsetX, e.offsetY)
        ctx.stroke()

        lastX = e.offsetX
        lastY = e.offsetY
    }
})


canvas.addEventListener('mouseup', (e)=>{
    isDrawing = false
})

bgcolor.addEventListener('change',(e)=>{
   
    ctx.fillStyle = e.target.value
    ctx.fillRect(0,0, canvas.width, canvas.height)
})

clearBtn.addEventListener('click', ()=>{
    ctx.clearRect(0,0,canvas.width,canvas.height)
})