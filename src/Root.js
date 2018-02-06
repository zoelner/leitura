import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import { Home } from './Components';
import { connect } from 'react-redux';
import { FormPost } from './Components/Posts/';
import PostDetail from './Components/Posts/PostDetail';

class Root extends Component {



  render() {
    return (
      <BrowserRouter >
        <div>
          <Route path="/post/edit/:id" component={FormPost} />
          <Route exact path="/post/:id" component={PostDetail} />
          <Route path="/new" component={FormPost} />
          <Route path="/category/:name" component={Home} />
          <Route exact path="/" component={Home} />
        </div>
      </BrowserRouter>
    )
  }
}





export default connect()(Root);
