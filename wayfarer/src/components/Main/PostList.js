import React, { Component } from 'react'
import { Row, Media, Well, Button,} from 'react-bootstrap'
import axios from 'axios';




class PostList extends Component{
    constructor (props) {
        super(props)
        this.state = {
            postList: [],
            currentCity: [],
            postBody: [],
            postTitle: [],
            editPostShow: false
        }
    }
    
    componentDidMount=()=>{
        this.setState({currentCity : this.props.currentCity})
    }
   
    render(){
 
    var posts = this.props.post.map((post,index)=>{
        var imgLoc = `http://localhost:3001/images/upload/${post.image}`
        return (
        <Row>
            <Well className='postItem'>
            <Media>
                <Media.Left>
                    <img width={125} height={125} src={imgLoc }alt="thumbnail" />
                </Media.Left>
                <Media.Body>
                <Media.Heading>{post.title}</Media.Heading>
                    <p>
                        {post.body}
                    </p>
                    
                </Media.Body>
            </Media>
        </Well>
    
</Row>)
    });
        return(
            <React.Fragment>
                {posts}
                
            </React.Fragment>
)
}

}


export default PostList