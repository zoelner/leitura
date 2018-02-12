import React, { Component } from 'react'
import { connect } from 'react-redux';
import { FooterView } from '../FooterView';
import { HeaderView } from '../HeaderView';
import Timestamp from 'react-timestamp';
import { Collapsible, Button } from 'react-materialize';
import CollapsibleItem from 'react-materialize/lib/CollapsibleItem';
import { createComment, postComment, receiveData, removeComment, receiveDataComments, updateComment, postVote } from './../../Util';
import sortBy from 'sort-by'

class PostDetail extends Component {

    state = {
        commentId: '',
        commentBody: '',
        commentAuthor: '',
        commentEdit: false,
        vote: true,
        post: true,
    }

    componentDidMount = async () => {
        if(!this.props.post) {
            await this.props.receiveData(`posts/${this.props.match.params.id}`)
            await this.props.receiveDataComments(this.props.match.params.id)
        }


    }

    editComment = (id) => {
        let body = this.state.commentBody
        let timestamp = Date.now()
        this.props.updateComment({body, timestamp}, id)
    }

    createComment = () => {
        let body = this.state.commentBody
        let author = this.state.commentAuthor
        this.props.createComment({ body, author }, this.props.match.params.id)
    }

    vote = (id) => {
        this.props.postComment(id, this.state.vote)
        this.setState({ vote: !this.state.vote })
    }

    votePost = (id) => {
        this.props.postVote(id, this.state.vote)
        this.setState({ vote: !this.state.vote })
    }

    render() {
        const { post, comments } = this.props;
        if (!this.props.post) { return <div>Loading...</div>}


        if(Object.keys(this.props.post).length <= 0 ){
            alert('Post não encontrado')
            return <div> Post não encontrado </div>
        }
        return <div>
            <HeaderView/>
            <div className="section no-pad-bot">
                <div className="container">
                    <div className="section">
                        <h5>{post.title}</h5>
                        <div className="row divider"></div>
                        <div className="row">
                            <h6 className="col m4">Autor: {post.author}</h6>
                            <h6 className="col m4">Data de Criação: <Timestamp time={post.timestamp / 1000}
                                                                               format='date'/></h6>
                            <h6 className="col m4" onClick={() => this.votePost(post.id)} >Votos: {post.voteScore}</h6>
                        </div>
                        <div className="row">
                            {post.body} <br/>
                        </div>
                        <div className="row"></div>
                        <h5>Comentários | {comments.length}</h5>
                        <div className="row divider"></div>

                        <div className="row">
                            <div className="col s6">
                                <input type="text" placeholder="Comentário"
                                       onChange={(event) => this.setState({commentBody: event.target.value})}></input>
                            </div>
                            <div className="col s6">
                                <input type="text" placeholder="Autor"
                                       onChange={(event) => this.setState({commentAuthor: event.target.value})}></input>
                            </div>
                            <div className="col s6">
                                <button className="btn" onClick={this.createComment}>Adicionar</button>
                            </div>
                        </div>

                        <Collapsible>
                            {comments.sort(sortBy('-voteScore')).map(comment =>
                                <CollapsibleItem key={comment.id} header={comment.author} icon='face'>
                                    <div className="row">
                                        <div className="col s6">Data: <Timestamp time={comment.timestamp / 1000}
                                                                                 format='date'/>
                                        </div>
                                        <div className="col s6"
                                             onClick={() => this.vote(comment.id)}>Votos: {comment.voteScore}</div>
                                    </div>
                                    <div className="row">
                                        <div className="col s12">{comment.body}</div>
                                    </div>
                                    <div className="row">
                                        <Button
                                            className="red btn pulse" waves='light'
                                            onClick={() => this.props.removeComment(comment.id)}
                                        >Apagar</Button>
                                        <Button
                                            className="blue btn pulse" waves='light'
                                            onClick={() => {
                                                this.setState({commentEdit: !this.state.commentEdit})
                                                this.setState({commentBody: comment.body}) }
                                            }
                                        >Editar</Button>
                                    </div>

                                    {this.state.commentEdit && <div className="row">
                                        <div className="col s6">
                                            <input type="text" placeholder="Comentário" defaultValue={comment.body}
                                                   onChange={(event) => this.setState({commentBody: event.target.value})}></input>
                                        </div>
                                        <div className="col s6">
                                            <button className="btn" onClick={ () => {
                                                this.editComment(comment.id)
                                                this.setState({commentEdit: !this.state.commentEdit})
                                            }
                                            }>Editar</button>
                                        </div>
                                    </div>}

                                </CollapsibleItem>
                            )}</Collapsible>

                    </div>

                </div>
            </div>
            <FooterView/>
        </div>
    }
}

const mapStateToProps = (state, props) => ({
    post:  (state.posts instanceof Array) ? state.posts.find(post => post.id === props.match.params.id) :state.posts ,
    comments: state.comments.filter(comments => !comments.deleted).filter(comments => comments.parentId === props.match.params.id)
})

const mapDispatchToProps = { createComment, postComment, removeComment, receiveData, receiveDataComments, updateComment, postVote }

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail);