import React from 'react';
import * as S from './Rodapestyles';
import perfil  from './image/perfil.png';
import banner  from './image/banner.png';
import './rodape.css';

function funcao1(){
    alert("Copyright © 2021. Desenvolvido por MH Dev.");
}

function RodapeSite(){
    
    return(
        
        <>
            <S.Footer>
            
            <div className="imgS">
            <img id="banner" class="transition" src={banner}/>
            </div>
            <div className="redesS">
            <a href="https://www.facebook.com/profile.php?id=100015719015582" target="_blank"><i class="fab fa-facebook fa-2x"></i></a>
            <a href="https://www.instagram.com/marcos.h.s.s/" target="_blank"><i class="fab fa-instagram fa-2x"></i></a>
            <a href="https://www.linkedin.com/in/marcos-henrique-9b08791bb/" target="_blank"><i class="fab fa-linkedin fa-2x"></i></a>
            </div>
            <div className="imgS">
            <img id="marcos" class="transition" src={perfil}/>
            </div>
            
            </S.Footer>
        </>
    );
}

export default RodapeSite;