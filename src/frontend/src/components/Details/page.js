import React, { Fragment } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';
import Switch, { Case, Default } from 'react-switch-case';

import KpiGraph from '../graphs/KpiGraph';
import MapGraph from '../graphs/MapGraph';
import MultilineGraph from '../graphs/MultilineGraph';
import RegionStackedGraph from '../graphs/RegionStackedGraph';
import RegionTreemapGraph from '../graphs/RegionTreemapGraph';
import StackedGraph from '../graphs/StackedGraph';
import TreemapGraph from '../graphs/TreemapGraph';
import TimeSerie from '../graphs/TimeSerie';
import TotalStackedGraph from '../graphs/TotalStackedGraph';
//import style from './style.css';
const buttonStyle= {
  backgroundColor: '#199c48',
	boxShadow:null ,
}

function Page(props){
  const {
        goTo,
        currentItem,
    } = props;

    console.log("El currentItem.graph es:",currentItem.graph);
    return(
      <Fragment>
          <section>
            <div className = "container">
              <div className ="details-page">
                <Paper
                  elevation={1}
                  className="paper-container"
                />
                //en caso que haya el Item actual exista desplegará el gráfico dependiendo del atributo file y graph, este ultimo dirá que gráfico se mostrará
                {currentItem ?
                  <Fragment>
                    <Typography gutterBottom variant= "h5" component = "h3">
                      Nombre:{currentItem.file}
                    </Typography>
                    //Solo muestra el primer gráfico el tipo de grafico que agarro. Si cambia de tipo de gráfico mostrara solo ese sin actualizar
                    <div>
                      <Switch condition={currentItem.graph}>
                          <Case value="KpiGraph">
                            <KpiGraph kpi_name = {currentItem.file} ></KpiGraph>
                          </Case>
                          <Case value="MapGraph">
                              <MapGraph kpi_name = {currentItem.file} ></MapGraph>
                          </Case>
                          <Case value="TimeSerie">
                              <TimeSerie kpi_name = {currentItem.file} ></TimeSerie>
                          </Case>
                          <Case value="MultilineGraph">
                              <MultilineGraph kpi_name = {currentItem.file} isAllYears={true}></MultilineGraph>
                          </Case>
                          <Case value="RegionStackedGraph">
                              <RegionStackedGraph kpi_name = {currentItem.file} isAllYears={true}></RegionStackedGraph>
                          </Case>
                          <Case value="RegionTreemapGraph">
                              <RegionTreemapGraph kpi_name = {currentItem.file} isAllYears={true}></RegionTreemapGraph>
                          </Case>
                          <Case value="StackedGraph">
                              <StackedGraph kpi_name = {currentItem.file} isAllYears={true}></StackedGraph>
                          </Case>
                          <Case value="TotalStackedGraph">
                              <TotalStackedGraph kpi_name = {currentItem.file} ></TotalStackedGraph>
                          </Case>
                          <Case value="TreemapGraph">
                              <TreemapGraph kpi_name = {currentItem.file} ></TreemapGraph>
                          </Case>
                          <Default>
                              <p>Intentelo nuevamente.</p>
                          </Default>
                      </Switch>
                    </div>

                    <Typography gutterBottom variant= "p" component = "content">
                      Tipo de grafico: {currentItem.graph}.
                    </Typography>
                  </Fragment>
                  :
                  <CircularProgress className="item-loader" />
                }
              <Button
                color="primary"
                class="back-button"
                onClick={() => goTo('/results')}
                >
                Regresar
              </Button>
            </div>
          </div>
        </section>
      </Fragment>
      );
}
export default Page;
