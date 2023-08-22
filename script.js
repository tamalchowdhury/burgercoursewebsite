const inputForm = document.getElementById("form")


// when the form "submit" happens, call this function
inputForm.addEventListener("submit", doSomething)

function doSomething(event) {
    event.preventDefault()

    const userName = event.target.name.value

    const userElement = document.getElementById("userName")

    userElement.innerText = userName

    
}
