const html = document.querySelector("html");

const checkbox = document.querySelector("input[name=theme]");

const getStyle = (element, style) =>
    window
        .getComputedStyle(element)
        .getPropertyValue(style)
    
const standartMode = {
    background: getStyle(html, "--background"),
    operationsButton: getStyle(html, "--operations-button"),
    operationsColor: getStyle(html, "--operations-color"),
    numbersButton: getStyle(html, "--numbers-button"),
    numbersColor: getStyle(html, "--numbers-color"),
    backspaceButton: getStyle(html, "--backspace-button"),
    equalButton: getStyle(html, "--equal-button"),
    equalColor: getStyle(html, "--equal-color"),
    displayColor: getStyle(html, "--display-color"),
    displayFont: getStyle(html, "--display-font"),
    calculatorColor: getStyle(html, "--calculator-color")

}

const darkMode = {
    background: "#434343",
    operationsButton: "#56A618",
    operationsColor: "#ffffff",
    numbersButton: "#353535",
    numbersColor: "#ffffff",
    backspaceButton: "#285009",
    equalButton: "#000000",
    equalColor: "#ffffff",
    displayColor: "#141414",
    displayFont: "#ffffff",
    calculatorColor: "#141414"
}

const transformTag = tag => "--" + tag.replace(/([A-Z])/, "-$1").toLowerCase()

const changeMode = (colors) => {
    Object.keys(colors).map(tag => html.style.setProperty(transformTag(tag), colors[tag]))
}

checkbox.addEventListener("change", ({target}) => {
    target.checked ? changeMode(darkMode) : changeMode(standartMode)
})