import React, { Component } from 'react'
import {Col, Row, Grid, Panel } from 'react-bootstrap'
import UserProfile from '../components/Main/UserProfile'
import UserPostList from '../components/Main/UserPostList'

class Profile extends Component{
    render(){
        return(

            <React.Fragment>
                <Grid>
                    <Row className="show-grid">
                        <Col xs={12} md={4}>
                            <Panel>
                                <Panel.Heading>
                                    <Panel.Title componentClass="h2">Profile</Panel.Title>
  
                                   { 
                                    <UserProfile />
                                   }
                                   
                                </Panel.Heading>
                                  
                            </Panel>

                        </Col>
                        <Col xs={12} md={8}>
                            <Panel>
                                <Panel.Body>
                                    <Panel.Title componentClass="h2">My Post Contributions</Panel.Title>
                                        <UserPostList />
                                    </Panel.Body>
                                </Panel>
                        </Col>
                    </Row>
                </Grid>



            </React.Fragment>
        )
    }
}



export default Profile