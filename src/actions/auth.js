import database, {firebase, googleAuthProvider } from '../firebase/firebase';

export const login = (uid) => ({
    type: 'LOGIN',
    uid
});

export const startLogin = () => {
    return () => {
        return firebase.auth().signInWithPopup(googleAuthProvider);
    };
};

export const logout = () => ({
    type: 'LOGOUT'
});

export const startLogout = () => {
    return () => {
        return firebase.auth().signOut();
    };
};

export const setUsername = (username) => ({
    type: 'SET_USERNAME',
    username
});

export const startRetrieveUsername = (uid) => {
    return (dispatch) => {
        return database.ref(`users/${uid}/username`).once('value').then((snapshot) => {
            console.log(snapshot.val());
            dispatch(setUsername(snapshot.val()));
        });
    };
};

export const startSetUsername = (uid, username) => {
    return (dispatch) => {
        return database.ref(`users/${uid}`).update({username: username}).then(() => {
            dispatch(setUsername(username));
        });
    };
};