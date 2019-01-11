import React, { Component } from 'react'
import { FormGroup, FormControl, ControlLabel, Modal, Button} from 'react-bootstrap'



class NewPost extends Component{
    constructor(props, context) {
        super(props, context);
    
        // this.handleHide = this.handleHide.bind(this);
    
        this.state = {
            NewPostShow: false
        
    };
    
}
    handleNewPostShow=()=>{
    
    this.setState({ NewPostShow: true });
    }
    handleNewPostHide=()=> {

    this.setState({ NewPostShow: false });
}
    
    render(){
        
        
        return(
            <React.Fragment>
                    

            </React.Fragment>
        )
    }
}
            
            
export default NewPost