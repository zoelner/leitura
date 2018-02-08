import { RECEIVE_COMMENTS, ADD_COMMENTS } from "../Actions/ActionTypes";

export function comments(state = [], action) {
    switch (action.type) {
        case RECEIVE_COMMENTS:
            return [
                ...state,
                ...action.comments
                ]
        case ADD_COMMENTS:
                return [
                    ...state,
                    action.comment
                ]
        default:
            return state;
    }
}