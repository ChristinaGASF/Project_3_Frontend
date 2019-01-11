import React, { Component } from 'react'
import Hero from '../components/Header/Hero'
import {Col, Row, Grid } from 'react-bootstrap'

class Home extends Component{
    render(){
        return(
            <React.Fragment>
            <Hero />
            <Grid>
                <Row className="show-grid">
                <Col xs={6} md={4}>
                <p>'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil ad consectetur necessitatibus quisquam provident qui beatae quibusdam natus illo, officiis fuga deleniti, aperiam dolorum deserunt est, aspernatur ea ipsum modi?'</p>
                </Col>
                <Col xs={6} md={4}>
                <p>'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil ad consectetur necessitatibus quisquam provident qui beatae quibusdam natus illo, officiis fuga deleniti, aperiam dolorum deserunt est, aspernatur ea ipsum modi?'</p>
                </Col>
                <Col xs={6} md={4}>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil ad consectetur necessitatibus quisquam provident qui beatae quibusdam natus illo, officiis fuga deleniti, aperiam dolorum deserunt est, aspernatur ea ipsum modi?</p>
                </Col>
                </Row></Grid>
            </React.Fragment>
        )
    }
}


export default Home


