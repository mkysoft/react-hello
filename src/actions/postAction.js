import axios from 'axios';
import { FETCH_POSTS, NEW_POST } from './types';


export const fetchPosts = () => dispatch => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => dispatch({
            type: FETCH_POSTS,
            payload: response.data
        }))
}

export const createPost = (postData) => dispatch => {
    axios.post('https://jsonplaceholder.typicode.com/posts', postData, { headers: { 'content-type': 'application/json' } })
        .then(response => {
            response.data["title"] = postData.title;
            response.data["body"] = postData.body;
            dispatch({
                type: NEW_POST,
                payload: response.data
            })
        });
}