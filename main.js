    const button = document.querySelector("#toggle")

    button.addEventListener("click", (event) => {
        const text = document.querySelector("#mainText")
        console.log(text.innerHTML)
        if (text.innerHTML === "Hello World") {
            text.innerHTML = "Hello Universe"
        }
        else {
            text.innerHTML = "Hello World"
        }
    })