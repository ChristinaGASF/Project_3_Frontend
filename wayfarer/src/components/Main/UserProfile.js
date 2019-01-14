import React, { Component } from 'react'
import { Form, FormGroup } from 'react-bootstrap'


class UserProfile extends Component{
  constructor(props, context) {
    super(props, context);

    handleChange=(e)=>{
      console.log(e.target.value);
      this.setState({this: e.target.value})
  }


    render() {
        return (
        
          <Form>
          <FormGroup>
              <ControlLabel>Name</ControlLabel>
              <FormControl
                  type="text"
                  placeholder="Name" />
              <FormControl.Feedback />
          < FormGroup />

          <FormGroup controlId="formControlsTextarea">
              <ControlLabel>Password</ControlLabel>
              <FormControl 
                  componentClass="textarea" 
                  placeholder="Password" 
                  input type="text" value={this.state.value} onChange={this.handleChange}
                  />
          < FormGroup />

          <FormGroup controlId="formControlsTextarea">
              <ControlLabel>Current City</ControlLabel>
              <FormControl 
                  componentClass="textarea" 
                  placeholder="Current City" 
                  input type="text" value={this.state.value} onChange={this.handleChange}
                  />
          </FormGroup>
          
          <FormGroup controlId="formControlsTextarea">
              <ControlLabel>Join Date</ControlLabel>
              <FormControl 
                  componentClass="textarea" 
                  placeholder="Join Date" 
                  input type="text" value={this.state.value} onChange={this.handleChange}
                  />
          </FormGroup>
          </Form>
     
   

        );
      }
    }




export default UserProfile