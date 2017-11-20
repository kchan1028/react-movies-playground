import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Grid, Row, Col, Image } from 'react-bootstrap'
import apiConfig from '../configs/apiKeys'
import Slider from 'react-slick'
import MovieSlider from '../ui/MovieSlider'

class Movies extends Component {
    constructor(props) {
       super(props);
    
        this.state = {
          movies: [],
        };    

    }

    componentDidMount(){
        const path = apiConfig.tmdb_url + '/movie/top_rated?api_key=' + apiConfig.tmdb_api_key
        axios
        .get(path)
        .then( response => {
            this.setState({ 
                movies: response.data.results
            });
        })
    }
    
    render() {
        return (
            this.props.format == 'card' ? <MakeCard movies={this.state.movies} /> : <MovieSlider movies={this.state.movies} />
        )
    }

}

const MakeCard = ({movies}) => {
    return (
        <div className='container'>
        <Grid>
            <Row className="show-grid">
            {
             movies.map( (movie, index) => {
                return (
                  <Col key={index} sm={6} md={4} lg={3}>
                    <Image src={'https://image.tmdb.org/t/p/w500/' + movie.poster_path} responsive />
                    <h6>{movie.title}</h6>
                  </Col>
                )
             })
            }
            </Row>
        </Grid>
        </div>            
    )
}

export default Movies;