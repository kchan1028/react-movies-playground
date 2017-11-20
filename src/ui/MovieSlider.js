import React, { Component } from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap'
import Slider from 'react-slick'
import '../styles/slick.css'

class MovieSlider extends Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 3,
            arrows: true
        };
        return (
            <Slider {...settings}>
            {
                this.props.movies.map( (movie, index) => {
                    return (            
                        <div>
                            <Image src={'https://image.tmdb.org/t/p/w500/' + movie.poster_path} responsive />
                        </div>
                        )
                    })
            }
            </Slider>
        );
    }

}

export default MovieSlider;
