import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HeaderView} from './HeaderView';
import { FooterView } from './FooterView';
import { Dropdown, Button, NavItem } from 'react-materialize';
import { Posts } from './Posts';

class Home extends Component {

    render() {
        const { categories, posts } = this.props;
        return (
            <div>
                <HeaderView />
                <div className="section no-pad-bot" id="index-banner">
                    <div className="container">
                        <h1 className="header center light-blue-text lighten-1-text">App Leitura</h1>
                        <div className="row center">
                            <h5 className="header col s12 light">Selecione a Categoria </h5>
                        </div>
                        <div className="row center ">
                            <Dropdown trigger={<Button className="light-blue darken-1">Categorias</Button>}>
                                {categories.map((category) => <NavItem key={category.name} href={category.path}>{category.name.toUpperCase()}</NavItem>)}
                            </Dropdown>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="section">
                    <h5>Posts</h5>
                    <div className="divider"></div>
                        <div className="row">
                            {posts.map(post => <Posts post={post} key={post.id}/>) }
                                </div>
                            </div>
                        </div>
                <FooterView />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    categories: state.categories,
    posts: state.posts
})

export default connect(mapStateToProps)(Home);