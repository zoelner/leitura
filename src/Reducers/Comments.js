import {RECEIVE_COMMENTS, ADD_COMMENTS, VOTE_COMMENT, DELETE_COMMENTS, EDIT_COMMENTS} from "../Actions/ActionTypes";

export function comments(state = [], action) {
    switch (action.type) {
        case RECEIVE_COMMENTS:
            return [
                ...state,
                ...action.comments
            ];
        case ADD_COMMENTS:
            return [
                ...state,
                action.comment
            ];
        case VOTE_COMMENT:
            return state.map(comment => {
                if (comment.id === action.comment.id) {
                    return action.comment
                } else {
                    return comment
                }
            })
        case DELETE_COMMENTS:
            return state.map(comment => (comment.id === action.id) ? { ...comment, deleted: 'true' } : comment)
        case EDIT_COMMENTS:
            return state.map(comment => {
                if(comment.id === action.data.id ){
                    return action.data
                }
                return comment
            })
        default:
            return state;
    }
}