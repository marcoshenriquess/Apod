import React from 'react';
import styled from 'styled-components';

const ModalBackground = styled.div`
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 9999;
    background-color: rgba(0, 0, 0, 0.8);
`; 
const ModalArea = styled.div`
    width: 800px;
    height: 600px;
    position: relative;
    margin: 2% auto;
    padding: 15px 20px;
    border-radius: 4px;
`;

const BtFechar = styled.a`
    position: absolute;
    width: 30px;
    background-color: rgb(25, 25, 25);
    right: -15px;
    top: -20px;
    color: red;
    cursor: pointer;
    text-align: center;
    line-height: 30px;
    border-radius: 50%;
    font-size: 20px;
    margin-top: 5px;
`;

const ImageArea = styled.div`
    height: inherit;
`;




function Modal(props){
    return(
        <>
            {
            props.visible &&
            <ModalBackground>
                <ModalArea>
                    <BtFechar onClick={()=>props.setVisible(false)}>X</BtFechar>
                    <ImageArea style= {{backgroundImage: `url(${props.src})`, backgroundSize: 'cover', backgroundPosition: 'ceneter'}}></ImageArea>
                </ModalArea>
            </ModalBackground>
            }
        </>
    );
}

export default Modal;