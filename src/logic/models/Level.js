import operationMethod from './OperationMethod'
import AppColors from '../../styles/AppColors.js'

const allAvailableOpMethods = [
    operationMethod.ADDITION,
    operationMethod.SUBSTITUTION,
    operationMethod.MULTIPLICATION,
    operationMethod.DIVISION
];
const additionSubstitutionMethods = [
    operationMethod.ADDITION,
    operationMethod.SUBSTITUTION,
]

const multiplicationDivisionMethods = [
    operationMethod.MULTIPLICATION,
    operationMethod.DIVISION,
]

const onlyMultiplicationMethod = [
    operationMethod.MULTIPLICATION,
]

const Level = {
    levelNumber: {
        1: {
            minNumber: 1,
            maxNumber: 5,
            availableOperationMethods: additionSubstitutionMethods,
            operationsSize: 1,
            duration: 7,
            color: AppColors.levelColors.level1,
            durationInEquations: 4
        },
        2: {
            minNumber: 1,
            maxNumber: 10,
            availableOperationMethods: additionSubstitutionMethods,
            operationsSize: 1,
            duration: 7,
            color: AppColors.levelColors.level2,
            durationInEquations: 5
        },
        3: {
            minNumber: 1,
            maxNumber: 5,
            availableOperationMethods: multiplicationDivisionMethods,
            operationsSize: 1,
            duration: 7,
            color: AppColors.levelColors.level3,
            durationInEquations: 5
        },
        4: {
            minNumber: 1,
            maxNumber: 10,
            availableOperationMethods: multiplicationDivisionMethods,
            operationsSize: 1,
            duration: 7,
            color: AppColors.levelColors.level4,
            durationInEquations: 5
        },
        5: {
            minNumber: 3,
            maxNumber: 10,
            availableOperationMethods: allAvailableOpMethods,
            operationsSize: 1,
            duration: 7,
            color: AppColors.levelColors.level5,
            durationInEquations: 5
        },
        6: {
            minNumber: 8,
            maxNumber: 15,
            availableOperationMethods: additionSubstitutionMethods,
            operationsSize: 1,
            duration: 5,
            color: AppColors.levelColors.level6,
            durationInEquations: 7
        },
        7: {
            minNumber: 10,
            maxNumber: 20,
            availableOperationMethods: additionSubstitutionMethods,
            operationsSize: 1,
            duration: 6,
            color: AppColors.levelColors.level7,
            durationInEquations: 7
        },
        8: {
            minNumber: 8,
            maxNumber: 13,
            availableOperationMethods: onlyMultiplicationMethod,
            operationsSize: 1,
            duration: 12,
            color: AppColors.levelColors.level8,
            durationInEquations: 10
        },
        9: {
            minNumber: 4,
            maxNumber: 9,
            availableOperationMethods: allAvailableOpMethods,
            operationsSize: 2,
            duration: 10,
            color: AppColors.levelColors.level9,
            durationInEquations: 10
        },
        10: {
            minNumber: 7,
            maxNumber: 10,
            availableOperationMethods: onlyMultiplicationMethod,
            operationsSize: 2,
            duration: 9,
            color: AppColors.levelColors.level10,
            durationInEquations: 100
        },
    }
}

export const maxLevelNr = Object.keys(Level.levelNumber).length;

export default Level
