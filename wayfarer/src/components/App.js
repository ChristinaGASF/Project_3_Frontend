import React, { Component } from 'react';
import Header from './Header/Nav'
import Home from '../container/Home'
import Post from '../container/Post'
import './App.css';
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
          {/* <Route path="/home" component={Home}/> */}
          <Home />
          {/* <Route path="/post" component={Post}/> */}
        </Switch>
        {/* <Cities />
        <Post /> */}
      </div>
    );
  }
}

export default App;