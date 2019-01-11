import React, { Component } from 'react'
import Hero from '../components/Header/Hero'
import {Col, Row, Grid } from 'react-bootstrap'

class Home extends Component{
    render(){
        return(
            <React.Fragment>
            <Hero />
            <div>
                <h4>Classic Traveler is a travel site for users to share tips about their favorite museums, historical sites and  landmark iconic city spots. </h4>
            </div>
            <Grid>
                <Row className="show-grid">
                <Col xs={6} md={4}>
                <h5>Museums</h5>
                <p>There are many types of museums, including art museums, natural history museums, science museums, war museums, and children's museums. </p>
                </Col>
                <Col xs={6} md={4}>
                <h5>Historical Sites</h5>
                <p>Historic sites are official locations where pieces of political, military, cultural, or social history have been preserved due to their cultural heritage value.</p>
                </Col>
                <Col xs={6} md={4}>
                <h5>Landmarks</h5>
                <p>A landmark is a recognizable natural or artificial feature used for navigation, a feature that stands out from its near environment and is often visible from long distances.</p>
                </Col>
                </Row></Grid>
            </React.Fragment>
        )
    }
}


export default Home


