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

export function postData(url, data) {
    return async dispatch => {
        const body = Object.assign({}, data, { id: Math.random().toString(36).substring(2) , timestamp: Date.now()})
        await fetch(`http://localhost:3001/${url}`,{
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Zoelner'
            },
            body: JSON.stringify(body)
        })

        switch (url) {
            case 'posts':
                return await dispatch(createPosts(body))
            default:
                break;
        }
    }
}