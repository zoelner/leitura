import { RECEIVE_POSTS, DELETE_POSTS, CREATE_POSTS, SORT_POST } from "../Actions/ActionTypes";
import sortBy from 'sort-by';

export function posts(state = [], action) {

    switch (action.type) {
        case RECEIVE_POSTS:
            return action.posts
        case DELETE_POSTS:
            return state.map(post => (post.id === action.id) ? { ...post, deleted: 'true' } : post)
        case CREATE_POSTS:
            const { id, timestamp, body, author, category, voteScore, deleted, commentCount } = action;
            return [
                ...state,
                {
                    id,
                    timestamp,
                    body,
                    author,
                    category,
                    voteScore,
                    deleted,
                    commentCount,
                }
            ]
        case SORT_POST:
            return (action.sort === 'voteScore') ? [...state.sort(sortBy(`${action.sort}`))] : [...state.sort(sortBy(action.sort))]
        default:
            return state;
    }
}

