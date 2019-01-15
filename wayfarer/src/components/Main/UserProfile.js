import React, { Component } from 'react'
import { Form , FormGroup, Col, ControlLabel, FormControl,  Button} from 'react-bootstrap'
import axios from "axios"

class UserProfile extends Component{
  constructor(props ) {
    super(props );
    this.state = {fullname: "", date: "", city: "", img: "", }
  }
    componentDidMount(){
   
      var userID = this.props.userId
      axios.post(`http://localhost:3001/user/profile`, {token: localStorage.getItem ("token")  })
      .then(response => {
          
          var data = response.data.data
          console.log (data)
         this.setState({ 
           fullname: (data.fullname === undefined)?"":data.fullname, 
           date: (data.date === undefined)?"":new Date (data.date).toLocaleDateString("en-US"),
           city: (data.city === undefined)?"":data.city,
           img: (data.profilePic === undefined)?"":data.profilePic,
         })
        }) 
      }

handleChange=(e)=>{
  console.log (e.target.value)
 if (e.target.type === "text") {
   this.setState ({fullname: e.target.value})
 }
 else {
  this.setState ({city: e.target.value})
 }
}
handleUpdate=(e)=>{
  axios.put('http://localhost:3001/user/edit/fullname',{
      fullname: this.state.fullname,
      token: localStorage.getItem("token")
  } )
  .then( response => {
    console.log(response);
 })    
 .catch(function(error){
     console.log(error);
 })
}

  /*
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleUpdate.bind(this);
  }

    handleChange(event) {
    this.setState({value: event.target.value});
  }
  */

    render(){
      console.log (this.state)
        return (

        <Form horizontal>

        <FormGroup controlId="formHorizontalName">
        <img width={200} height={200} src="../images/default_user_icon.png"alt="thumbnail" />
        </FormGroup>

        <FormGroup controlId="formHorizontalName">
          <Col componentClass={ControlLabel} sm={6}> Join Date</Col>
          <Col sm={6}>{ this.state.date } </Col>
        </FormGroup>

        <FormGroup controlId="formHorizontalName">
          <Col componentClass={ControlLabel} sm={6}> Name </Col>
          <Col sm={6}>
          <FormControl type="text" placeholder="Fullname" value={this.state.fullname } onChange={this.handleChange} /></Col>



        </FormGroup>

        <FormGroup controlId="formHorizontalName">
          <Col componentClass={ControlLabel} sm={6}> City </Col>
          

          <Col sm={6}>
      
          <FormControl componentClass="select" placeholder="select" onChange={this.handleChange} >
                <option value="1">London</option>
                <option value="2">San Francisco</option>
                <option value="3">Sydney</option>
                <option value="4">Seattle</option>
                <option value="5">New York</option>
          </FormControl>
          </Col>

          </FormGroup>
         
        {/*  <Col sm={6}>{ this.state.city.id } </Col> */}

        <Button form="updateUser" onClick={this.handleUpdate} >Update</Button>    
      </Form>
       
        )
      }
    }
 
export default UserProfile