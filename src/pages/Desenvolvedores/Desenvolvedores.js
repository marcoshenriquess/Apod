import React from 'react';
import TopoSite from '../../components/TopoSite/TopoSite';
import RodapeSite from '../../components/RodapeSite/RodapeSite';
import perfil from './image/banner.png'
import perfil2 from './image/Logo.png'
import './Desenvolvedores.css';
function Desenvolvedores(){
    return(
        <>
        <TopoSite/>
            <nav>
                
                <h2>Marcos Henrique</h2>         
                <section>
                    <div id="foto">
                    <img src={perfil} alt="MH Dev" />
                    <img id="MHC" src={perfil2} alt="MH Computer" />
                    </div>
                    <p>
                        Meu Nome é Marcos Henrique, sou Aluno do curso Tecnico em Informatica onde , tenho conhecimento basico em PHP, HTML, CSS, JAVA e REACT.<br/> Ja me formei em cursos de 
                        AutoCad e Operador de computador. Sou dono de duas "empresas" uma chamada de MH Dev, relacionada a criação
                        de sites e edição de imagens,e a outra chamada MH computer, onde realizo
                        manutenção e formatação de computadores.
                    </p>
                </section>  
                
            <h1>Copyright © 2021. Desenvolvido por MH Dev.</h1>  
            </nav>
            <RodapeSite/>
        </>
    );
}

export default Desenvolvedores;