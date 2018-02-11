import {RECEIVE_COMMENTS, ADD_COMMENTS, VOTE_COMMENT, DELETE_COMMENTS, EDIT_COMMENTS} from "./ActionTypes";

export function receiveComments(comments) {
    return {
        type: RECEIVE_COMMENTS,
        comments
    }
}

export function addComment(comment) {
    return {
        type: ADD_COMMENTS,
        comment
    }
}

export function voteComment(comment) {
    return {
        type: VOTE_COMMENT,
        comment
    }
}

export function deleteComment(id) {
    return {
        type: DELETE_COMMENTS,
        id
    }
}

export function editComment(data) {
    return {
        type: EDIT_COMMENTS,
        data
    }
}