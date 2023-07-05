const dropdown = document.querySelector("#dropdown")
const menu = document.querySelector("#menu")
const moon = document.querySelector("#moon")
const body = document.querySelector("body")
const hLinks = document.querySelectorAll("#hLink")

dropdown.addEventListener("click", () =>{ 
    menu.classList.toggle("hidden")
    dropdown.classList.toggle("")
})

hLinks.forEach(link=>{
    link.addEventListener("click", () =>{ 
        menu.classList.toggle("hidden")
        dropdown.classList.toggle("")
    })
})

moon.addEventListener("click", () =>{ 
    body.classList.toggle("dark")
})