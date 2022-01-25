import { Card, Box } from '@mui/material';
import styled from 'styled-components';

export const StyledCard = styled(Card)`
    background-color: #1e1e1e;
    color: white;
    height: 45rem;
    display: flex;
    flex-flow: column;
`;

export const StyledBox = styled(Box)`
    display: grid;
    width: 22.5rem;
    height: 30rem;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(5, 1fr);
    align-items: center;
    justify-items: center;

    @media (min-width: 768px) {
        width: 32.5rem;
    }
`;
