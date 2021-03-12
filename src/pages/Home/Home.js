import React from 'react';
import RodapeSite from '../../components/RodapeSite/RodapeSite';
import TopoSite from '../../components/TopoSite/TopoSite';
import './Home.css';

function Home(){
    return(
        <>
            <TopoSite></TopoSite>
            <main>
                <h1>NASA's Astronomy Picture of the Day</h1>
                <h2 id="title"></h2>
                <p id="date"></p>
                <section class="picture-explanation-container">
                    <img src="" id="picture" alt="astronomy image by NASA" />
                    <iframe id="player"  src=""></iframe>
                    <p id="explanation"></p>
                </section>    
            </main>
            <RodapeSite></RodapeSite>
        </>
    );
}

export default Home;