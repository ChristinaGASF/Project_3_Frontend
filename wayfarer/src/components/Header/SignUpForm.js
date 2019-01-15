import React, { Component } from 'react'
import { Form, FormGroup, Col, FormControl, ControlLabel, Button } from 'react-bootstrap'
import axios from 'axios'

class SignUpForm extends Component{
    constructor(props, context) {
        super(props, context);
    
        // this.handleHide = this.handleHide.bind(this);
    
        this.state = {
            username: '',
            password: '',
            confirmPassword: '',
            city: ''

    };
    }
    handlePrefCity=(e)=>{
        
        this.setState({city: e.target.value})
    }
    handleUsername=(e)=>{
        console.log(e.target.value);
        this.setState({username: e.target.value})
    }
    handlePassword=(e)=>{
        this.setState({password: e.target.value})
    }
    handleConfirmPassword=(e)=>{
        this.setState({confirmPassword:e.target.value})
    }
    handleSubmit=(e)=>{
        axios.post('http://localhost:3001/user/signup',{username: this.state.username, password: this.state.password, conpassword: this.state.confirmPassword, city: this.state.city} )
        .then(function (response){
            console.log(response);
        })
        .catch(function(error){
            console.log(error);
        })
    }
    render(){
        return(
            <React.Fragment >
<Form horizontal id="newUser">
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
<FormGroup controlId="formHorizontalPasswordConfirm">
    <Col componentClass={ControlLabel} sm={2}>
    Confirm Password
    </Col>
    <Col sm={10}>
    <FormControl  onChange={this.handleConfirmPassword} value={this.state.confirmPassword} type="password" name="compassword" placeholder="Confirm password" />
    </Col>
</FormGroup>
<FormGroup >
    <Col componentClass={ControlLabel} sm={2}>
    Favorite City
    </Col>
    <Col sm={10}>
    <FormControl onChange={this.handlePrefCity} value={this.state.city} type="text" placeholder="e.g. San Francisco" />
    </Col>
</FormGroup>
<Button form="newUser" onClick={this.handleSubmit} >Submit</Button>

</Form>
            </React.Fragment>
        )
    }
}


export default SignUpForm
