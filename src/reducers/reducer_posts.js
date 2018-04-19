import {FETCH_POSTS, FETCH_POST} from '../actions';
import _ from 'lodash';

export default function(state={}, action){
  // console.log(FETCH_POSTS)
  switch(action.type){
    case DELETE_POST:
      return _.omit(state, action.payload);
    case FETCH_POST: 
      // const post = action.payload.data;
      // const newState =  { ...state };
      // newState[post.id] = post;
      // return newState;
      // return _.mapKeys(action.payload.data, 'id');
      return { ...state, [action.payload.data.id] : action.payload.data };

    case FETCH_POSTS:
      console.log(_.mapKeys(action.payload.data, 'id'))
      return _.mapKeys(action.payload.data, 'id');

    default:
      return state;
  }
}
