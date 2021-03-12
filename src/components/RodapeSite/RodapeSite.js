import React from 'react';
import * as S from './Rodapestyles';
import danilo  from './image/perfil.png';
import banner  from './image/banner.png';


function RodapeSite(){
    return(
        <>
            <S.Footer>
            <img id="marcos" src={danilo}/>
            </S.Footer>
        </>
    );
}

export default RodapeSite;