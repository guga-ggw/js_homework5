const txt = "random txt"
const h1 = document.createElement('h1')
const div =  document.createElement('div')
const btn = document.createElement("button")
div.setAttribute('id', "container")
btn.setAttribute('id', "btn")
btn.innerText = "Remove div"

btn.addEventListener('click', (e)=>{
    div.style.display === 'none' ? div.style.display = 'block' : div.style.display = 'none'
      
})

h1.append(txt)
div.append(h1)
document.body.append(div, btn)