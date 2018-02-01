import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import { Home } from './Components';
import { connect } from 'react-redux';
import { EditPost } from './Components/Posts/';

class Root extends Component {



  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/category/:name" component={Home} />
          <Route path="/post/edit/:id" component={EditPost} />
        </div>
      </BrowserRouter>
    )
  }
}





export default connect()(Root);
