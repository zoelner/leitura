import {
    RECEIVE_POSTS,
    DELETE_POSTS,
    CREATE_POSTS,
    SORT_POST,
    VOTE_POST,
} from "./ActionTypes";

export function receivePosts(posts) {
    return {
        type: RECEIVE_POSTS,
        posts
    }
}

export function orderPost(sort) {
    return {
        type: SORT_POST,
        sort
    }
}

export function deletePosts(id) {
    return {
        type: DELETE_POSTS,
        id
    }
}

export function createPosts(posts) {
    return {
        type: CREATE_POSTS,
        posts,
    }
}

export function votePost(post) {
    return {
        type: VOTE_POST,
        post
    }
}