import React, { Component } from 'react'
import { Row, Media, Well, Button, Modal, FormControl, FormGroup, Form, ControlLabel} from 'react-bootstrap'
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
    handleEditShow=(e)=>{
        console.log(e.target.parentNode.firstChild.innerHTML);
        console.log(e.target.parentNode.firstChild.nextSibling.innerHTML);

        this.setState({editPostShow: true})
    }
    handleEditPostHide=()=>{
        this.setState({ editPostShow: false });
    }
    handleEditSubmit=(e)=>{
        var postID = e.target.dataset.id

        axios.put(`http://localhost:3001/post/edit/${postID}`)
        this.handleEditPostHide()
    }
    handleDelete=(e)=>{
        var postID = e.target.dataset.id
        console.log(postID);
        axios.delete(`http://localhost:3001/post/${postID}`)
        
    }
    render(){

        
        
        
        
        
    var posts = this.props.post.map((post,index)=>{
        var imgLoc = `http://localhost:3001/images/upload/${post.image}`
        return <Row>
        <Well className='postItem'>
            <Media>
                <Media.Left>
                    <img width={64} height={64} src={imgLoc }alt="thumbnail" />
                </Media.Left>
                <Media.Body>
                <Media.Heading>{post.title}</Media.Heading>
                    <p>
                        {post.body}
                    </p>
                    <Button form="updateUser" data-id={post.id}  onClick={this.handleEditShow} >Edit</Button>
                    <Button form="updateUser" onClick={this.handleDelete}  data-id={post.id} >Delete</Button>
                </Media.Body>
            </Media>
        </Well>
    
</Row>
    });
        return(
            <React.Fragment>
                {posts}
                <Modal
                    show={this.state.editPostShow}
                    onHide={this.handleEditPostHide}
                    container={this}
                    aria-labelledby="contained-modal-title"
                    >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title">
                    New Post
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <Form>
                        <FormGroup>
                            <ControlLabel>Title</ControlLabel>
                            <FormControl
                                type="text"
                                name="title"
                                placeholder=''
                                onChange={this.handleTitle}  />
                            <FormControl.Feedback />
                        </FormGroup>
                        <FormGroup controlId="formControlsTextarea">
                            <ControlLabel>Post Body</ControlLabel>
                            <FormControl 
                                componentClass="textarea" 
                                placeholder="Post body"
                                onChange={this.handleBody}  />
                        </FormGroup>
                        {/* <input type="file" ref={this.fileInput}/> */}
                        <Modal.Footer>
                            <Button onClick={this.handleEditSubmit}>Submit</Button>
                        </Modal.Footer>
                    </Form>
                    </Modal.Body>
                        
                </Modal>
            </React.Fragment>
)
}

}


export default PostList