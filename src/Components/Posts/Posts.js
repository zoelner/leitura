import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Posts extends Component {

    async componentDidMount() {
        const { post, receiveComments } = this.props;
        const {id} = post;
        await receiveComments(id)
    }

    state = {
        vote: true
    }

    vote = (id) => {
        this.props.vote(id, this.state.vote)
        this.setState({ vote: !this.state.vote })
    }

    render() {
        const { id, title, body, author, category, voteScore } = this.props.post;
        return (
            <div className="col s12 m6" >
                <div className="card light-blue">
                    <div className="card-content white-text" style={{ maxHeight: '200px', minHeight: '200px' }}>
                        <span className="card-title">{title}</span>

                        <Link to={`/post/edit/${id}`} className="btn-floating halfway-fab waves-effect waves-light  orange"><i className="material-icons right">mode_edit</i></Link>

                        <div className="row">
                            <p className="col s6">Autor: {author}</p>
                            <p className="col s6">Categoria: {category}</p>
                        </div>
                        <p>{body}</p>
                    </div>
                    <div className="card-action white-text light-blue darken-1">

                        <Link to="" onClick={() => this.vote(id)} className="badge white-text">Votar
                        <span className="white-text"> | {voteScore}</span>
                        </Link>
                        <Link to={`/${category}/${id}`} className="white-text">Comentários<span className="white-text"> | {this.props.comments.length}</span></Link>
                        <Link to={`/${category}/${id}`} className="white-text">Ver Mais</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export { Posts };