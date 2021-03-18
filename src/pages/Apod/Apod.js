import React, {useEffect, useState} from 'react';
import TopoSite from '../../components/TopoSite/TopoSite';
import RodapeSite from '../../components/RodapeSite/RodapeSite';
import Modal from '../../components/Modal/Modal';
import '../../css/styleAll.css';
import '../../css/style1024.css';


function Apod(){
    //endereção + key
    const url = 'https://api.nasa.gov/planetary/apod?api_key=RHOyuNw5nEVVqJ7hfCKnIoxybpW3uIEjebTOajly'
    //propriedade que armazena a foto do dia
    const [photoData, setPhotoData] = useState(null);
    const [visibleModal, setVisibleModal] = useState(false);

    useEffect(async () => {  
        const res = await fetch(url);
        const data = await res.json();
        setPhotoData(data);
      }, []);
    
    if (!photoData) return(<div />);
    return(
        <>
            <TopoSite/>
            <main>
               <h2>{photoData.title}</h2>
                <h3>Data: {photoData.date}</h3>
                <section> 
               
                    {photoData.media_type === "image"?
                        <img onClick={()=>setVisibleModal(true)} src={photoData.url} alt={photoData.title} />
                        :
                        <iframe src="photoData.url"></iframe>
                    }
                    <p>{photoData.explanation}</p>
                </section>    
                
           
            </main>
            
            <RodapeSite> </RodapeSite>
            <Modal src={photoData.url} alt={photoData.title} visible={visibleModal} setVisible={setVisibleModal}>

            </Modal>
        </>
    );
}
export default Apod;