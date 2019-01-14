import React, { Component } from 'react'
import {Modal, Button } from 'react-bootstrap'
// render from db Post Title, Post Author, Body and Image
// use Show onClick of Post in Post.js and Profile.js
 
class Show extends Component{
    constructor(props, context) {
        super(props, context);
    
        // this.handleHide = this.handleHide.bind(this);
    
        this.state = {
            postShow: false,
            signInShow: false
      };
      }
    
      handlePostHide=()=>{
          //ajax call
        this.setState({ postShow: false });
      }
      handlePostHide=()=> {
        //ajax call
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

                        <h3> {this.props.city.name}City Title </h3>
                        <h3> {this.props.city.post.author}Post Author </h3>
                             
                        </Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <mg width={600} height={600} src={this.props.city.mainImg}  />
                        <p>Body of Post{this.props.post.body}</p>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button onClick={this.handlePostHide}>Close</Button>
                    </Modal.Footer>
                </Modal>

            </React.Fragment>
        )
    }
}

export default Show