class Equation {
    constructor(firstNumber, operations) {
        this.firstNumber = firstNumber
        this.operations = operations
    }

    print() {
        let result = this.firstNumber
        this.operations.forEach(operation => {
            result += operation.operationMethod + operation.number
        });

        return result
    }

    hasMoreThanTwoNumbers() {
        return this.operations.length > 1;
    }


}

export default Equation