import React from 'react';
import * as S from './styles';
import { Link } from 'react-router-dom';
import logocss  from './image/logo.png';

function TopoSite(){
    return(
        <>
        
        
            <S.Header>
                <img id="nasa" src={logocss}/>
                <div id="items">
                <S.P>Astronomia Foto Do Dia</S.P>
                    <div id="items1">
                        <S.H3><Link to="/">Home</Link></S.H3>
                        <S.H3 id="details"><Link to="/Apod">Foto do Dia</Link></S.H3>
                        <S.H3 id="details"><Link to="/Desenvolvedores">Desenvolvedores</Link></S.H3>
                    </div>
                </div>
                
            </S.Header>
        </>
    );
}

export default TopoSite;