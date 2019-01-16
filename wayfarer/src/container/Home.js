import React, { Component } from 'react'
import Hero from '../components/Header/Hero'
import { Well, Col, Row, Grid } from 'react-bootstrap'
import { Card, CardHeader, CardBody, CardText,} from 'reactstrap'

class Home extends Component{
    render(){
        return(
        <React.Fragment>

        <Hero />
            
        <Well>
        <Grid>
        <Row className="show-grid">
        <Col md={1}></Col>
        <Col md={10}>
            <Card body className="text-center">
                <h2><b>Classic Traveler</b> is a travel site for users to share tips about their favorite museums, historical sites and  landmark iconic city spots. </h2>
                </Card>
            </Col>
        <Col md={1}></Col>
        </Row>
        </Grid>
        </Well>

        <Grid>
        <Row className="show-grid">
        
        <Col xs={6} md={4}>
            <Card>
                <Well>
                    <CardHeader body className="text-center" tag="h3">Museums</CardHeader>
                    <CardBody>
                        <CardText body className="text-center"><p>There are many types of museums, including art museums, natural history museums, science museums, war museums, and children's museums. </p></CardText>
                    </CardBody>
                </Well>
            </Card>
        </Col>
       
        
        <Col xs={6} md={4}>
            <Card>
                <Well>
                    <CardHeader body className="text-center" tag="h3">Historical Sites</CardHeader>
                    <CardBody>
                         <CardText body className="text-center"><p>Historic sites are official locations where pieces of political, military, cultural, or social history have been preserved due to their cultural heritage value.</p></CardText>
                    </CardBody>
                </Well>
            </Card>
        </Col>

        
        <Col xs={6} md={4}>
            <Card>
                <Well>
                    <CardHeader body className="text-center" tag="h3">Landmarks</CardHeader>
                    <CardBody>
                            <CardText body className="text-center"><p>A landmark is a recognizable natural or artificial feature used for navigation, a feature that stands out from its near environment and is often visible from long distances.</p></CardText>
                    </CardBody>
                </Well>
            </Card>
        </Col>


                </Row>
            </Grid>
        </React.Fragment>
        )
    }
}

export default Home


