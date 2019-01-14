import React, { Component } from 'react'
import { Row, Media, Well,} from 'react-bootstrap'
//import Show from '../components/Main/Show'

class UserPostList extends Component{
    render(){
        return(
            <React.Fragment>
                <Row>

                    {/* Creat this section dynamically 

                    City, Country, Post Title onClick={Show} modal, body, img
                    
                    */}

                        <Well className='postItem'>
                            <Media>
                                <Media.Left>
                                    <img width={150} height={150} src="../images/London_Buckingham_Palace.jpg"alt="thumbnail" />
                                </Media.Left>
                                <Media.Body>
                                <Media.Heading >London | United Kingdom | Buckingham Palace</Media.Heading>
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
                                <Media.Heading >Sydney | Australia | The Strand Arcade</Media.Heading>
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
                                <Media.Heading >San Francisco | United States | Ferry Building</Media.Heading>
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