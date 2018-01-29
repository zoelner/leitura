import React, { Component } from 'react';
import { Dropdown, Button, NavItem } from 'react-materialize';
import { connect } from 'react-redux';

class Home extends Component {

    render() {
        return (
            <div>
                <div className="section no-pad-bot" id="index-banner">
                    <div className="container">
                        <h1 className="header center light-blue-text lighten-1-text">App Leitura</h1>
                        <div className="row center">
                            <h5 className="header col s12 light">Selecione a Categoria </h5>
                        </div>
                        <div className="row center">
                            <Dropdown trigger={
                                <Button>Categorias</Button>
                            }>
                                <NavItem>React</NavItem>
                                <NavItem>Redux</NavItem>
                                <NavItem divider />
                                <NavItem>Udacity</NavItem>
                            </Dropdown>    </div>
                    </div>
                </div>
                <div className="container">
                    <div className="section">
                        <div className="row">
                            <div className="col s12 m6">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}



export default connect()(Home);