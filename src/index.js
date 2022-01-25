import React from 'react';
import { render } from 'react-dom';
import { GlobalStyle } from './index.styles.js';
import { App } from './App';

render(
    <>
        <GlobalStyle />
        <App />
    </>,
    document.getElementById('root')
);
