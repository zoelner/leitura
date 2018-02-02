import { receivePosts, receiveCategories, createPosts } from "../Actions";

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

export function postData(data) {
    return async dispatch => {
        let response = await fetch(`http://localhost:3001/posts`, {
            method: "POST", headers: { 'Accept': 'application/json', 'Content-Type': 'application/json', 'Authorization': 'Zoelner' },
            body: JSON.stringify(Object.assign({}, data, { id: Math.random().toString(36).substring(2), timestamp: Date.now() }))
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