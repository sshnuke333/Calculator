import React from 'react';
import { useData } from '../state';
import { StyledButton } from './Buttons.styles';
import { Backspace, Clear, Remove } from '@mui/icons-material';

export const Buttons = () => {
    const { setData } = useData();

    const inputNumber = (e) => {
        const val = e.target.innerText;
        setData({ type: 'ADD_DIGIT', payload: val });
    };

    return (
        <>
            <StyledButton
                large
                id="clear"
                style={{ gridColumn: '1/3', backgroundColor: '#FF6363' }}
                onClick={() => setData({ type: 'RESET_CALC' })}
            >
                AC
            </StyledButton>
            <StyledButton
                large
                id="equals"
                style={{ gridColumn: '3/5', backgroundColor: '#FFFDA2' }}
                onClick={() => setData({ type: 'CALCULATE' })}
            >
                =
            </StyledButton>
            <StyledButton id="seven" onClick={inputNumber}>
                7
            </StyledButton>
            <StyledButton id="eight" onClick={inputNumber}>
                8
            </StyledButton>
            <StyledButton id="nine" onClick={inputNumber}>
                9
            </StyledButton>
            <StyledButton
                id="divide"
                operator="true"
                onClick={() => setData({ type: 'ADD_OPERATOR', payload: '÷' })}
            >
                ÷
            </StyledButton>
            <StyledButton id="four" onClick={inputNumber}>
                4
            </StyledButton>
            <StyledButton id="five" onClick={inputNumber}>
                5
            </StyledButton>
            <StyledButton id="six" onClick={inputNumber}>
                6
            </StyledButton>
            <StyledButton
                id="multiply"
                operator="true"
                onClick={() => setData({ type: 'ADD_OPERATOR', payload: '*' })}
            >
                <Clear fontSize="2rem" style={{ paddingTop: '0.5rem' }} />
            </StyledButton>
            <StyledButton id="one" onClick={inputNumber}>
                1
            </StyledButton>
            <StyledButton id="two" onClick={inputNumber}>
                2
            </StyledButton>
            <StyledButton id="three" onClick={inputNumber}>
                3
            </StyledButton>
            <StyledButton
                id="subtract"
                operator="true"
                onClick={() => setData({ type: 'ADD_OPERATOR', payload: '-' })}
            >
                <Remove fontSize="2rem" style={{ paddingTop: '0.5rem' }} />
            </StyledButton>
            <StyledButton id="zero" onClick={inputNumber}>
                0
            </StyledButton>
            <StyledButton id="decimal" onClick={inputNumber}>
                .
            </StyledButton>
            <StyledButton
                id="backspace"
                operator="true"
                onClick={() => setData({ type: 'REMOVE_DIGIT' })}
            >
                <Backspace fontSize="2rem" style={{ paddingTop: '0.5rem' }} />
            </StyledButton>
            <StyledButton
                id="add"
                operator="true"
                onClick={() => setData({ type: 'ADD_OPERATOR', payload: '+' })}
            >
                +
            </StyledButton>
        </>
    );
};
