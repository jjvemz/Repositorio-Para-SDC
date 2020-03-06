import React, { Component } from 'react';
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  WhatsappIcon
} from 'react-share';

export default class Sharing extends Component {
  render() {
    const _preUrl = "https://smartdata-final.herokuapp.com/"
    const _title = 'SmartData Construcción, es una plataforma tecnológica de acceso libre y gratuito, que busca consolidar datos públicos, actualizados, levantados y procesados desde fuentes, que permitan generar, visualizar de indicadores relevantes para la industria de la construcción en Chile.'
    return (
      <div className='kpi-rrss d-flex'>
        <div className='kpi-rrss__item'>
          <FacebookShareButton
            url={_preUrl + this.props.shareUrl}
            quote={_title}
            className="share-button"
            id="facebook">
         <FacebookIcon
            size={32}
            round />
         </FacebookShareButton>
        </div>

        <div className='kpi-rrss__item'>
          <TwitterShareButton
            url={_preUrl + this.props.shareUrl}
            title={_title.slice(0,101)}
            className="share-button">
            <TwitterIcon
              size={32}
              round />
          </TwitterShareButton>
        </div>

        <div className='kpi-rrss__item'>
          <WhatsappShareButton
            url={_preUrl + this.props.shareUrl}
            title={_title}
            separator=":: "
            className="share-button">
            <WhatsappIcon size={32} round />
          </WhatsappShareButton>
        </div>

        <div className='kpi-rrss__item'>
          <LinkedinShareButton
            url={_preUrl + this.props.shareUrl}
            windowWidth={750}
            windowHeight={600}
            className="share-button">
            <LinkedinIcon
              size={32}
              round />
          </LinkedinShareButton>
        </div>

      </div>
    );
  }
}
