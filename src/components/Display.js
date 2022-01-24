import React from 'react';
import { useData } from '../state';
import { StyledDiv, InnerDisplay } from './Display.styles';

export const Display = () => {
    const { data, calculate } = useData();
    return (
        <StyledDiv>
            <InnerDisplay
                id="display"
                style={{ overflow: 'scroll hidden', scrollbarWidth: 'none' }}
            >
                {data.expression === '' ? data.input : data.expression}
            </InnerDisplay>
            <InnerDisplay id="result">{calculate(data)}</InnerDisplay>
        </StyledDiv>
    );
};
