import { combineReducers } from "redux";
import { posts } from './Posts';
import { comments } from './Comments';
import { categories } from './Categories';

export default combineReducers({
    posts,
    comments,
    categories
})