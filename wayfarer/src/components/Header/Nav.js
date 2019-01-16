import React, { Component } from 'react'
import {Navbar, Nav, NavItem, Modal, Button, Glyphicon } from 'react-bootstrap'
import {Link } from 'react-router-dom'
import SignUpForm from './SignUpForm'
import LoginForm from './LoginForm';

var LoginFunc=(props)=>{
    if (props.isLoggedIn === false){
   
    return(
        <React.Fragment >
            <NavItem onClick={() => props.signup()} eventKey={1} href="#"> Sign Up </NavItem>
            <NavItem  onClick={() => props.login()} eventKey={2} href="#"> Log In </NavItem>
        </React.Fragment>
    )
}
else {
    return(
        <React.Fragment>
            <NavItem eventKey={1} href="#">
                <Link to="/profile" >Profile</Link> 
            </NavItem>
            <NavItem onClick={()=> props.logOut()} eventKey={2} href="#">
                Log Out
            </NavItem>
        </React.Fragment>
        )
    }
}
class Header extends Component{
    constructor(props, context) {
        super(props, context);
            this.state = {
                signUpShow: false,
                signInShow: false,
            };
    }
    showModal=()=>{
        this.setState({ signUpShow: true })
    }

    showLogin=()=>{
        this.setState({signInShow:true})
    }

    handleSignUpHide=()=>{    
    this.setState({ signUpShow: false });
    }

    handleSignInHide=()=> {
    this.setState({ signInShow: false });
    }

    render(){
        return(
            <React.Fragment >
                <Navbar>
                    <Navbar.Header>
                        <Navbar.Brand>
            
                    <Link to="/"><Glyphicon glyph="globe" /> Classic Traveler </Link>
                    </Navbar.Brand>
                    </Navbar.Header>
                    <Nav pullRight>
                        <LoginFunc logOut={this.props.logOut} signup={this.showModal} login={this.showLogin} isLoggedIn={this.props.isLoggedIn} />
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
                        <SignUpForm  signUpHide={this.handleSignUpHide}   changeState={this.props.changeState} />
                    </Modal.Body>
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
                        <LoginForm signInHide={this.handleSignInHide} changeState={this.props.changeState} />
                    </Modal.Body>
                </Modal>

            </React.Fragment>
        )
    }
}

export default Header