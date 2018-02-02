import React, { Component } from 'react';
import { Button, Input } from 'react-materialize';
import serializeForm from 'form-serialize';
import { connect } from 'react-redux';
import { postData, updatePost } from '../../Util';
import { HeaderView } from '../HeaderView';
import { FooterView } from '../FooterView';


class FormPost extends Component {


    insertPost = (e) => {
        e.preventDefault()
        const data = serializeForm(e.target, { hash: true })
        this.props.addPost(data)
        alert('Post criado com sucesso!');
        this.props.history.push("/")
    }

    updatePost = (e) => {
        e.preventDefault()
        const data = serializeForm(e.target, { hash: true })
        this.props.editPost(data, this.props.match.params.id)
        alert('Post alterado com sucesso!');
        this.props.history.push("/")
    }

    createPost = () => (
        <form onSubmit={this.insertPost}>
            <Input s={6} name="author" label="Usuário" required />
            <Input s={6} name="category" type='select' label="Categoria">
                {this.props.categories.map((category) => <option key={category.name} value={category.name}>{category.name.toUpperCase()}</option>)}
            </Input>
            <Input s={12} name="title" type='text' label="Título" />
            <textarea name="body" className="materialize-textarea"></textarea>
            <div className="col s6 m6">
                <Button
                    className="light-blue darken-1 btn pulse modal-close" waves='light' type="submit"
                >Enviar</Button>
            </div>
        </form>
    )

    editPost = () => (
        <form onSubmit={this.updatePost}>
        <input type="hidden" name="id" value={this.props.post.id} />
            <Input s={6} name="author" label="Usuário" defaultValue={this.props.post.author} required />
            <Input s={6} name="category" type='select' label="Categoria" defaultValue={this.props.post.category}>
                {this.props.categories.map((category) => <option key={category.name} value={category.name}>{category.name.toUpperCase()}</option>)}
            </Input>
            <Input s={12} name="title" type='text' label="Título" defaultValue={this.props.post.title} />
            <textarea name="body" className="materialize-textarea" defaultValue={this.props.post.body}></textarea>
            <div className="col s6 m6">
                <Button
                    className="light-blue darken-1 btn pulse modal-close" waves='light' type="submit"
                >Salvar</Button>
            </div>
        </form>
    )


    render() {
        let {post} = this.props;
        return (
            <div>
                <HeaderView />
                <div className="container">
                    <h1 className="header center light-blue-text lighten-1-text">{ (post === undefined) ? 'Novo Post' : 'Editar Post'   }</h1>
                    <h5>Posts</h5>
                    <div className="row divider"></div>
                    <div className="row">
                        { (post === undefined) ? this.createPost() : this.editPost()   }
                    </div>
                </div>
                <FooterView />
            </div >

        )
    }
}

const mapStateToProps = (state, props) => ({
    categories: state.categories,
    post: state.posts.find(post => post.id === props.match.params.id)
})

const mapDispatchToProps = (dispatch) => ({
    addPost: (data) => dispatch(postData(data)),
    editPost: (data, id) => dispatch(updatePost(data, id))
})

export default connect(mapStateToProps, mapDispatchToProps)(FormPost);