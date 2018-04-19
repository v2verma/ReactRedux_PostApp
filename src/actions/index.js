import axios from 'axios';

export const FETCH_POSTS = 'fetch_posts';
export const FETCH_POST = 'fetch_post';
export const DELETE_POSTS = 'delete_post';
export const CREATE_POSTS = 'create_posts';

const ROOT_URL = 'https://reduxblog.herokuapp.com/api';
const API_KEY = '?key=PAPERCLIP1234'


function getStuffSuccess(response) {
  console.log(response)
  return {
    type: FETCH_POSTS,
    payload: response
  }
}

function getStuffError(err) {
  return {
    type: FETCH_POSTS,
    payload: err
  }
}

export function fetchPosts() {
  return function (dispatch) {
    axios.get(`${ROOT_URL}/posts${API_KEY}`)
      .then((response) => {
        dispatch(getStuffSuccess(response))
      })
      .catch((err) => {
        dispatch(getStuffError(err))
      })
  }
}

function getPost(response){
  return {
    type: FETCH_POST,
    payload: response
  }
}
function getPostError(err) {
  return {
    type: FETCH_POST,
    payload: err
  }
}

export function fetchPost(id) {
  return function (dispatch) {
    axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`)
      .then((response) => {
        dispatch(getPost(response))
      })
      .catch((err) => {
        dispatch(getPostError(err))
      })
  }
}

export function deletePost(id, callback) {
  const request = axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`)
    .then( () => callback());
  return {
    type: DELETE_POSTS,
    payload: id
  }
}

export function createPosts(values, callback) {
  const request = axios.post(`${ROOT_URL}/posts${API_KEY}`,values)
    .then(()=> callback());
  return {
    type: CREATE_POSTS,
    payload: request
  }
}
