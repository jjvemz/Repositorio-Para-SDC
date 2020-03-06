import React, {
   Component
} from 'react';

export default class Footer extends Component {
   render() {
      return (
      <footer className = "footer font-small pt-4">
         <div className = "container text-center text-md-left">
            <div className = "row" >
               < div className = "footer-about col-md-3 mt-md-0 mt-3 pr-4" >
               <h5 className = "footer__title" > Más sobre nosotros
               < /h5>
               <img src = {
                  `${window.PUBLIC_URL}/assets/img/ctec_logo_small.png`
               }
               id = "ctec_logo_small" alt = "" / >
               <p className="pt-2"> Somos el Centro Tecnológico para la Innovación en la Construcción, y nuestro objetivo es contribuir al proceso de transformación de la industria de la construcción nacional.
               < /p>
            </div>
         <hr className = "clearfix w-100 d-md-none pb-3" / >
         <div className = "col-md-3 mb-md-0 mb-3" >
            <h5 className = "footer__title" > Nuestras Redes Sociales < /h5>
            <ul className = "footer-rrss" >
               <li > < a href = "https://www.facebook.com/CTeCInnovacion/" > < img className = 'footer-rrss__item'
               src = {
                  `${window.PUBLIC_URL}/assets/img/facebook.png`
               } alt = "" / > < /a></li >
               <li > < a href = "https://twitter.com/CTecInnovacion" > < img className = 'footer-rrss__item'
               src = {
                  `${window.PUBLIC_URL}/assets/img/twitter.png`
               }
               alt = "" / > < /a></li >
               <li > < a href = "https://www.linkedin.com/company/ctecnologico/" > < img className = 'footer-rrss__item'
                  src = {
                     `${window.PUBLIC_URL}/assets/img/linkedin.png`
                  } alt = "" / > < /a>
               </li >
               <li > < a href = "https://www.youtube.com/channel/UCpaoF-wHcaCkNlSyIxoLaIw" > < img className = 'footer-rrss__item'
               src = {
                  `${window.PUBLIC_URL}/assets/img/youtube.png`
               } alt = "" / > < /a></li >
            </ul>
         </div>
         <div className = "footer-contacto col-md-3 mb-md-0 mb-3" >
            <h5 className = "footer__title" > Información de Contacto < /h5>
            <ul>
            <li > < a id = "correo" className ="footer-contacto__email"
            href = "mailto:contacto@ctecinnovacion.cl" > < i className = "far fa-envelope" > < /i> contacto@ctecinnovacion.cl</a >
            < /li>
            <li > < p id = "telefono" > < i className = "fas fa-phone" > < /i> +56 2 2978 0749</p >
            </li>
            </ul>
         </div>
      </div>
         </div>
         <div className = "footer-cr" >
            <div className="container">
               <div className="row align-items-end">
                  <div className="col-md-6">
                     <p > © 2019 < a id = "ctecLinkFooter"
                        href = "https://ctecinnovacion.cl" > CTeC< /a>. Todos los Derechos Reservados
                     </p >
                  </div>
                  <div className="col-md-6 text-center text-sm-right">
                     <ul className = "footer-cr__logos"
                     id = 'ltoR' > {
                           /*
                              <li><a href="http://construye2025.cl"><img src={'${window.PUBLIC_URL}/assets/img/construye.png'} className="lfooter" id='a' alt=""/></a></li>
                             <li><a href="https://www.corfo.cl/sites/cpp/home"><img src={'${window.PUBLIC_URL}/assets/img/corfo.png'} className="lfooter" id='b' alt=""/></a></li>
                             <li><a href="http://construye2025.cl"><img src='assets/img/construye.png' className="lfooter" id='a' alt=""/></a></li>
                             <li><a href="https://www.corfo.cl/sites/cpp/home"><img src='assets/img/corfo.png' className="lfooter" id='b' alt=""/></a></li>
                           */
                        }
                        <li > < a href = "http://construye2025.cl" >
                           < img src = {
                           `${window.PUBLIC_URL}/assets/img/construye.png`
                        } className = "footer-cr__logos-item" id = 'a' alt = "" / > < /a>
                        </li >
                        <li > < a href = "https://www.corfo.cl/sites/cpp/home" > < img src = {
                           `${window.PUBLIC_URL}/assets/img/corfo.png`
                        } className = "footer-cr__logos-item" id = 'b' alt = "" / > < /a>
                        </li >
                     </ul>
                  </div>
               </div>
            </div>
         </div>

         <a href="link" className="btn-backTop"><i className="fas fa-chevron-up"></i></a>
      </footer>
      );
   }
}
