import React, { Component } from 'react'
import {Navbar,Nav, NavItem,Modal, Button } from 'react-bootstrap'
import Hero from './Hero'
import {Link } from 'react-router-dom'

class Header extends Component{
    constructor(props, context) {
        super(props, context);
    
        // this.handleHide = this.handleHide.bind(this);
    
        this.state = {
            signUpShow: false,
            signInShow: false
      };
      }
    
      handleSignUpHide=()=>{
          //ajax call
        this.setState({ signUpShow: false });
      }
      handleSignInHide=()=> {
        //ajax call
      this.setState({ signInShow: false });
    }
    render(){
        return(
            <React.Fragment >
                <Navbar>
                    <Navbar.Header>
                        <Navbar.Brand>
                        <Link to="/">Wayfarer - Classic</Link>
                        </Navbar.Brand>
                    </Navbar.Header>
                    <Nav pullRight>
                        <NavItem onClick={() => this.setState({ signUpShow: true })} eventKey={1} href="#">
                        Sign Up
                        </NavItem>
                        <NavItem  onClick={() => this.setState({ signInShow: true })} eventKey={2} href="#">
                        Log In
                        </NavItem>
                    </Nav>
                </Navbar>
                <Modal
                    show={this.state.signUpShow}
                    onHide={this.handleSignUpHide}
                    container={this}
                    aria-labelledby="contained-modal-title"
                    >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title">
                    Sign Up
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        Form here
                    </Modal.Body>
                        <Modal.Footer>
                            <Button onClick={this.handleSignUpHide}>Close</Button>
                        </Modal.Footer>
                </Modal>

                    <Modal
                    show={this.state.signInShow}
                    onHide={this.handleSignInHide}
                    container={this}
                    aria-labelledby="contained-modal-title"
                    >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title">
                        Log In
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        Form Here
                    </Modal.Body>
                        <Modal.Footer>
                            <Button onClick={this.handleSignUpHide}>Close</Button>
                        </Modal.Footer>
                    </Modal>
                
            </React.Fragment>
        )
    }
}


export default Header