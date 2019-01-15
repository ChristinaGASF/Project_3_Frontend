import React, { Component } from 'react'
import { Form , FormGroup, Col, ControlLabel} from 'react-bootstrap'


class UserProfile extends Component{
  constructor(props ) {
    super(props );


    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleUpdate.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }
  handleUpdate(event) {
    alert('Updated' + this.state.value);
    event.preventDefault();
  }

    render(){
        return (

        <Form horizontal>

        <FormGroup controlId="formHorizontalName">
        <img width={200} height={200} src="../images/default_user_icon.png"alt="thumbnail" />
        </FormGroup>

        <FormGroup controlId="formHorizontalName">
          <Col componentClass={ControlLabel} sm={6}> User Name</Col>
          <Col sm={6}>{} </Col>
        </FormGroup>

        <FormGroup controlId="formHorizontalName">
          <Col componentClass={ControlLabel} sm={6}> Join Date</Col>
          <Col sm={6}>{} </Col>
        </FormGroup>

        <FormGroup controlId="formHorizontalName">
          <Col componentClass={ControlLabel} sm={6}> Current City</Col>
          <Col sm={6}>{} </Col>
        </FormGroup>

{/*
        <FormGroup controlId="formHorizontalEmail">
            <Col componentClass={ControlLabel} sm={6}>Current City</Col>
            <Col sm={6}>
            <FormControl type="text" placeholder="Current City" value={this.state.value} onChange={this.handleChange} />
            </Col>
        </FormGroup>

         <Button form="updateUser" onClick={this.handleUpdate} >Update</Button>
*/}

      </Form>
       
        )
      }
    }
 
export default UserProfile