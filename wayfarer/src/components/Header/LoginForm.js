import React, { Component } from 'react'
import { Form, FormGroup, Col, FormControl, ControlLabel, Button } from 'react-bootstrap'
import axios from 'axios'

class LoginForm extends Component{
    constructor(props, context) {
        super(props, context);
    
        // this.handleHide = this.handleHide.bind(this);
    
        this.state = {
            username: '',
            password: '',
            isLoggedIn: false

    };
    }
    componentDidMount () {
        if (localStorage.token) {
            this.setState({
            isLoggedIn: true
            })
        } else {
            this.setState({
            isLoggedIn: false
            })
        }
    }
    handleUsername=(e)=>{
        console.log(e.target.value);
        this.setState({username: e.target.value})
    }
    handlePassword=(e)=>{
        this.setState({password: e.target.value})
    }
    
    handleSubmit=(e)=>{
        axios.post('http://localhost:3001/user/login',{username: this.state.username, password: this.state.password} )
        .then( response => {
            localStorage.token = response.data.token
            this.setState({
              isLoggedIn: true
            })
        })    
        .catch(function(error){
            console.log(error);
        })
    }
    handleLogOut = () => {
        this.setState({
            email: '',
            password: '',
            isLoggedIn: false
        })
        localStorage.clear()
    }
    render(){
        return(
            <React.Fragment >
                <Form horizontal id="login">
                <FormGroup controlId="formHorizontalEmail">
                    <Col componentClass={ControlLabel} sm={2}>
                    Username
                    </Col>
                    <Col sm={10}>
                    <FormControl onChange={this.handleUsername} value={this.state.username} type="email" placeholder="Email" />
                    </Col>
                </FormGroup>

                <FormGroup controlId="formHorizontalPassword">
                    <Col componentClass={ControlLabel} sm={2}>
                    Password
                    </Col>
                    <Col sm={10}>
                    <FormControl onChange={this.handlePassword} value={this.state.password} type="password" name="password" placeholder="Password" />
                    </Col>
                </FormGroup>

            <Button form="login" onClick={this.handleSubmit} >Submit</Button>

        </Form>
            </React.Fragment>
        )
    }
}


export default LoginForm