import React, { Component } from 'react';
import Header from './Header/Nav'
import Home from '../container/Home'
import Post from '../container/Post'
import Profile from '../container/Profile'
import './App.css';
import {Redirect} from 'react-router-dom'
import {Route, Switch} from 'react-router-dom'

class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
        isLoggedIn: false,
        page: 'home'
        
    }         
};
  changeState=()=>{
    this.setState({isLoggedIn: true, page:"post"})
  }

  handleLogOut = () => {
    this.setState({
      isLoggedIn: false
    })
    localStorage.clear()
  }

  routeComp(){

  }
  render() {
    var comp = (this.state.isLoggedIn === false)? Home : Post
    var page = '/' + (this.state.page)
    return(
    
      <div className="App">
        <Header changeState={this.changeState} logOut={this.handleLogOut} isLoggedIn={this.state.isLoggedIn}/>
        <Switch > 
        <Route path={page} component={comp}/>
        <Route path="/profile" component={Profile}/>
        <Redirect from="/" to={this.state.page} />
        </Switch>
      
      </div>
    );
  }
}

export default App;
