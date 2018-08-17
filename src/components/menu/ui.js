import styled from 'styled-components';
import { space, fontSize, color, width, borders, background } from 'styled-system';

export const MenuWrapper = styled.div`
    background-color: #282828;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 100vh;
    width: 20%;
`
export const ItemWrapper = styled.div`
    ${borders}
    ${space}
    ${width}
    ${background}
    
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 30%;
    justify-content: center;
    background-size: contain;

`
export const Text = styled.p`
    ${space}
    ${width}
    ${color}

    color: white;
    cursor: pointer;
    text-transform: uppercase;
    font-weight: bold;
    margin: 8px 0;
`