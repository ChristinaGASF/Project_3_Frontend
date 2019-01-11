import React, { Component } from 'react'
import {Col, Row, Grid, Panel } from 'react-bootstrap'
//import UserProfile from '../components/Main/UserProfile'
import UserPostList from '../components/Main/UserPostList'

class Profile extends Component{
    render(){
        return(

            <React.Fragment>
                <Grid>
                    <Row className="show-grid">
                        <Col xs={12} md={4}>
                            <Panel>
                                <Panel.Heading>
                                    <Panel.Title componentClass="h2">Profile</Panel.Title>
                                    <img width={200} height={200} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAANlBMVEX////Fx8nBw8Xd3uDi4+TGyMr6+vry8/Pt7u7Lzc/k5ebg4eLJy83o6er39/jb3N3T1NbQ0tMiOwgsAAAEYklEQVR4nO2d2XKDMAxFy1K2sCT//7PFgVKSEIqxhC6Ze5760Ek5YyPJiu1+fRFCCCGEEELIqcjyprokSXKpmjyzfhhpsqYr455owP1Yds3HaOZJPbnNieM6ya0fToCqXrKbLOvK+gHDyLo1vVGyO+9s3eJ3asd0m9/dMbV+2B3kq+/fi2J9uphz8fG7O16sH9mPm69gr1haP7QHrbfeQGv94FvJ/QdwHMbC+tG3UewVPItigOA5FHdP0VERPmtkYYK9Inq4+Q4U7LFWWOcWLhjdrCXWqELnqAO5SA1+CUdF3FexFBGMItj6rZEZwn4QURf+Qn5O0VplmYucYZRYyywiNUcdkIOYCgpiDqKoIGJlE7SkeCVurIVekKjX5uDlRNkh7AcRrYcqlu0n0LL+VVoQbokhPoRoKTGwd7FoiNWyqcQFowhrmdgpGF6tpR6QWhnO+baWekD+NQQLNULtiydDpGZGq2KI1BxWSBZg6UJ4YTEaIi0vaEhDGtrz+bH08/OhTtUG1cdQEMSqS8U7bQ6sbluiYNhZSz0g32rDShYqyyeoxdOXyB6MZ6yVnpBv1GC1aRTqNqiK5o6wIFg2dEhPU6xc4RAuTbGK0gHZlilWQTMgGmvA0v1ILWiI1e/+RXAQMYdQcoGB+BY6xMIpYiAdSIQU8XLhhEywwQwzAyLzFHeOOgS2QSNvgnZcgxXRVk0vhBZvqIliRli0QY4yEyGKpxAMUaytH30rO06QOs50inTjMfUnQfgoOmdHhxh1PfGO1uuwujuuDtYA3oDXefWznVUfyDbXN/EN6qtCD/JNQTUuoUvtf8j/Hcf4emY/R5auxJz4Oz3r/HygTW8LlwzFcZmeL36+J6+68n4/1J2o7KqzT85lsrbN2/YjJiYhhBBCCAGnzYumqlJ/qqopcuzVxmz9sGFpv7BahF53FEm502vZtUyg9rUVV0G7P8sriGTbKej9Snb272VRaumNkqXtQBaene1djrWdY648fpOjVUN11xdMOx0tdtgUh+kNHD5VDxzAgaOH8aA38EHxyG+I994THMphyVHlPOUWjtoPZiZ4lKKh4DGKKldgeCjqf+mhcITLC/VdUxqHRf1QviHL4z86aKF7uanKqXRfVI9ealyW5I9icaNw2ncPivvDrNUmtAQlr9ENQ2uPGMYcdSgdMBW5cF0GpYxhXc3MUalsVG7Z2YvKSW/5G0pD0OhpIA2hSqyBmqQq01Tj/s4Q5K80xyhJ/5AvTrEmqcKLaNqdWUK8YwNU0AyILzDQAo18RsTK9w7pU1JooVQ+mFr7LCBsiBZo5NMFDY+HhjSkoT00pCEN7aEhDWloDw1pSMOnv7b3mMw/n7n2oYcaVkWP8BeosfvMtc0fRxoO7WdpQ/eZa9sEaUhDGtKQhjSkIQ1pSEMa0pCGNKQhDWlIQxrSkIY0pCENaUhDGtKQhjSk4XtDWcHjDbvkPcMFlSu/sIf7wa1s5c8C/6NLQgghhBBCyAfyA3NFXJlZf2DVAAAAAElFTkSuQmCC" alt="thumbnail" />
                                   { /* 
                                    <UserProfile />
                                   */}
                                </Panel.Heading>
                                  
                            </Panel>

                        </Col>
                        <Col xs={12} md={8}>
                                <Panel>
                                    <Panel.Body>
                                    <Panel.Title componentClass="h2">My Post Contributions</Panel.Title>
                                        <UserPostList />
                                    </Panel.Body>
                                </Panel>
                        </Col>
                    </Row>
                </Grid>



            </React.Fragment>
        )
    }
}

        /* 
        <UserProfile />
        */

export default Profile