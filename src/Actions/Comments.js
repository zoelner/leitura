import { RECEIVE_COMMENTS, ADD_COMMENTS } from "./ActionTypes";

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

