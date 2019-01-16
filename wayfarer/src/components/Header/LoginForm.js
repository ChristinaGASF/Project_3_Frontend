import React, { Component } from 'react'
import { Form, FormGroup, Col, FormControl, ControlLabel, Button,Alert } from 'react-bootstrap'
import axios from 'axios'
class LoginForm extends Component{
    constructor(props, context) {
        super(props, context);
 
        this.state = {
            username: '',
            password: '',
            isLoggedIn: false,
            serverMessage:'',
            messageDisplay:"none"
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
        this.setState({username: e.target.value})
    }

    handlePassword=(e)=>{
        this.setState({password: e.target.value})
    }

    handleChangeState=()=>{
        this.setState({
            isLoggedIn: true
        })
    }

    handleSubmit=(e)=>{
        axios.post('http://localhost:3001/user/login',{username: this.state.username, password: this.state.password} )
        .then( response => {
            if (response.data.status === true){
                this.props.changeState()
                this.props.signInHide()
                localStorage.token = response.data.token
            }
            else{
                this.setState({
                    serverMessage:response.data.message,
                    messageDisplay:"block"
                })
            }
        })    
        .catch(function(error){
            this.setState({
                serverMessage:"Server error try later",
                messageDisplay:"block"
            })
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
                    <Alert style={{display:this.state.messageDisplay}} bsStyle="warning">
                        {this.state.serverMessage}
                    </Alert>
                    <FormGroup controlId="formHorizontalUsername">
                        <Col componentClass={ControlLabel} sm={2}>
                        Username
                        </Col>
                        <Col sm={10}>
                        <FormControl onChange={this.handleUsername} value={this.state.username} type="username" placeholder="Username" />
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