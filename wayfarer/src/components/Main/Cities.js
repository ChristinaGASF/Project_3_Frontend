import React, { Component } from 'react'
import {Well, Panel } from 'react-bootstrap'
import './Cities.css'
import cities from '../../cities.json'



    

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
        
    }
    
    handleCity=(city)=>{
        
        this.props.currentCity(city)
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

