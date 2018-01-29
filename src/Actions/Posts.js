import {
    RECEIVE_POSTS,
    DELETE_POSTS,
    CREATE_POSTS
} from "./ActionTypes";

export function receivePosts(posts) {
    return {
        type: RECEIVE_POSTS,
        posts
    }
}

export function deletePosts(id) {
    return {
        type: DELETE_POSTS,
        id
    }
}

export function createPosts(title, body, author, category) {
    return {
        type: CREATE_POSTS,
        id: Math.random().toString(36).substring(2),
        timestamp: Date.now(),
        title,
        body,
        author,
        category,
        voteScore: 1,
        deleted: false,
    }
}