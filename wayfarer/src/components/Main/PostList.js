import React, { Component } from 'react'
import { Row, Media, Well, Button, Modal} from 'react-bootstrap'
import { Card, CardHeader, CardBody, CardText,} from 'reactstrap'
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
    handlePostShow=(e)=>{
        var postID = e.target.dataset.id
        console.log(postID);
        this.setState({
            postShow: true, 
            postId: postID
        })
        
        axios.get(`http://localhost:3001/post/show/${postID}`).then((response)=>{
            var post = response.data.data;
            var imgLoc = post[0].pic
            console.log(imgLoc);
            var imgUrl = `http://localhost:3001/images/upload/${imgLoc}`
            console.log(post);
            this.setState({
                postBody: post[0].body,
                postTitle: post[0].title,
                postImg: imgUrl
            })
        }).catch(err=>{
            console.log(err.response)
        })


    }
    handlePostHide=()=>{
        this.setState({ postShow: false });
    }
    render(){
 
    var posts = this.props.post.map((post,index)=>{
        var author = post.user.fullname === undefined?"Anonymous":post.user.fullname
        var imgLoc = `http://localhost:3001/images/upload/${post.image}`
        return (
        <Row>
            <Well className='postItem'>
            <Media>
                <Media.Left>
                    <img width={125} height={125} src={imgLoc}alt="thumbnail" />
                </Media.Left>
                <Media.Body>
                <Media.Heading data-id={post.id} onClick={this.handlePostShow}>{post.title}</Media.Heading>
                    <p>
                        {post.body}
                    </p>
                    <p>Author: {author}</p>
                    <CardText>
           <small className="text-muted">Posted {post.date} minutes ago</small>
         </CardText>
                </Media.Body>
            </Media>
        </Well>
    
</Row>)
    });
        return(
            <React.Fragment>
                <Modal
                    show={this.state.postShow}
                    onHide={this.handlePostHide}
                    container={this}
                    aria-labelledby="contained-modal-title"
                    >
                    <Modal.Header closeButton>
                        <Modal.Title center id="contained-modal-title">
                            <h2>{this.state.postTitle}</h2>
                            <img width={500} src={this.state.postImg}alt="thumbnail" />
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>{this.state.postBody}</p>
                    </Modal.Body>
                    
                        
                </Modal>
                {posts}
                
            </React.Fragment>
)
}

}


export default PostList