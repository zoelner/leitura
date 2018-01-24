import React, { Component } from 'react';
import { receivePostsData, deletePosts, createPosts } from '../Actions/Actions';
import { connect } from 'react-redux';

class App extends Component {
  componentDidMount(){
    this.props.fetchData()
  }


  render() {
    return (
      <div className="App">
        <button onClick={this.props.create}>Click</button>
        <div>
        {this.props.id}
      </div>
      </div>

    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    id: state.posts.map( todo => todo.id )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      fetchData: () => dispatch(receivePostsData()),
      deletePost: (param) => dispatch(deletePosts(param)),
      create: () => dispatch(createPosts())
  };
};


export default connect(mapStateToProps, mapDispatchToProps )(App);
