import React, { useReducer, createContext, useContext } from 'react';

const InputContext = createContext();

const actions = {
    ADD_DIGIT: 'ADD_DIGIT',
    REMOVE_DIGIT: 'REMOVE_DIGIT',
    ADD_OPERATOR: 'ADD_OPERATOR',
    CALCULATE: 'CALCULATE',
    RESET_CALC: 'RESET_CALC',
};

const reducer = (state, { type, payload }) => {
    switch (type) {
        case actions.RESET_CALC:
            return {
                expression: '',
                previousInput: 0,
                input: 0,
                operation: '',
            };
            break;

        case actions.ADD_DIGIT:
            if (state.clear)
                return {
                    ...state,
                    input: Number(`${state.input}${payload}`),
                    expression: state.input + payload,
                    clear: false,
                };

            if (payload === '.' && state.input.toString().includes('.'))
                return state;

            return {
                ...state,
                input:
                    payload === '.'
                        ? `${state.input}${payload}`
                        : Number(`${state.input}${payload}`),
                expression:
                    state.expression[0] === '0'
                        ? payload
                        : state.expression + payload,
            };
            break;

        case actions.ADD_OPERATOR:
            if (state.clear)
                return {
                    ...state,
                    expression: `${state.input}${payload}`,
                    previousInput: state.input,
                    input: 0,
                    operation: payload,
                    clear: false,
                };

            if (state.expression === '') return state;

            if (state.input === 0) {
                if (state.operation != '')
                    return {
                        ...state,
                        input: payload === '-' ? `${payload}` : state.input,
                        expression:
                            payload === '-'
                                ? `${state.expression}${payload}`
                                : `${state.previousInput}${payload}`,
                        operation: payload === '-' ? state.operation : payload,
                    };
                return {
                    ...state,
                    expression: `${state.expression}${payload}`,
                    operation: payload,
                };
            }

            if (state.input === '-') {
                if (payload === '-') return state;
                return {
                    ...state,
                    expression: `${state.previousInput}${payload}`,
                    input: 0,
                    operation: `${payload}`,
                };
            }

            if (state.previousInput === 0) {
                return {
                    ...state,
                    expression: `${state.expression}${payload}`,
                    operation: payload,
                    previousInput: state.input,
                    input: 0,
                };
            }

            return {
                ...state,
                expression: `${state.expression}${payload}`,
                previousInput: calculate(state),
                operation: payload,
                input: 0,
            };
            break;

        case actions.CALCULATE:
            if (
                state.operation == '' ||
                state.input == 0 ||
                state.previousInput == 0
            )
                return state;

            return {
                ...state,
                expression: '',
                previousInput: 0,
                operation: '',
                input: calculate(state),
                clear: true,
            };
            break;

        case actions.REMOVE_DIGIT:
            if (state.clear) {
                return {
                    ...state,
                    clear: false,
                    input: 0,
                };
            }
            if (state.input === 0) {
                if (state.previousInput != 0) {
                    let expressionLastValue =
                        state.expression[state.expression.length - 1];
                    if (/[÷*+-]/.test(expressionLastValue))
                        return {
                            ...state,
                            expression: state.previousInput.toString(),
                            operation: '',
                        };
                    return {
                        ...state,
                        expression:
                            state.expression.length === 1
                                ? 0
                                : state.expression.slice(0, -1),
                        previousInput:
                            state.previousInput.toString().length === 1
                                ? 0
                                : state.previousInput.toString().slice(0, -1),
                    };
                }
                return state;
            }
            return {
                ...state,
                expression:
                    state.expression.length === 1
                        ? 0
                        : state.expression.slice(0, -1),
                input:
                    state.input.toString().length === 1
                        ? 0
                        : state.input.toString().slice(0, -1),
            };
            break;
    }
};

const calculate = ({ previousInput, input, operation }) => {
    const prev = parseFloat(previousInput);
    const current = parseFloat(input);
    if (isNaN(prev) || isNaN(current)) return '';
    let result = '';
    switch (operation) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = current === 0 ? prev : prev * current;
            break;
        case '÷':
            result = current === 0 ? prev : prev / current;
            break;
    }

    return result;
};

export const DataProvider = ({ children }) => {
    const [data, setData] = useReducer(reducer, {
        expression: '',
        previousInput: 0,
        input: 0,
        operation: '',
    });
    return (
        <InputContext.Provider value={{ data, setData, calculate }}>
            {children}
        </InputContext.Provider>
    );
};
export const useData = () => useContext(InputContext);
