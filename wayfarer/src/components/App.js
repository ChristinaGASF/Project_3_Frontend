import React, { Component } from 'react';
import Header from './Header/Nav'
import Home from '../container/Home'
import Post from '../container/Post'
import Profile from '../container/Profile'
import './App.css';
import {Redirect} from 'react-router-dom'
import {Route, Switch} from 'react-router-dom'

class App extends Component {
  // componentDidMount(){
  //   this.props.history.push('/Home')
  // }
  render() {
    return (
      <div className="App">
        <Header />
        <Switch > 
        <Route path="/home" component={Home}/>
        <Route path="/post" component={Post}/>
        <Route path="/profile" component={Profile}/>
        <Redirect from="/" to="home" />
        </Switch>
        {/* <Cities />
        <Post /> */}
      </div>
    );
  }
}

export default App;
