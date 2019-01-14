import React, { Component } from 'react'
import {Modal, Button } from 'react-bootstrap'
// render from db Post Title, Post Author, Body and Image
// use Show onClick of Post in Post.js and Profile.js
 
class Show extends Component{
    constructor(props, context) {
        super(props, context);
    
        this.state = {
            postShow: false,
            signInShow: false
      };
    }
    
    handlePostEdit=()=>{
    //
    this.setState({  });
    }
    handlePostDelete=()=> {
    //
    this.setState({  });
    }
    handlePostHide=()=> {
    //
    this.setState({ postShow: false });
  }
    render(){
        return(
            <React.Fragment >
                
                <Modal
                    show={this.state.postShow}
                    onHide={this.handlePostHide}
                    container={this}
                    aria-labelledby="contained-modal-title">

                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title">

                        <h3> {this.users.posts.title} Title </h3>
                        <h3> {this.users.posts.city} City </h3>
                        <h3> {this.users.posts.country} City </h3>
                        <h3> {this.props.city.post.author} Author </h3>
                             
                        </Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <img width={600} height={600} src="{this.users.city.mainImg}" />
                        <p>Post Body{this.users.posts.body}</p>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button onClick={this.handlePostEdit}>Edit</Button>
                        <Button onClick={this.handlePostDelte}>Delete</Button>
                        <Button onClick={this.handlePostHide}>Close</Button>
                    </Modal.Footer>
                </Modal>

            </React.Fragment>
        )
    }
}

export default Show