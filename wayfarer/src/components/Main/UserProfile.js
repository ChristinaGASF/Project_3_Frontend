import React, { Component } from 'react'
import { Form , FormGroup, Col, ControlLabel, FormControl,  Button} from 'react-bootstrap'
import UserPostList from './UserPostList';
import axios from "axios"

class UserProfile extends Component{
  constructor(props ) {
    super(props );
    this.state = {fullname: "", date: "", city: "", img: ""}
  }
    componentDidMount(){
   
      var userID = this.props.userId
      axios.post(`http://localhost:3001/user/profile`, {token: localStorage.getItem ("token")  })
      .then(response => {
          
          var data = response.data.data
          console.log (data)
         this.setState({ 
           fullname: (data.fullname === undefined)?"Christina":data.fullname, 
           date: (data.date === undefined)?"":new Date (data.date).toLocaleDateString("en-US"),
           city: (data.city === undefined)?"San Francisco":data.city,
           img: (data.profilePic === undefined)?"":data.profilePic,
         })
        })
      
  
}

  /*
this.users.fullname
this.users.joinDate
this.users.city


    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleUpdate.bind(this);
  }
  */

  handleChange(event) {
    this.setState({value: event.target.value});
  }
  handleUpdate(event) {
    alert('Updated' + this.state.value);
    event.preventDefault();
  }

    render(){
      console.log (this.state)
        return (

        <Form horizontal>

        <FormGroup controlId="formHorizontalName">
        <img width={200} height={200} src="../images/default_user_icon.png"alt="thumbnail" />
        </FormGroup>

        <FormGroup controlId="formHorizontalName">
          <Col componentClass={ControlLabel} sm={6}> Name </Col>
          <Col sm={6}>{ this.state.fullname } </Col>
        </FormGroup>

        <FormGroup controlId="formHorizontalName">
          <Col componentClass={ControlLabel} sm={6}> Join Date</Col>
          <Col sm={6}>{ this.state.date } </Col>
        </FormGroup>

        <FormGroup controlId="formHorizontalName">
          <Col componentClass={ControlLabel} sm={6}> City </Col>
          <Col sm={6}>{ this.state.city } </Col>
        </FormGroup>

{/*
        <FormGroup controlId="formHorizontalEmail">
            <Col componentClass={ControlLabel} sm={6}>Current City</Col>
            <Col sm={6}>
            <FormControl type="text" placeholder="Current City" value={this.state.value} onChange={this.handleChange} />
            </Col>
        </FormGroup>
*/}
         <Button form="updateUser" onClick={this.handleUpdate} >Update</Button>


      </Form>
       
        )
      }
    }
 
export default UserProfile