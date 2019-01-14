import React, { Component } from 'react'
import { Row, Media, Well,} from 'react-bootstrap'
import axios from 'axios';
// import Posts from '../../data.json'



class PostList extends Component{
    constructor (props) {
        super(props)
        this.state = {
            postList: [],
            currentCity: [],
        }
    }
    
    componentDidMount(){
        this.setState({currentCity : this.props.currentCity})
        console.log(this.props.currentCity);
        
        
        
    }

    render(){
        
        
        
        console.log(this.props.post)
    var posts = this.props.post.map((post,index)=>{
        return <Row>
        <Well className='postItem'>
            <Media>
                <Media.Left>
                    <img width={64} height={64} src="https://upload.wikimedia.org/wikipedia/commons/d/da/Lombardst.jpeg" alt="thumbnail" />
                </Media.Left>
                <Media.Body>
                <Media.Heading>{post.title}</Media.Heading>
                    <p>
                        {post.body}
                    </p>
                </Media.Body>
            </Media>
        </Well>
    
</Row>
    });
        return(
            <React.Fragment>
                {posts}
            </React.Fragment>
)
}

}


export default PostList