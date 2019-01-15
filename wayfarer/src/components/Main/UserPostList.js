import React, { Component } from 'react'
import { Row, Media, Well,} from 'react-bootstrap'


class UserPostList extends Component{
    constructor (props) {
        super(props)
        this.state = {
            userPostList: [],
        }
    }
    render(){
        return(
            <React.Fragment>
                <Row>

                     {/* 
                    <Well className='postItem'>
                            <Media>
                                <Media.Left>
                                    <img width={150} height={150} src="{this.users.posts.pic}" alt="thumbnail" />
                                </Media.Left>
                                <Media.Body>
                                <Media.Heading >{this.users.posts.title} | {this.users.posts.city} | {this.users.posts.country} </Media.Heading>
                                    <p>
                                    {this.users.posts.body}
                                    </p>
                                </Media.Body>
                            </Media>
                        </Well>
                        */}

                        <Well className='postItem'>
                            <Media>
                                <Media.Left>
                                    <img width={150} height={150} src="../images/London_Buckingham_Palace.jpg"alt="thumbnail" />
                                </Media.Left>
                                <Media.Body>
                                <Media.Heading >Buckingham Palace | London | United Kingdom </Media.Heading>
                                    <p>DescriptionBuckingham Palace is the London residence and administrative headquarters of the monarch of the United Kingdom. Located in the City of Westminster, the palace is often at the centre of state occasions and royal hospitality. It has been a focal point for the British people at times of national rejoicing and mourning.
                                    </p>
                                </Media.Body>
                            </Media>
                        </Well>
                    
                    <Well className='postItem'>
                            <Media>
                                <Media.Left>
                                    <img width={150} height={150} src="../images/sydney_arcade.jpeg" alt="thumbnail" />
                                </Media.Left>
                                <Media.Body>
                                <Media.Heading >The Strand Arcade | Sydney | Australia</Media.Heading>
                                    <p>
                                    The Strand Arcade is a heritage-listed Victorian-style retail arcade located at 195-197 Pitt Street in the heart of the Sydney central business district, between Pitt Street Mall and George Street in the City of Sydney local government area of New South Wales, Australia. 
                                    </p>
                                </Media.Body>
                            </Media>
                        </Well>
                        <Well className='postItem'>
                            <Media>
                                <Media.Left>
                                    <img width={150} height={150} src="../images/sf_Ferry_Building.jpg" alt="thumbnail" />
                                </Media.Left>
                                <Media.Body>
                                <Media.Heading >Ferry Building | San Francisco | United States</Media.Heading>
                                    <p>
                                    The San Francisco Ferry Building is a terminal for ferries that travel across the San Francisco Bay, a food hall and an office building. It is located on The Embarcadero in San Francisco, California.
                                    </p>
                                </Media.Body>
                            </Media>
                        </Well>
                </Row>
            </React.Fragment>
        )
    }
}


export default UserPostList