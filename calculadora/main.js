class Calculator {
    constructor(previousOperationsText, displayResultsText) {
        this.previousOperationsText = previousOperationsText
        this.displayResultsText = displayResultsText
        this.clear()
    }

    clear(){
        this.displayResults = ''
        this.previousOperations = ''    
        this.operation = undefined
    }

    delete(){
        this.displayResults = this.displayResults.toString().slice(0, -1)
    }

    addNumber(number){
        if (number === '.' && this.displayResults.includes('.')) return
        this.displayResults = this.displayResults.toString() + number.toString()
    }

    chooseOperation(operation){
        if (this.displayResults === '') return
        if (this.previousOperations !== '') {
            this.compute
        }
        this.operation = operation
        this.previousOperations = this.displayResults
        this.displayResults = ''
    }

    compute(){
        let computationResults
        const preVar = parseFloat(this.previousOperations)
        const curVar = parseFloat(this.displayResults)
        if (isNaN(preVar) || isNaN(curVar)) return
        switch (this.operation) {
            case '+':
                computationResults = preVar + curVar
                break
            case '-':
                computationResults = preVar - curVar
                break
            case '*':
                computationResults = preVar * curVar
                break
            case '÷':
                computationResults = preVar / curVar
                break
            case '+/-':
                computationResults = curVar * (-1)
                break
            case '%':
                computationResults = curVar / 100
                break
            default:
                return
        }
        this.displayResults = computationResults
        this.operation = undefined
        this.previousOperations = ''
    }

    getDisplayNumber(number) {
        const stringNumber = number.toString()
        const integerDigits = parseFloat(stringNumber.split('.')[0])
        const decimalDigits = stringNumber.split('.')[1]
        let integerDisplay
        if (isNaN(integerDigits)) {
            integerDisplay = ''
        } else {
            integerDisplay = integerDigits.toLocaleString('en', {maximumFractionDigits: 0})
        }
        if (decimalDigits != null) {
            return `${integerDisplay}.${decimalDigits }`
        } else {
            return integerDisplay   
        }
    }

    updateDisplay(){
        this.displayResultsText.innerText = this.getDisplayNumber(this.displayResults)
        if (this.operation != null) {
            this.previousOperationsText.innerText = `${this.previousOperations} ${this.operation}`
        } else {
            this.previousOperationsText.innerText = ''
        }

    }
}

const numberButtons = document.querySelectorAll('.numbers');
const operationButtons = document.querySelectorAll('.operations');
const equalsButton = document.querySelector('.equal');
const deleteButton = document.querySelector('.backspace');
const clearButton = document.querySelector('.c');
const previousOperationsText = document.querySelector('.previous-operations');
const displayResultsText = document.querySelector('.results');

const calculator = new Calculator(previousOperationsText, displayResultsText)

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.addNumber(button.innerText)
        calculator.updateDisplay()
    })
})

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay()
    })
})

equalsButton.addEventListener('click', button => {
    calculator.compute()
    calculator.updateDisplay()
})

clearButton.addEventListener('click', button => {
    calculator.clear()
    calculator.updateDisplay()
})

deleteButton.addEventListener('click', button => {
    calculator.delete()
    calculator.updateDisplay()
})
