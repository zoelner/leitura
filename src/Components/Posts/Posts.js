import React from 'react';
import { Link } from 'react-router-dom';

const Posts = (props) => {
    const { id, title, body, author, category, voteScore } = props.post;
    return (
        <div className="col s12 m6" >
            <div className="card light-blue">
                <div className="card-content white-text">
                    <span className="card-title">{title}</span>

                    <Link to={`/post/edit/${id}`} className="btn-floating halfway-fab waves-effect waves-light  orange"><i className="material-icons right">mode_edit</i></Link>

                    <div className="row">
                        <p className="col s6">Autor: {author}</p>
                        <p className="col s6">Categoria: {category}</p>
                    </div>
                    <p>{body}</p>
                </div>
                <div className="card-action white-text light-blue darken-1">

                    <Link to="/" className="badge white-text">Votar
                        <span className="white-text">{voteScore}</span>
                        </Link>
                    <Link to="/" className="white-text">Ver Mais</Link>
                </div>
            </div>
        </div>
    )
}

export { Posts };