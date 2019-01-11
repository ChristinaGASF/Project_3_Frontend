import React, { Component } from 'react'
import { Row, Media, Well,} from 'react-bootstrap'


class PostList extends Component{
    render(){
        return(
            <React.Fragment>
                <Row>
                    {/* Creat this section dynamically */}
                        <Well className='postItem'>
                            <Media>
                                <Media.Left>
                                    <img width={64} height={64} src="https://upload.wikimedia.org/wikipedia/commons/d/da/Lombardst.jpeg" alt="thumbnail" />
                                </Media.Left>
                                <Media.Body>
                                <Media.Heading>Lombard</Media.Heading>
                                    <p>
                                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                                        ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                                        tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
                                        fringilla. Donec lacinia congue felis in faucibus.
                                    </p>
                                </Media.Body>
                            </Media>
                        </Well>
                    {/* /////////////////////////////////// */}
                    <Well className='postItem'>
                            <Media>
                                <Media.Left>
                                    <img width={64} height={64} src="https://upload.wikimedia.org/wikipedia/commons/d/da/Lombardst.jpeg" alt="thumbnail" />
                                </Media.Left>
                                <Media.Body>
                                <Media.Heading>Lombard</Media.Heading>
                                    <p>
                                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                                        ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                                        tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
                                        fringilla. Donec lacinia congue felis in faucibus.
                                    </p>
                                </Media.Body>
                            </Media>
                        </Well>
                        <Well className='postItem'>
                            <Media>
                                <Media.Left>
                                    <img width={64} height={64} src="https://upload.wikimedia.org/wikipedia/commons/d/da/Lombardst.jpeg" alt="thumbnail" />
                                </Media.Left>
                                <Media.Body>
                                <Media.Heading>Lombard</Media.Heading>
                                    <p>
                                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                                        ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                                        tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
                                        fringilla. Donec lacinia congue felis in faucibus.
                                    </p>
                                </Media.Body>
                            </Media>
                        </Well>
                </Row>
</React.Fragment>
)
}
}


export default PostList