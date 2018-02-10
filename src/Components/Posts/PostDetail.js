import React, { Component } from 'react'
import { connect } from 'react-redux';
import { FooterView } from '../FooterView';
import { HeaderView } from '../HeaderView';
import Timestamp from 'react-timestamp';
import { Collapsible, Button } from 'react-materialize';
import CollapsibleItem from 'react-materialize/lib/CollapsibleItem';
import { createComment, postComment, receiveData, removeComment, receiveDataComments } from './../../Util';


class PostDetail extends Component {

    state = {
        body: '',
        author: ''
    }

    componentDidMount = async () => {
        if(this.props.post === undefined) {
            await this.props.receiveData(`posts/${this.props.match.params.id}`)
            await this.props.receiveDataComments(this.props.match.params.id)
        }
    }

    createComment = () => {
        const { body, author } = this.state
        this.props.createComment({ body, author }, this.props.match.params.id)
    }

    state = {
        vote: true
    }

    vote = (id) => {
        this.props.postComment(id, this.state.vote)
        this.setState({ vote: !this.state.vote })
    }

    render() {
        const { post, comments } = this.props;
        if (!this.props.post) { return <div>Loading...</div>}
        return (
           <div>
                <HeaderView />

                <div className="section no-pad-bot">
                    <div className="container">
                        <div className="section">
                            <h5>{post.title}</h5>
                            <div className="row divider"></div>
                            <div className="row">
                                <h6 className="col m6">Autor: {post.author}</h6>
                                <h6 className="col m6">Data de Criação: <Timestamp time={post.timestamp / 1000} format='date' /> </h6>
                            </div>
                            <div className="row">
                                {post.body} <br />
                            </div>
                            <div className="row"></div>
                            <h5>Comentários | {comments.length}</h5>
                            <div className="row divider"></div>

                            <div className="row">
                                <div className="col s6">
                                    <input type="text" placeholder="Comentário" onChange={(event) => this.setState({ body: event.target.value })}></input>
                                </div>
                                <div className="col s6">
                                    <input type="text" placeholder="Autor" onChange={(event) => this.setState({ author: event.target.value })}></input>
                                </div>
                                <div className="col s6">
                                    <button className="btn" onClick={this.createComment}>Adicionar</button>
                                </div>
                            </div>

                            <Collapsible>
                                {comments.map(comment =>
                                    <CollapsibleItem key={comment.id} header={comment.author} icon='face'>
                                        <div className="row">
                                            <div className="col s6">Data: <Timestamp time={comment.timestamp / 1000} format='date' /> </div>
                                            <div className="col s6" onClick={() => this.vote(comment.id)}>Votos: {comment.voteScore}</div>
                                        </div>
                                        <div className="row">
                                            <div className="col s12">{comment.body}</div>
                                        </div>
                                        <div className="row">
                                            <Button
                                                className="red btn pulse modal-close" waves='light'
                                                onClick={() => this.props.removeComment(comment.id)}
                                            >Apagar</Button>
                                        </div>

                                    </CollapsibleItem>
                                )}</Collapsible>

                        </div>

                    </div>
                </div>
                <FooterView />
            </div>
        )
    }
}

const mapStateToProps = (state, props) => ({
    post:  (state.posts instanceof Array) ? state.posts.find(post => post.id === props.match.params.id) :state.posts ,
    comments: state.comments.filter(comments => !comments.deleted).filter(comments => comments.parentId === props.match.params.id)
})

const mapDispatchToProps = { createComment, postComment, removeComment, receiveData, receiveDataComments }

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail);