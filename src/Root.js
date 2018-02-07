import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Home } from './Components';
import { connect } from 'react-redux';
import { FormPost } from './Components/Posts/';
import PostDetail from './Components/Posts/PostDetail';

class Root extends Component {



  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/new" component={FormPost} />
          <Route path="/post/edit/:id" component={FormPost} />
          <Route path="/:name/:id" component={PostDetail} />
          <Route path="/:name" component={Home} />
          <Route exact path="/" component={Home} />
          </Switch>
      </BrowserRouter >

    )
  }
}





export default connect()(Root);
