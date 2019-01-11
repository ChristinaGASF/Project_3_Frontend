import React, { Component } from 'react'
import {Well, Panel } from 'react-bootstrap'
import './Cities.css'

var imgUrl =  'https://upload.wikimedia.org/wikipedia/commons/c/cd/SanFrancisco_from_TwinPeaks_dusk_MC.jpg'
var cityWell = {
    backgroundImage:  'url(' + imgUrl + ')',
    backgroundSize: 'cover',
    backgroundPosition: '50%',
    textAlign: 'center'
    }

class Cities extends Component{
    render(){
        return(
            <React.Fragment>
                <Panel.Body>
                    {/* This part will grab our city data and populate dynamically */}
                    <Well style={cityWell} bsSize="large"><h2>San Francisco</h2></Well>
                    <Well style={cityWell} bsSize="large"><h2>San Francisco</h2></Well>
                    <Well style={cityWell} bsSize="large"><h2>San Francisco</h2></Well>
                    <Well style={cityWell} bsSize="large"><h2>San Francisco</h2></Well>
                    <Well style={cityWell} bsSize="large"><h2>San Francisco</h2></Well>
                    {/* ////////////////////////////////////////////////// */}
                </Panel.Body>
            </React.Fragment>
        )
    }
}


export default Cities
