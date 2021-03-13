import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.header`
    background-color: rgb(25, 26, 83);
    background-image: url("./image/Nasa-Logo.png");
    height: 120px;
    padding: 8px;
    text-align: center;
    position:fixed;
    width:100%;
    top:0px;
    display: flex;
    justify-content: center;
    align-items: center;
        
`;

export const Span = styled.span `
    font-size: 20px;
    font-weight: bold;
`;

export const P = styled.p`
    flex: 2;
    font-size: 40px;
    font-family:tahoma;
    font-style: bold;
    box-shadow: 2px solid;
`;
export const H3 = styled.h3`
    flex: 1;
    & a{
        color: white;
        text-decoration: none;
        padding: 14px;
        font-size: 16px

    
    }`;
