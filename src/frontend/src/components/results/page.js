import React, { Fragment } from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

function Page(props){
  const {
        results,
        goTo,
    } = props;

  const isEmpty = results.length ===0;

    return(
      <section>
        <div class="container p-3 my-3 border">
          <Fragment>
            <div className = "results-page">
            {isEmpty ?
              <Typography variant = "h5" component ="h3" className ="page-message">
                No existe su solicitud.
              </Typography>
              :
              results.map(item =>
                <div
                key = {item.id}
                className = "card-container">
                    <Card className="card"
                    onClick={() => goTo(`details/${item.id}`)}
                    >
                      <CardActionArea>
                        <CardMedia
                          className ="card-media"
                          title ={item.name}
                        />
                      <CardContent>
                        <Typography gutterBottom variant ="h5" component="h2">
                          {item.name}
                        </Typography>
                        <Typography component ="p">
                          {item.graph}
                        </Typography>
                      </CardContent>
                      </CardActionArea>
                    </Card>
                </div>
              )
            }
            </div>
          </Fragment>
        </div>
      </section>
      );
  }
export default Page;
/*const {match} = this.props;



  render(){
    if (graph === KpiGraph)
    return(
      <div className="card-deck mb-3">
        <KpiGraph kpi_name={Params_Name}></KpiGraph>
      </div>
    );
    if (graph === MapGraph)
    return(
      <div className="card-deck mb-3">
        <MapGraph kpi_name={Params_Name}></MapGraph>
      </div>
    );
    if (graph === MultilineGraph)
    return(
      <div className="card-deck mb-3">
        <MultilineGraph kpi_name={Params_Name}></MultilineGraph>
      </div>
    );
    if (graph === RegionStackedGraph)
    return(
      <div className="card-deck mb-3">
        <RegionStackedGraph kpi_name={Params_Name}></RegionStackedGraph>
      </div>
    );
    if (graph === RegionTreemapGraph)
    return(
      <div className="card-deck mb-3">
        <RegionTreemapGraph kpi_name={Params_Name}></RegionTreemapGraph>
       </div>
    );
    if (graph === StackedGraph)
    return(
      <div className="card-deck mb-3">
        <StackedGraph kpi_name={Params_Name}></StackedGraph>
       </div>
    );
    if (graph === TotalStackedGraph)
    return(
    <div className="card-deck mb-3">
       <TotalStackedGraph kpi_name={Params_Name}></TotalStackedGraph>
    </div>
    );
    if (graph === TimeSerie)
    return(
      <div className="card-deck mb-3">
        <TimeSerie kpi_name={Params_Name}></TimeSerie>
       </div>
    );
    if (graph === TreemapGraph)
    return(
      <div className="card-deck mb-3">
        <TreemapGraph kpi_name={Params_Name}></TreemapGraph>
        </div>
    );
  */
