import styled from 'styled-components';

export const StyledButton = styled.button`
    width: ${(props) => (props.large ? '10rem' : '5rem')};
    height: ${(props) => (props.large ? '4rem' : '5rem')};
    border-radius: ${(props) => (props.large ? '5%' : '50%')};
    border: none;
    margin: 0.25rem;
    background-color: #26e6a5;
    color: #090909;
    font-size: 2rem;
    padding: 0;

    &:hover {
        cursor: pointer;
        background-color: #51e4b2;
    }

    &:active {
        background-color: aquamarine;
        border-radius: 10%;
        transition: border-radius 0.5s cubic-bezier(1, 0, 1, 0.37);
    }
`;
