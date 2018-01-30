import React from 'react';
import { Link } from 'react-router-dom';

const Posts = (props) => {
    const { title, body, author, category, voteScore } = props.post;
    return (
        <div className="col s12 m6">
            <div className="card light-blue">
                <div className="card-content white-text">
                    <span className="card-title">{title}</span>
                    <div className="row">
                        <p className="col s6">Autor: {author}</p>
                        <p className="col s6">Categoria: {category}</p>
                    </div>
                    <p>{body}</p>
                </div>
                <div className="card-action white-text light-blue darken-1">

                    <Link to="/" className="badge white-text">Votar
                        <span className="white-text"> {voteScore}</span>
                        </Link>
                    <Link to="/" className="white-text">Comentar</Link>
                </div>
            </div>
        </div>
    )
}

export { Posts };