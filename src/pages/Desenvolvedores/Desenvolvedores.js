import React from 'react';
import TopoSite from '../../components/TopoSite/TopoSite';
import RodapeSite from '../../components/RodapeSite/RodapeSite';
import perfil from './image/perfil.png'
import './Desenvolvedores.css';
function Desenvolvedores(){
    return(
        <>
        <TopoSite/>
            <nav>
                
                <h2>Marcos Henrique</h2>         
                <section>
                    <div id="foto">
                    <img src={perfil} alt="Marcos" />
                    </div>
                    <p>
                        Meu Nome é Marcos Henrique, sou Aluno do curso Tecnico em Informatica, onde tenho conhecimento basico em PHP, HTML, CSS, JAVA e REACT.<br/> Ja me formei em cursos de 
                        AutoCad e Operador de computador. Sou o proprietário de duas "empresas" uma chamada de MH Dev, relacionada a criação
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
