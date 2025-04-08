const convertButton = document.querySelector(".convert-button")

function convertValues() {
    const inputValue = document.querySelector(".input-value").value
    const valueConvert = document.querySelector(".p-Valor-convert")
    const valueConverted = document.querySelector(".p-Valor")

    const dolarToday = 5.2

    const convertedValue = inputValue / dolarToday

    valueConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style:"currency",
        currency:"BRL"
    }).format(inputValue)

    valueConverted.innerHTML = new Intl.NumberFormat("en-US", {
        style:"currency",
        currency:"USD"
    }).format(convertedValue)

    console.log(convertedValue)
}

 convertButton.addEventListener("click", convertValues)
