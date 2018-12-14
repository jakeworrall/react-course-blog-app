export default (state = {}, action) => {
    switch(action.type){
        case 'LOGIN':
            return {
                uid: action.uid
            };
        case 'LOGOUT':
            return {};
        case 'SET_USERNAME':
            console.log(state);
            console.log({...state, username: action.username});
            return {
                ...state,
                username: action.username
            };
        default:
            return state;
    }
};