import React, { Component } from 'react'
import { Row, Col, Image, FormGroup, FormControl, Form, ControlLabel, Modal, Button, Alert} from 'react-bootstrap'
import PostList from './PostList'
import axios from 'axios'


class City extends Component{
    constructor(props, context) {
        super(props, context);
        this.state = {
            NewPostShow: false,
            title: '',
            body: '',
            userid: localStorage.userid,
            serverMessage:'',
            messageDisplay: "none"

        };
   
    }
    fileInput = React.createRef();
    handleNewPostShow=()=>{
    this.setState({ NewPostShow: true });
    }
    handleNewPostHide=()=> {
    this.setState({ NewPostShow: false });
}
handleTitle=(e)=>{
    console.log(e.target.value);
    this.setState({title: e.target.value})
}
handleBody=(e)=>{
    this.setState({body: e.target.value})
}

handleSubmit=(e)=>{
    var ths = this
        var formData = new FormData();
            formData.append("title", this.state.title);
            formData.append("body", this.state.body);
            formData.append("city", this.props.city.name);
            formData.append("date",  Date.now());
            formData.append("userid", this.state.userid);
            formData.append("cityid", this.props.city.id);
            formData.append("token", localStorage.getItem('token'));
            formData.append("img", this.fileInput.current.files[0])
    axios.post('http://localhost:3001/post/newpost',formData )

    .then( response => {
        if(response.data.status==true){
            ths.setState({
                serverMessage:response.data.message,
                messageDisplay:"block"
            })
            setTimeout(function(){
                ths.props.handleNewPostHide()
            },2000 )
        }
        else{
            ths.setState({

                serverMessage:response.data.message,
                messageDisplay:"block"
            })
        }
       
    })  
    .catch(function(error){
        console.log(error);
    })
}
    
    render(){
        return(
            <React.Fragment>
                <Row className="show-grid">
                    <Col xs={12} md={4}>
                        <h2 className='cityTitle'>{this.props.city.name}</h2>
                        <h4>{this.props.city.country}</h4>
                        
                <Button  className="newPost" block  bsSize="large" onClick={this.handleNewPostShow}>
                New Post
                </Button >
                
                        
                    </Col>
                    <Col xs={12} md={8}>
                        <Image src={this.props.city.mainImg} responsive rounded />  
                    </Col>
                </Row>
                
                
                <PostList cityID={this.props.cityid} post={this.props.post} currentCity={this.props.city}/>
                
                <Modal
                    show={this.state.NewPostShow}
                    onHide={this.handleNewPostHide}
                    container={this}
                    aria-labelledby="contained-modal-title"
                    >
                    <Modal.Header closeButton>
                    
                        <Modal.Title id="contained-modal-title">
                    New Post
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <Alert style={{display:this.state.messageDisplay}} bsStyle="warning">
                        {this.state.serverMessage}
                    </Alert>
                    <Form onSubmit={this.handleSubmit}>
                        <FormGroup>
                            <ControlLabel>Title</ControlLabel>
                            <FormControl
                                type="text"
                                name="title"
                                required="required"
                                placeholder="Enter title"
                                onChange={this.handleTitle}  />
                            <FormControl.Feedback />
                        </FormGroup>
                        <FormGroup controlId="formControlsTextarea">
                            <ControlLabel>Post Body</ControlLabel>
                            <FormControl 
                                required="required"
                                componentClass="textarea" 
                                placeholder="Post body"
                                onChange={this.handleBody}  />
                        </FormGroup>
                        <input required="required" type="file" ref={this.fileInput}/>
                        <Modal.Footer>
                            <Button type="submit">Submit</Button>
                        </Modal.Footer>
                    </Form>
                    </Modal.Body>
                        
                </Modal>
            </React.Fragment>
        )
    }
}


export default City