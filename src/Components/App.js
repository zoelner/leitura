import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Home, { Categories } from './views';
import { Navbar, NavItem, Footer } from 'react-materialize';
import { receiveData } from '../Util';
import { connect } from 'react-redux';

class App extends Component {

  async componentDidMount() {
    await this.props.fetchData('posts')
    await this.props.fetchData('categories')
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar brand='Leitura' right className="light-blue lighten-1">
            <NavItem href='/categories'>Categorias</NavItem>
            <NavItem href='/posts'>Componentes</NavItem>
          </Navbar>

          <Route exact path="/" component={Home} />
          <Route path="/categories" component={Categories} />
          <Route path="/:category/posts" render={() => 'Work'}/>


          <Footer className="light-blue lighten-1" copyrights="© 2018 Everton Gabriel Zoelner" links={
            <ul>
              <li><a className="grey-text text-lighten-3" href="/posts">Posts</a></li>
              <li><a className="grey-text text-lighten-3" href="/categories">Categorias</a></li>
            </ul>
          }>
            <h5 className="white-text">React e Redux </h5>
            <p className="grey-text text-lighten-4">Aplicativo desenvolvido para formação no curso React Developer da Udacity</p>

          </Footer>
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



export default connect(null, mapDispatchToProps)(App);
