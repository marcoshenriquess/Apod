import styled from 'styled-components';


export const Footer = styled.footer`
    background-color: rgb(25, 26, 83);
    width: 100%;
    height: 60px;
    position: fixed;
    bottom: 0px;
    display: flex;
    flex-direction: row;
    align-items: center;
    text-align: center;
    margin:50px 0px 0px 0px;
    padding:5px;
    & img{ 
        max-height:90%;
        max-width:90%;
        
    }
    & .redesS{
        display: flex;
        justify-content:center;
        flex: 1;
        & a{
            margin: 20px;
            opacity: 0.7;
            filter: grayscale(100%);
            &:hover{
            opacity: 1;
            filter: grayscale(0%);
            }
        }
    }
    & .imgS{
       flex: 1;
       display: flex;
        justify-content: center ;
        height: 40px;
        & img{ 
            max-height:90%;
            max-width:90%;
            
        }
    }
`;

export const H2 = styled.h2`
    color black;
    flex: 1;
    height: 100px;
    `;
