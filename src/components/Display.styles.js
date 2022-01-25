import styled from 'styled-components';

export const StyledDiv = styled.div`
    width: 22.5rem;
    height: 12rem;
    background-color: #D3E4CD;
    display: grid;
    grid-template-rows: repeat(2, 2fr);
    align-items: center;

    @media(min-width: 768px) {
        width: 32.5rem;
    }
`;

export const InnerDisplay = styled.p`
    text-align: end;
    font-size: 2.5rem;
    color: #090909;
    margin: 0;
`;
