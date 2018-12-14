import thunk from 'redux-thunk';
import {combineReducers, createStore, applyMiddleware, compose} from "redux";
import authReducer from "../reducers/auth";
import postsReducer from "../reducers/posts";
import filtersReducer from "../reducers/filters";
import viewOnlyPostsReducer from "../reducers/viewOnlyPostsReducer";

const composeEnhancers = window.__REDUX__DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    const store = createStore(
        combineReducers({
            posts: postsReducer,
            filters: filtersReducer,
            auth: authReducer,
            viewOnlyPosts: viewOnlyPostsReducer
        }),
        composeEnhancers(applyMiddleware(thunk))
    );

    return store;
};