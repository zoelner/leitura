import { receivePosts, receiveCategories, createPosts, votePost, receiveComments, deletePosts } from "../Actions";
import uuid from 'uuid'

export function receiveData(url) {
    return async (dispatch) => {
        const data = await fetch(`http://localhost:3001/${url}`, { headers: { 'Authorization': 'Zoelner' } })
        const response = await data.json();
        switch (url) {
            case 'posts':
                return dispatch(receivePosts(response))
            case 'categories':
                return dispatch(receiveCategories(response))
            default:
                break;
        }
    }
}

export function receiveDataComments(id) {
    return async (dispatch) => {
        const data = await fetch(`http://localhost:3001/posts/${id}/comments`, { headers: { 'Authorization': 'Zoelner' } })
        const response = await data.json();

        return dispatch(receiveComments(response))
    }
}


export function postData(data) {
    return async dispatch => {
        let response = await fetch(`http://localhost:3001/posts`, {
            method: "POST", headers: { 'Accept': 'application/json', 'Content-Type': 'application/json', 'Authorization': 'Zoelner' },
            body: JSON.stringify(Object.assign({}, data, { id: uuid(), timestamp: Date.now() }))
        })
        let posts = await response.json()
        return await dispatch(createPosts(await posts))
    }
}

export function updatePost(data, id) {
    return async dispatch => {
        await fetch(`http://localhost:3001/posts/${id}`, {
            method: "PUT", headers: { 'Accept': 'application/json', 'Content-Type': 'application/json', 'Authorization': 'Zoelner' },
            body: JSON.stringify(data)
        })
    }
}

export function removePost( id) {
    return async dispatch => {
        await fetch(`http://localhost:3001/posts/${id}`, {
            method: "DELETE", headers: { 'Accept': 'application/json', 'Content-Type': 'application/json', 'Authorization': 'Zoelner' },
        })
        dispatch(deletePosts(await id))
    }
}


export function postVote(id, vote) {
    return async dispatch => {
        let response = await fetch(`http://localhost:3001/posts/${id}`, {
            method: "POST", headers: { 'Accept': 'application/json', 'Content-Type': 'application/json', 'Authorization': 'Zoelner' },
            body: (vote) ? '{"option":"upVote"}' : '{"option":"downVote"}'
        })
        let posts = await response.json()
        return await dispatch(votePost(await posts))
    }
}