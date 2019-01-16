import React, { Component } from 'react';
import Header from './Header/Nav'
import Home from '../container/Home'
import Post from '../container/Post'
import Profile from '../container/Profile'
import './App.css';
import {Redirect} from 'react-router-dom'
import {Route, Switch} from 'react-router-dom'
var RouteComp = (props)=>{
  if(props.isLoggedIn==true){
    return(
      
      <Switch>
      <Route path={props.page} component={Post}/>
      <Route path="/profile" component={Profile}/>
      <Redirect from="/" to={props.page} />
      </Switch>
     
    );
  }else{
    return(
      
      <Switch>
      <Route path={props.page} component={Home}/>
      <Redirect from="/" to={props.page} />
      </Switch>
     
      )
  }
}
class App extends Component {
  constructor(props, context) {
    super(props, context);
    if (localStorage.token){
      this.state ={
        isLoggedIn: true,
        page:'home',
        
      }
    }else{
    this.state = {
        isLoggedIn: false,
        page: 'home'
    }
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
  
  
  render() {
    var comp = (this.state.isLoggedIn === false)? Home : Post
    var page = '/' + (this.state.page)
    return(
    
      <div className="App">
        <Header changeState={this.changeState} logOut={this.handleLogOut} isLoggedIn={this.state.isLoggedIn}/>
        
        <RouteComp isLoggedIn={this.state.isLoggedIn} page ={page}  />
        
      
      </div>
    );
  }
}
export default App;