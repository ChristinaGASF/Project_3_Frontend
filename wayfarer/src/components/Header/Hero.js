import React, { Component } from 'react'
import {Carousel, Col, Row, Grid } from 'react-bootstrap'

class Hero extends Component{
    render(){
        return(
           <React.Fragment>
            <Carousel>
            <Carousel.Item >
                <img width={900} height={500} alt="900x500" src="../public/images/image.jpg" />
                <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img width={900} height={500} alt="900x500" src="../public/images/image.jpg" />
                <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img width={900} height={500} alt="900x500" src="" />
                <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
            
           
          </React.Fragment> 
        )
    }
}


export default Hero


