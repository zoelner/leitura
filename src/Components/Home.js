import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HeaderView } from './HeaderView';
import { FooterView } from './FooterView';
import { Posts} from './Posts';
import { orderPost } from '../Actions';
import { Dropdown, Button, NavItem, Input } from 'react-materialize';

class Home extends Component {

    render() {
        const { categories, posts, sortPost } = this.props;
        return (
            <div>
                <HeaderView />
                <div className="section no-pad-bot" id="index-banner">
                    <div className="container">
                        <h1 className="header center light-blue-text lighten-1-text">App Leitura</h1>
                        <div className="row center">
                            <h5 className="header col s12 light">Selecione uma Categoria </h5>
                        </div>
                        <div className="row center ">
                            <Dropdown trigger={<Button className="light-blue darken-1" waves='light'>Categorias</Button>}>
                                {categories.map((category) => <NavItem key={category.name} href={category.path}>{category.name.toUpperCase()}</NavItem>)}
                            </Dropdown>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="section">
                        <h5>Posts</h5>
                        <div className="row divider"></div>

                        <div className="row">
                            <div className="col s12 m6">
                                <Input type='select' defaultValue='voteScore' label='Ordenar por:' onChange={(event) => sortPost(event.target.value)}>
                                    <option value='voteScore'>Vote Score</option>
                                    <option value='timestamp'>Data de Criação</option>
                                    <option value='title'>Título</option>
                                </Input>
                            </div>
                            <div className="col s12 m6">
                            <Button className="light-blue darken-1 btn pulse" node='a' href="/posts" waves='light'>Adicionar Post</Button>
                            </div>

                        </div>
                        <div className="row">
                            {posts.map( (post, index) => <Posts s={6} m={6} post={post} key={index} />)}

                        </div>
                    </div>
                </div>
                <FooterView />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    categories: state.categories,
    posts: state.posts
})

const mapDispatchToProps = dispatch => ({
    sortPost: (sort) => dispatch(orderPost(sort))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);