import React, { Component } from 'react'
import { Row, Col, Image, FormGroup, FormControl, ControlLabel, Modal, Button} from 'react-bootstrap'
import PostList from './PostList'



class City extends Component{
    constructor(props, context) {
        super(props, context);
        this.state = {
            NewPostShow: false
    };
}
    handleNewPostShow=()=>{
    this.setState({ NewPostShow: true });
    }
    handleNewPostHide=()=> {
    this.setState({ NewPostShow: false });
}
    
    render(){
        return(
            <React.Fragment>
                <Row className="show-grid">
                    <Col xs={12} md={4}>
                        <h2 className='cityTitle'>{this.props.city.name}</h2>
                        <h4>{this.props.city.country}</h4>
                        
                <Button block bsStyle="primary" bsSize="large" onClick={this.handleNewPostShow}>
                New Post
                </Button>
               
                        
                    </Col>
                    <Col xs={12} md={8}>
                        <Image src={this.props.city.mainImg} responsive rounded />  
                    </Col>
                </Row>
                
                
                <PostList />
                
                <Modal
                    show={this.state.NewPostShow}
                    onHide={this.handleNewPostHide}
                    container={this}
                    aria-labelledby="contained-modal-title"
                    >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title">
                    Sign Up
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <form>
                        <FormGroup>
                            <ControlLabel>Title</ControlLabel>
                            <FormControl
                                type="text"
                                placeholder="Enter title" />
                            <FormControl.Feedback />
                        </FormGroup>
                        <FormGroup controlId="formControlsTextarea">
                            <ControlLabel>Post Body</ControlLabel>
                            <FormControl 
                                componentClass="textarea" 
                                placeholder="Post body" />
                        </FormGroup>
                    </form>
                    </Modal.Body>
                        <Modal.Footer>
                            <Button onClick={this.handleNewPostHide}>Close</Button>
                        </Modal.Footer>
                </Modal>
            </React.Fragment>
        )
    }
}


export default City