import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Grid, Row, Col, Image } from 'react-bootstrap'
import apiConfig from '../configs/apiKeys'

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
            console.log(response.data.results);
            this.setState({ 
                movies: response.data.results
            });
        })
    }

    render() {
        return (
          <div className='container'>
            <Grid>
                <Row className="show-grid">
                {
                 this.state.movies.map((movie, index) => {
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
        );
    }

}

export default Movies;