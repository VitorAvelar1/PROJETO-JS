const convertButton = document.querySelector(".convert-button")
const selectCurrency = document.querySelector(".currency-dolar-euro")

function convertValues() {
    const inputCurrency = document.querySelector(".input-value").value
    const currencyConvert = document.querySelector(".p-Valor-convert")
    const curencyConverted = document.querySelector(".p-Valor")

    const dolarToday = 5.2
    const euroToday = 6.2

    if (selectCurrency.value == "dolar") {
        curencyConverted.innerHTML = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(inputCurrency / dolarToday)
    }

    if (selectCurrency.value == "euro") {
        curencyConverted.innerHTML = new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(inputCurrency / euroToday)
    }

    currencyConvert.innerHTML = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(inputCurrency)

}

function changeCurrency() {
    const currencyName = document.querySelector(".p-moeda-dolar")
    const currencyImage = document.querySelector(".img-Moeda-dolar")

    if (selectCurrency.value == "dolar") {
        currencyName.innerHTML = "Dólar americano"
        currencyImage.src = "./assets/estados-unidos (1) 1.png"
    }

    if (selectCurrency.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/Euro.png"
    }

    convertValues()
}

selectCurrency.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)