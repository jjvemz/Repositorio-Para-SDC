import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

class Results extends Component {
    constructor(props) {
      super(props);
      this.state = {
        isEmpty: false
      };
      this.goTo = this.goTo.bind(this);
    }

    componentDidMount(){
      const { results } = this.props;
      const isEmpty = results.length ===0;
      if(isEmpty)
        this.goTo('/')
      else
        this.setState({isEmpty})

    }

    goTo(path) {
        this.props.history.push(path);
    }

    render() {
      const { results } = this.props;
      const { isEmpty } = this.state;

      return (
        <section className="container">
          <div className="py-3 my-5">
            <div className = "results-page">
              {!isEmpty && <h5>Lista de gráficos encontrados</h5>}
              {//Si esta vacio, retorna que "No existe su solicitud."
              isEmpty ?
                <Fragment>
                  <h5>El nombre de gráfico que buscas, no existe.</h5>
                  <p>Por favor intente nuevamente.</p>
                </Fragment>
                :
                results.map(item =>
                  <Card className="card my-3"
                    key = {item.id}
                    onClick={() => this.goTo(`details/${item.id}`)}
                  >
                    <CardActionArea>
                      <CardMedia
                        className ="card-media"
                        title ={item.name}
                      />
                      <CardContent>
                        <h5>{item.name}</h5>
                        <p>{item.graph}</p>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                )
              }
            </div>
          </div>
        </section>
      );
    }
}
//Mapea los resultados
const mapStateToProps = state => ({
    results: state.results,
});

export default withRouter(
    connect(mapStateToProps)(Results)
);
