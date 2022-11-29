// const { response } = require("express");

const favoriteButton = document.querySelector(".notfavoriteButton");
const notFavoriteButton = document.querySelector(".favoriteButton")
const markAsCompleteButton = document.querySelector(".markAsIncompleteButton");
const markAsIncompleteButton = document.querySelector(".markAsCompleteButton");

if (favoriteButton){
    favoriteButton.addEventListener('click', markFavorite);
}else{
    notFavoriteButton.addEventListener("click", markNotFavorite)
};
if (markAsCompleteButton){
    markAsCompleteButton.addEventListener('click', markComplete);
}else{
    markAsIncompleteButton.addEventListener("click", markIncomplete)
};

// Array.from(todoComplete).forEach((el)=>{
//     el.addEventListener('click', markIncomplete)
// })

async function markFavorite(){
    const todoId = this.attributes[4].value
    
    try{
        const response = await fetch('/markFavorite', {
            method: 'put',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({
                'exerciseId' : exerciseId
            })
        });

        const data = await response.json()
        console.log(data)
        location.reload();
    } catch (err) {
        console.log(err);
    }
}

async function markNotFavorite(){
    const exerciseId = this.dataset.id
    console.log(exerciseId)
    try {
        const response = await fetch('/markNotFavorite', {
            method: 'put',
            headers: {'Content-type': 'application/json'}, 
            body: JSON.stringify({
                'exerciseId': exerciseId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    } catch (error) {
        console.log(error)
    }
}

async function markComplete() {
    const exerciseId = this.dataset.id;

    try {
       const response = await fetch('/markComplete', {
            method: 'put',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({
                 exerciseId
            })
        });

        const data = await response.json()
        console.log(data)
        location.reload()
    } catch (error) {
        console.log(error)
    }
}
async function markIncomplete(){
    const exerciseId = this.dataset.id
    console.log(exerciseId)
    try {
        const response = await fetch('/markIncomplete', {
            method: 'put',
            headers: {'Content-type': 'application/json'}, 
            body: JSON.stringify({
               exerciseId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    } catch (error) {
        console.log(error)
    }
}

// async function markIncomplete(){
//     const todoId = this.parentNode.dataset.id
//     try{
//         const response = await fetch('todos/markIncomplete', {
//             method: 'put',
//             headers: {'Content-type': 'application/json'},
//             body: JSON.stringify({
//                 'todoIdFromJSFile': todoId
//             })
//         })
//         const data = await response.json()
//         console.log(data)
//         location.reload()
//     }catch(err){
//         console.log(err)
//     }
// }