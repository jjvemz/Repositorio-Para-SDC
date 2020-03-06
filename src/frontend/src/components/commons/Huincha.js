import React, { Component } from 'react';
const $ = window.jQuery
export default class Huincha extends Component {

   componentDidMount(){
      $(document).ready(function() {
        // Modificar el intervalo por slides del carousel Huincha
          $('#huincha').carousel({
             interval: 4000,
             pause: false,
             wrap: true
           })     
     });
     
   }

  render() {
    return (
      <section className='socios'>
         <div id="huincha" className="carousel slide container" data-ride="carousel">
            <div className="carousel-inner">
               <div className="carousel-item active">
                  <div className="d-flex justify-content-around align-items-center">
                     <a href="https://www.cchc.cl"><img className='socios__item' src={`${window.PUBLIC_URL}/assets/logos/cchc.png`} target="_blank" rel="noopener noreferrer" alt="cchc"/></a>
                     <a href="https://www.chilegbc.cl"><img className='socios__item--md' src={`${window.PUBLIC_URL}/assets/logos/chilegbc.png`} target="_blank" rel="noopener noreferrer" alt="chilegbc"/></a>
                     <a href="https://www.ine.cl"><img className='socios__item' src={`${window.PUBLIC_URL}/assets/logos/ine.png`} target="_blank" rel="noopener noreferrer" alt="ine"/></a>
                     <a href="http://homer.sii.cl"><img className='socios__item' src={`${window.PUBLIC_URL}/assets/logos/sii.png`} target="_blank" rel="noopener noreferrer" alt="sii"/></a>
                   </div>
               </div>
               <div className="carousel-item">
                  <div className="d-flex justify-content-around align-items-center">
                     <a href="https://www.economia.gob.cl"><img className='socios__item--md' src={`${window.PUBLIC_URL}/assets/logos/minecom.png`} target="_blank" rel="noopener noreferrer" alt="minecom"/></a>
                     <a href="http://www.ministeriodesarrollosocial.gob.cl"><img className='socios__item--md' src={`${window.PUBLIC_URL}/assets/logos/minsocial.jpg`} target="_blank" rel="noopener noreferrer" alt="minsocial"/></a>
                     <a href="http://www.clapesuc.cl"><img className='socios__item--sm' src={`${window.PUBLIC_URL}/assets/logos/clapes.png`} target="_blank" rel="noopener noreferrer" alt="clapes"/></a>
                     <a href="https://www.uc.cl"><img className='socios__item--sm' src={`${window.PUBLIC_URL}/assets/logos/puc.png`} target="_blank" rel="noopener noreferrer" alt="puc"/></a>
                     <a href="http://www.uchile.cl"><img className='socios__item--sm' src={`${window.PUBLIC_URL}/assets/logos/uchile.png`} target="_blank" rel="noopener noreferrer" alt="uchile"/></a>
                  </div>
               </div>
               <div className="carousel-item">
                  <div className="d-flex justify-content-around align-items-center">
                     <a href="https://digital.gob.cl"><img className='socios__item' src={`${window.PUBLIC_URL}/assets/logos/gobdigital.png`} target="_blank" rel="noopener noreferrer" alt="gobdigital"/></a>
                     <a href="https://planbim.cl"><img className='socios__item--md' src={`${window.PUBLIC_URL}/assets/logos/planbim.png`} target="_blank" rel="noopener noreferrer" alt="planbim"/></a>
                     <a href="https://new.usgbc.org"><img className='socios__item--md' src={`${window.PUBLIC_URL}/assets/logos/usgbc.jpg`} target="_blank" rel="noopener noreferrer" alt="usgbc"/></a>
                     <a href="https://www.corfo.cl"><img className='socios__item--sm' src={`${window.PUBLIC_URL}/assets/logos/corfo.png`} target="_blank" rel="noopener noreferrer" alt="corfo"/></a>
                     <a href="http://construye2025.cl"><img className='socios__item--sm' src={`${window.PUBLIC_URL}/assets/logos/construye.png`} target="_blank" rel="noopener noreferrer" alt="construye"/></a>
                  </div>
               </div>
             </div>
         </div>
      </section>
    );
  }
}
