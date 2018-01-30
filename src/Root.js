import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import { Home, Categories } from './Components';
import { receiveData } from './Util';
import { connect } from 'react-redux';

class Root extends Component {

  async componentDidMount() {
    const { fetchData } = this.props;
    await fetchData('posts')
    await fetchData('categories')
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/categories" component={Categories} />
          <Route path="/:category/posts" render={() => 'Work'} />
        </div>
      </BrowserRouter>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (url) => dispatch(receiveData(url))
  };
};



export default connect(null, mapDispatchToProps)(Root);
