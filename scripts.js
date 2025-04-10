const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-dolar-euro")

function convertValues() {
    const inputValue = document.querySelector(".input-value").value
    const valueConvert = document.querySelector(".p-Valor-convert")
    const valueConverted = document.querySelector(".p-Valor")

    console.log(currencySelect.value)
    const dolarToday = 5.2
    const euroToday = 6.2

    if (currencySelect.value == "dolar") {
        valueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputValue / dolarToday)
    }

    if (currencySelect.value == "euro") {
        valueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputValue / euroToday)
    }

    valueConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputValue)

}

convertButton.addEventListener("click", convertValues)
