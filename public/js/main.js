const hamburger = document.querySelector(".hamburger")
const navMenu = document.querySelector(".nav-menu")
const todoItem = document.querySelector(".not")
const completedBttn = document.querySelector('.completed-button')  // Should change the Exercise title to gray and strikethrough when the completed button is clicked.
const exerciseTitle = document.querySelector('#title')
const todoIncomplete = document.querySelectorAll('.done span.completed') // And this should undo the 'completed' click. 

hamburger.addEventListener("click", ()=>{
    hamburger.classList.toggle("active")
    navMenu.classList.toggle("active")
})
document.querySelectorAll(".nav-link").forEach(ele => ele.addEventListener("click", ()=>{
    hamburger.classList.remove("active")
    navMenu.classList.remove("active")
}))

Array.from(todoItem).forEach((el)=>{
    el.addEventListener('click', markFavorite)
})
document.querySelector('.not').addEventListener('click', markFavorite)

completedBttn.addEventListener('click', markComplete)


Array.from(todoCompleted).forEach((el)=>{
    el.addEventListener('click', markIncomplete)
})

// document.querySelector('.done').addEventListener('click',markComplete)

async function markFavorite(){
    const todoId = this.attributes[4].value
    
    try{
        const response = await fetch('/markFavorite', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'todoIdFromJSFile': todoId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}

async function markComplete(){
    console.log('completed pressed')
    const todoId = this.dataset.id
    console.log(todoId)
    try{
        const response = await fetch('/markComplete', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'todoIdFromJSFile': todoId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}

async function markIncomplete(){
    const todoId = this.parentNode.dataset.id
    try{
        const response = await fetch('todos/markIncomplete', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'todoIdFromJSFile': todoId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}