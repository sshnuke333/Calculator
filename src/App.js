import React from 'react';
import { StyledCard, StyledBox } from './App.styles';
import { DataProvider } from './state';
import { Buttons } from './components/Buttons';
import { Display } from './components/Display';

export const App = () => {
    return (
        <StyledCard id="Calculator">
            <DataProvider>
                <Display id="display" />
                <StyledBox>
                    <Buttons></Buttons>
                </StyledBox>
            </DataProvider>
        </StyledCard>
    );
};
