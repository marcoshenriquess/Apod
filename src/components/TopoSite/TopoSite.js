import React from 'react';
import * as S from './styles';
import { Link } from 'react-router-dom';
import logocss  from './image/logo.png';
import '../../css/style1024.css';

function TopoSite(){
    return(
        <>
        
        
            <S.Header>
                
                <img id="nasa" src={logocss}/>
                <div id="items">
                <S.P>Astronomia Foto Do Dia</S.P>
                    <div id="items1">
                        <S.Span>|</S.Span>
                        <S.H3 id="details"><Link to="/">Foto do Dia</Link></S.H3>
                        <S.Span>|</S.Span>
                        <S.H3 id="details"><Link to="/Desenvolvedores">Desenvolvedores</Link></S.H3>
                        <S.Span>|</S.Span>
                    </div>
                </div>
                
            </S.Header>
        </>
    );
}

export default TopoSite;