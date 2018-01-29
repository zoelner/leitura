import { receivePosts, receiveCategories } from "../Actions";

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