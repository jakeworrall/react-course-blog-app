const viewOnlyPostsReducerDefaultState = {uid: undefined, posts: []};

export default (state = viewOnlyPostsReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_VIEW_ONLY_POSTS':
            return {
                uid: action.uid,
                username: action.username,
                posts: action.posts
            };
        default:
            return state;
    }
};