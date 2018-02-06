import React, { Component } from 'react'
import { connect } from 'react-redux';
import { FooterView } from '../FooterView';
import { HeaderView } from '../HeaderView';
import Timestamp from 'react-timestamp';
import { Collapsible } from 'react-materialize';
import CollapsibleItem from 'react-materialize/lib/CollapsibleItem';
import { receiveDataComments } from '../../Util';


class PostDetail extends Component {
    async componentDidMount() {
        const { fetchData, post } = this.props;
        const { id } = post;
        await fetchData(id)
    }

    render() {
        const { post, comments } = this.props;
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
                            <h5>Comentários</h5>
                            <div className="row divider"></div>
                            <Collapsible>
                                {comments.map(comment =>
                                    <CollapsibleItem key={comment.id} header={comment.author} icon='face'>
                                        <div className="row">
                                            <div className="col s6">Data: <Timestamp time={comment.timestamp / 1000} format='date' /> </div>
                                            <div className="col s6">Votos: {comment.voteScore}</div>
                                        </div>
                                        <div className="row">
                                            <div className="col s12">{comment.body}</div>
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
    post: state.posts.find(post => post.id === props.match.params.id),
    comments: state.comments.filter(comments => !comments.deleted)
})
const mapDispatchToProps = (dispatch) => ({
    fetchData: (url, id) => dispatch(receiveDataComments(url, id)),
})
export default connect(mapStateToProps, mapDispatchToProps)(PostDetail);