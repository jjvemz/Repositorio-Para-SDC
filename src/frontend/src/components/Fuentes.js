import React, { Component } from 'react';
import HeaderFuentes from './commons/HeaderFuentes';

export default class Fuentes extends Component {
  render() {
    return (
      <main>
        <HeaderFuentes />
        <section className='container fuentes'>
            <p>
              La información incorporada en SmartData Construcción ha sido recolectada, consolidada y procesada
              desde diferentes organismos colaboradores, tanto públicos como privados, quiénes generan datos
              válidos y utilizados para estadísticas nacionales e internacionales.
            </p>
            <p>
              Agradecemos a los diferentes organismos que facilitan datos para SmartData Construcción, en especial
              a aquellos con los que formalizamos acuerdos de trabajo colaborativo en torno a datos. Esperamos ir
              consolidando relaciones con cada uno de estos actores, agregar otros participantes y cooperar en la
              formación de un ecosistema de información fidedigna, clara y de utilidad.
            </p>

            <div className="row fuentes justify-content-around">

               <div className="col-sm-4">
                  <img className='fuentes__item' src={`${window.PUBLIC_URL}/assets/logos/cchc.png`} target="_blank" rel="noopener noreferrer" alt="cchc"/>
                  <h3 className='fuentes__title'><a href='https://www.cchc.cl'>Cámara Chilena de la Construcción, CChC. Gerencia de Estudios</a></h3>
                  <p className='fuentes__text'>Información referente a datos macroeconómicos, mercado inmobiliario, permisos de edificación, índices de precios.</p>
                 </div>

              <div className="col-sm-4">
                 <img className='fuentes__item' src={`${window.PUBLIC_URL}/assets/logos/Logo-IC.jpg`} target="_blank" rel="noopener noreferrer" alt="cchc"/>
                 <h3 className='fuentes__title'><a href='https://www.iconstruccion.cl/'> Instituto de la Construcción, IC.</a></h3>
                 <p className='fuentes__text'>Información sobre la Certificación de Edificio Sustentable (CES).</p>
              </div>

              <div className="col-sm-6 col-md-4">
                 <img className='fuentes__item' src={`${window.PUBLIC_URL}/assets/logos/minvu.svg`} target="_blank" rel="noopener noreferrer" alt="cchc"/>
                 <h3 className='fuentes__title'><a href='https://www.minvu.cl/'>Ministerio de Vivienda y Urbanismo, MINVU</a></h3>
                 <p className='fuentes__text'>Información relativa a la Calificación Energética de Vivienda (CEV).</p>
                 <p className='fuentes__text'>Información asociada al Observatorio Urbano.</p>
              </div>

              <div className="col-sm-6 col-md-4">
                 <img className='fuentes__item' src={`${window.PUBLIC_URL}/assets/logos/gbc.png`} target="_blank" rel="noopener noreferrer" alt="cchc"/>
                 <h3 className='fuentes__title'><a href='https://www.worldgbc.org'>Green Building Council y Chile GBC</a></h3>
                 <p className='fuentes__text'>Información relativa a la Certificación Sustentable LEED.</p>
              </div>

              <div className="col-sm-6 col-md-4">
                 <img className='fuentes__item' src={`${window.PUBLIC_URL}/assets/logos/planbim.png`} target="_blank" rel="noopener noreferrer" alt="cchc"/>
                 <h3 className='fuentes__title'><a href='https://planbim.cl'>Plan BIM</a></h3>
                 <p className='fuentes__text'>Información relacionada a la educación y capital humano capacitado en BIM en Chile.</p>
              </div>

              <div className="col-sm-6 col-md-4">
                 <img className='fuentes__item' src={`${window.PUBLIC_URL}/assets/logos/ine.png`} target="_blank" rel="noopener noreferrer" alt="cchc"/>
                 <h3 className='fuentes__title'><a href='https://www.ine.cl'>Instituto Nacional de Estadísticas, INE</a></h3>
                 <p className='fuentes__text'>Datos relacionados a empresas, trabajadores y edificación.</p>
              </div>

              <div className="col-sm-6 col-md-4">
                 <img className='fuentes__item' src={`${window.PUBLIC_URL}/assets/logos/sii.png`} target="_blank" rel="noopener noreferrer" alt="cchc"/>
                 <h3 className='fuentes__title'><a href='http://homer.sii.cl'>Servicio de Impuestos Internos, SII</a></h3>
                 <p className='fuentes__text'>Datos de empresas, trabajadores y ventas.</p>
              </div>

              <div className="col-sm-6 col-md-4">
                 <img className='fuentes__item' src={`${window.PUBLIC_URL}/assets/logos/minsocial.jpg`} target="_blank" rel="noopener noreferrer" alt="cchc"/>
                 <h3 className='fuentes__title'><a href='http://www.ministeriodesarrollosocial.gob.cl'>Ministerio de Desarrollo Social</a></h3>
                 <p className='fuentes__text'>Información sobre la Certificación de Edificio Sustentable (CES).</p>

              </div>

              <div className="col-sm-6 col-md-4">
                 <img className='fuentes__item' src={`${window.PUBLIC_URL}/assets/logos/clapes.png`} target="_blank" rel="noopener noreferrer" alt="cchc"/>
                 <h3 className='fuentes__title'><a href='https://www.clapesuc.cl'>Clapes UC y Universidad Católica de Chile</a></h3>
                 <p className='fuentes__text'>Indicadores de Productividad Total de Factores y Productividad Media Laboral.</p>

              </div>

              <div className="col-sm-6 col-md-4">
                 <img className='fuentes__item'  id='uchile' src={`${window.PUBLIC_URL}/assets/logos/uchile.png`} target="_blank" rel="noopener noreferrer" alt="cchc"/>
                 <h3 className='fuentes__title'><a href='https://www.uchile.cl/'>Universidad de Chile</a></h3>
                 <p className='fuentes__text'>Información sobre Encuesta de Ocupación y Desocupación.</p>
              </div>

              <div className="col-sm-6 col-md-4">
              </div>

              <div className="col-sm-6 col-md-4">
              </div>

              <div className="col-sm-6 col-md-4">
                 <figure className="fuentes__item"></figure>
                 <h3 className='fuentes__title'><a href='https://www.suseso.cl'>Superintendencia de Seguridad Social, SUSESO</a></h3>
                 <p className='fuentes__text'>Información sobre accidentabilidad, empresas y personas asociadas a organismos de seguridad.</p>
              </div>

              <div className="col-sm-6 col-md-4">
                 <figure className="fuentes__item"></figure>
                 <h3 className='fuentes__title'><a href='https://www.bcentral.cl'>Banco Central</a></h3>
                 <p className='fuentes__text'>Información referida a datos macroeconómicos y productividad.</p>

              </div>
               <div className="col-sm-6 col-md-4">
                  <figure className="fuentes__item"></figure>
                  <h3 className='fuentes__title'><a href='https://www.economia.gob.cl'>Subsecretaría de Economía</a></h3>
                  <p className='fuentes__text'>Información de la Encuesta de Innovación.</p>
               </div>
            </div>
            
            <h2>Colaboradores</h2>
            <p>Agradecemos a nuestros colaboradores, quienes permiten que SmartData Construcción tenga el respaldo técnico necesario, la conexión con el contexto nacional e internacional en torno a datos, y entrega la robustez a la Gobernanza de la iniciativa.
            También te invitamos a sumarte escribiéndonos a través de nuestra pestaña de contacto.</p>

            <div className="col-sm-6 col-md-4">
               <img className='fuentes__item'  src={`${window.PUBLIC_URL}/assets/logos/abriendoDatos.jpeg`} target="_blank" rel="noopener noreferrer" alt="cchc"/>
               <h3 className='fuentes__title'><a href='https://www.abriendodatos.org/'>Abriendo Datos</a></h3>
               <p className='fuentes__text'>Fundación Abriendo Datos genera iniciativas para reducir la desigualdad política y económica por medio del empoderamiento de la ciudadanía hacia una cultura de Datos Abiertos</p>
            </div>


            {/*
                <li>
                  <h3 className='fuentes__title'>Subsecretaría de Economía</h3>
                  <p className='textPage'>
                    <ul>
                      <li>Información de la Encuesta de Innovación.</li>
                    </ul>
                  </p>
                </li>
              </ul>
            </div>

            <div className='cards_fuentes_b col-6'>
              <ul className='fontsList'>
                <li>
                  <h3 className='fuentes__title'>Plan BIM</h3>
                  <p className='textPage'>
                    <ul>
                      <li>Información relacionada a la educación y capital humano capacitado en BIM en Chile.</li>
                    </ul>
                  </p>
                </li>
                <li>
                  <h3 className='fuentes__title'>Instituto Nacional de Estadísticas, INE</h3>
                  <p className='textPage'>
                    <ul>
                      <li>Datos relacionados a empresas, trabajadores y edificación.</li>
                    </ul>
                  </p>
                </li>
                <li>
                  <h3 className='fuentes__title'>Servicio de Impuestos Internos, SII</h3>
                  <p className='textPage'>
                    <ul>
                      <li>Datos de empresas, trabajadores y ventas.</li>
                    </ul>
                  </p>
                </li>
                <li>
                  <h3 className='fuentes__title'>Superintendencia de Seguridad Social, SUSESO</h3>
                  <p className='textPage'>
                    <ul>
                      <li>Información sobre accidentabilidad, empresas y personas asociadas a organismos de seguridad.</li>
                    </ul>
                  </p>
                </li>
                <li>
                  <h3 className='fuentes__title'>Ministerio de Desarrollo Social</h3>
                  <p className='textPage'>
                    <ul>
                      <li>Datos encuesta CASEN.</li>
                    </ul>
                  </p>
                </li>
                <li>
                  <h3 className='fuentes__title'>Clapes UC y Universidad Católica de Chile</h3>
                  <p className='textPage'>
                    <ul>
                      <li>Indicadores de Productividad Total de Factores y Productividad Media Laboral.</li>
                    </ul>
                  </p>
                </li>
                <li>
                  <h3 className='fuentes__title'>Universidad de Chile</h3>
                  <p className='textPage'>
                    <ul>
                      <li>Información sobre Encuesta de Ocupación y Desocupación.</li>
                    </ul>
                  </p>
                </li>
                <p>Otros Informantes</p>
                <li>
                  <h3 className='fuentes__title'>Banco Central</h3>
                  <p className='textPage'>
                    <ul>
                      <li>Información referida a datos macroeconómicos y productividad.</li>
                    </ul>
                  </p>
                </li>
              </ul>
            </div>
            */}

      </section>
  </main>
    );
  }
}
