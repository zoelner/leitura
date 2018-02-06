import { RECEIVE_COMMENTS } from "./ActionTypes";

export function receiveComments(comments) {
    return {
        type: RECEIVE_COMMENTS,
        comments
    }
}

