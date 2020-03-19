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
      <main>
      <section>
        <div class="container p-3 my-3 border">
          <Fragment>
            <div className = "results-page">
            //Si esta vacio, retorna que "No existe su solicitud."
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
      </main>
      );
  }
export default Page;
