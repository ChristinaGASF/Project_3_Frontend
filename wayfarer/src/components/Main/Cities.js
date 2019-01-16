import React, { Component } from 'react'
import {Well, Panel } from 'react-bootstrap'
import './Cities.css'
import cities from '../../cities.json'
import axios from 'axios';



    

class Cities extends Component{
    constructor (props) {
        super(props)
        this.state = {
            cities: [],
            currentCity: []
        }
    }
    
    componentDidMount(){
        this.setState({ cities: cities});
        // this.handleCity()
        axios.put('http://localhost:3001/user/edit/profile',{
            fullname: this.state.fullname, 
            city: this.state.city,
            token: localStorage.getItem("token")
        } )
        .then( response => {
           cities.forEach(element => {
                
                if(element.id.toString() === response.data.data.city){
                    this.handleCity(element)
                }
                    
            });
            //console.log(current)
           // 
          console.log(response.data);
       })    
    }
    
    handleCity=(city)=>{
        
        this.props.currentCity(city)
        
        axios.get(`http://localhost:3001/post/city/${city.id}`)
        .then(response => {
            if(response.data.error === undefined){
                this.props.populate(response.data)
            }
            
            
        })
    }
    render(){
        var cityList = cities.map((city, index) =>
            <Well currentCity={this.state.currentCity} key={index} onClick={(e)=>(this.handleCity(city))} data-cityid={city.id} style={{backgroundImage:`url(${city.img})`}}><h2 className="title">{city.name}</h2></Well>
        )
        return(
            <React.Fragment>
                <Panel.Body>
                    {cityList}
                </Panel.Body>
            </React.Fragment>
        )
    }
}

export default Cities

