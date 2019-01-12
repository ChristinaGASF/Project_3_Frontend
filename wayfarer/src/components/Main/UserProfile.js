import React, { Component } from 'react'
import { Row, Media, Well,} from 'react-bootstrap'


class UserProfile extends Component{
 
    render() {
        return (
          <form onSubmit={this.handleSubmit}>
            <label>
              Name
              <input type="text" value={this.state.value} onChange={this.handleChange} />
            </label>
              <label>
             Password
              <input type="text" value={this.state.value} onChange={this.handleChange} />
            </label>
             <label>
              Current City
              <input type="text" value={this.state.value} onChange={this.handleChange} />
            </label>
             <label>
              Join Date
              <input type="text" value={this.state.value} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Submit" />
          </form>
        );
      }
    }




export default UserProfile