import React, { Component } from 'react'
import {Col, Row, Grid, Panel } from 'react-bootstrap'
import Cities from '../components/Main/Cities'
import City from '../components/Main/City'

class Post extends Component{
    state={
        city: []
    }
    currentCity=(city)=>{
        this.setState({city: city})
        
    }

    render(){
        return(
            <React.Fragment>
                <Grid>
                    <Row className="show-grid">
                        <Col xs={12} md={4}>
                            
                            <Panel>
                                <Panel.Heading>
                                    <Panel.Title componentClass="h2">Cities</Panel.Title>
                                </Panel.Heading>
                                <Cities currentCity={this.currentCity}/>
                            </Panel>
                        </Col>
                        <Col xs={12} md={8}>
                                <Panel>
                                    <Panel.Body>
                                        <City city={this.state.city}/>
                                    </Panel.Body>
                                </Panel>
                        </Col>
                    </Row>
                </Grid>



            </React.Fragment>
        )
    }
}


export default Post
