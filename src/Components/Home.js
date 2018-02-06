import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HeaderView } from './HeaderView';
import { FooterView } from './FooterView';
import { Posts } from './Posts';
import { orderPost } from '../Actions';
import { Dropdown, Button, Input } from 'react-materialize';
import { Link } from 'react-router-dom';
import { receiveData, postVote } from './../Util';

class Home extends Component {

    async componentDidMount() {
        const { fetchData } = this.props;
        await fetchData('posts')
        await fetchData('categories')
    }

    render() {
        const { categories, sortPost, posts, match, votePost } = this.props;
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
                                {categories.map((category) => <li key={category.name}><Link to={`/category/${category.path}`}>{category.name.toUpperCase()}</Link></li>)}
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
                                <Link to="/new" className="light-blue darken-1 btn waves-light">Adicionar Post</Link>
                            </div>

                        </div>
                        <div className="row">
                            {posts
                                .filter(post => !post.deleted)
                                .filter(post => {
                                    if (match.params.name) {
                                        return match.params.name === post.category
                                    } else { return true }
                                })
                                .map((post, index) => <Posts s={6} m={6} post={post} key={index} vote={votePost}/>)}
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
    sortPost: (sort) => dispatch(orderPost(sort)),
    fetchData: (url) => dispatch(receiveData(url)),
    votePost: (id, vote) => dispatch(postVote(id,vote))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);