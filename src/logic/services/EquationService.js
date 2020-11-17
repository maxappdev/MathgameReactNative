import operationMethod from "../models/OperationMethod";
import Equation from "../models/Equation";

export const solveEquation = (equation) => {
    const equationString = toString(equation)
    var result = eval(equationString)
    return result
}

export const isValid = (equation) => {
    let answer = solveEquation(equation);
    return (answer > 0) && (answer % 1 == 0) && eachPartOfEquationIsValid(equation);
}

function toString(equation) {
    let result = equation.print().replace('×', '*').split("×").join("*");
    result = result.split("÷").join("/");
    return result
}

function eachPartOfEquationIsValid(equation) {
    let result = true;

    if (equation.operations.length === 2) {
        let operationFirst = equation.operations[0];
        let operationSecond = equation.operations[1];

        if (operationFirst.operationMethod === operationMethod.DIVISION) {
            let singleEquation = new Equation(equation.firstNumber, [operationFirst]);
            if (!isValid(singleEquation)) {
                result = false;
            }
        } else if (operationSecond.operationMethod === operationMethod.DIVISION
            && operationFirst.operationMethod !== operationMethod.MULTIPLICATION) {
            let firstNumber = operationFirst.number;
            let singleEquation = new Equation(firstNumber, [operationSecond]);
            if (!isValid(singleEquation)) {
                result = false;
            }
        }

    }

    return result;
}



