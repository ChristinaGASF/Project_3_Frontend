import React, { Component } from 'react'
import {Col, Row, Grid, Panel } from 'react-bootstrap'
import Cities from '../components/Main/Cities'
import City from '../components/Main/City'

class Post extends Component{
    state={
        city: [],
        post: []
    }
    currentCity=(city)=>{
        this.setState({city: city})
        
    }
    populatePosts=(post)=>{
        this.setState({post:post})
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
                                <Cities populate={this.populatePosts} currentCity={this.currentCity}/>
                            </Panel>
                        </Col>
                        <Col xs={12} md={8}>
                                <Panel>
                                    <Panel.Body>
                                        <City post={this.state.post} city={this.state.city}/>
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
