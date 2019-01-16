import React, { Component } from 'react'
import { Row, Media, Well,  Modal, FormControl, FormGroup, Form, ControlLabel, Button} from 'react-bootstrap'
import axios from 'axios';


class UserPostList extends Component{
    constructor (props) {
        super(props)
        this.state = {
            userPostList: {data:[]},
            editPostShow: false,
            postBody: [],
            postTitle: [],
            postId: [],
            
        }
    }
    componentDidMount(){
        axios.post('http://localhost:3001/user/post', {"token": localStorage.getItem("token")})
        .then(response => {
           
            this.setState({
                userPostList: response
            })
            
            
        })
    }
    handleEditShow=(e)=>{
        this.setState({editPostShow: true, postTitle: e.target.parentNode.firstChild.innerHTML, postBody: e.target.parentNode.firstChild.nextSibling.innerHTML, postId: e.target.dataset.id})

    }
    handleEditPostHide=()=>{
        this.setState({ editPostShow: false });
    }
    handleEditSubmit=(e)=>{
        var postID = this.state.postId

        axios.post(`http://localhost:3001/post/edit/${postID}`, {title: e.target.parentNode.parentNode.firstChild.firstChild.nextSibling.value ,body: e.target.parentNode.parentNode.firstChild.nextSibling.firstChild.nextSibling.value}).then((data)=>{
            console.log(data);
            var postListData = this.state.userPostList.data.map((post, index)=>{
                if(data.data[0]._id === postID){
                    console.log(data);
                    return data.data[0]
                }
            })
            this.setState({userPostList:{data:postListData}})
            this.handleEditPostHide()
        })
        
        

    }
    handleDelete=(e)=>{
        var postID = e.target.dataset.id
        axios.delete(`http://localhost:3001/post/${postID}`).then(()=>{
            var postListIndex = this.state.userPostList.data.findIndex(post=>{
                return(post._id === postID)
            })
            console.log(postListIndex);
            this.state.userPostList.data.splice(postListIndex, 1) 
            this.setState({userPostList:{data: this.state.userPostList.data}})
        })
        
        
        
        }

    
    render(){
        console.log(this.state.userPostList);
        var posts = this.state.userPostList.data.map((post,index)=>{
            var imgLoc = `http://localhost:3001/images/upload/${post.pic}`
                return( <Row>
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
                        <Button form="updateUser" data-id={post._id}  onClick={this.handleEditShow} >Edit</Button>
                        <Button form="updateUser" onClick={this.handleDelete}  data-id={post._id} >Delete</Button>
                    </Media.Body>
                </Media>
            </Well>
        
    </Row>)
        });
            return(
                <React.Fragment>
                    
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
                                defaultValue={this.state.postTitle}
                                onChange={this.handleTitle}  />
                            <FormControl.Feedback />
                        </FormGroup>
                        <FormGroup controlId="formControlsTextarea">
                            <ControlLabel>Post Body</ControlLabel>
                            <FormControl 
                                componentClass="textarea" 
                                defaultValue={this.state.postBody}
                                onChange={this.handleBody}  />
                        </FormGroup>
                        {/* <input type="file" ref={this.fileInput}/> */}
                        <Modal.Footer>
                            <Button onClick={this.handleEditSubmit}>Submit</Button>
                        </Modal.Footer>
                    </Form>
                    </Modal.Body>
                        
                </Modal>
               

                    
            
                    {posts}
                    
                </React.Fragment>
    )
    }
   
}


export default UserPostList