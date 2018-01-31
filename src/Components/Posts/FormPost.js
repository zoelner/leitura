import React, { Component } from 'react';
import { Button, Input } from 'react-materialize';
import serializeForm from 'form-serialize';
import { connect } from 'react-redux';
import { postData } from '../../Util';

class FormPost extends Component {
    state = {}

    componentDidMount () {
        let a = this.props.posts.filter(data => data.id === this.props.match.params.id)
        console.log(a)
}

    handleSubmit = (e) => {
        e.preventDefault()
        const data = serializeForm(e.target, { hash: true })
        this.props.addPost('posts', data)
        alert('Post criado com sucesso!');
        this.props.history.push("/");
    }
    render() {

        return (
                <div className="row">
                    <form onSubmit={this.handleSubmit}>
                        <Input s={6} name="author" label="Usuário" defaultValue={   'this.state.posts.id'}/>
                        <Input s={6} name="category" type='select' label="Categoria">
                            {this.props.categories.map((category) => <option key={category.name} value={category.name}>{category.name.toUpperCase()}</option>)}
                        </Input>
                        <Input s={12} name="title" type='text' label="Título"/>
                        <textarea  name="body" className="materialize-textarea"></textarea>

                        <div className="col s6 m6">
                            <Button className="light-blue darken-1 btn pulse" waves='light' type="submit">Enviar</Button>
                        </div>
                    </form>
                </div>

        )
    }
}

const mapStateToProps = state => ({
    categories: state.categories,
    posts: state.posts,
})

const mapDispatchToProps = dispatch => ({
    addPost: (post, data) => dispatch(postData(post, data))
})

export default connect(mapStateToProps, mapDispatchToProps)(FormPost);