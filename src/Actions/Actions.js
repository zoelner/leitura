import { RECEIVE_POSTS, DELETE_POSTS, CREATE_POSTS } from "./ActionTypes";

export function receivePostsData() {
    return (dispatch) => {
        fetch('http://localhost:3001/posts', {
            headers:
                {
                    'Authorization': 'Zoelner'
                }
            })
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                return response;
            })
            .then(response => response.json())
            .then(data => dispatch(receivePosts(data)))
    }
}

export function receivePosts( posts ) {
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

export function createPosts() {
    return {
        type: CREATE_POSTS,
        id: 'dksajdlskajIsadsai',
        timestamp: Date.now(),
        title: 'O Alto da Glória',
        body: 'O músico',
        author: 'Everton',
        category: 'React',
        voteScore: 1,
        deleted: false,
    }
}