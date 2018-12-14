import database from "../firebase/firebase";

export const setViewOnlyPosts = (uid, username, posts) => {
    return {
        type: 'SET_VIEW_ONLY_POSTS',
        uid,
        username,
        posts
    }
};

export const startSetViewOnlyPosts = (uid) => {
    return (dispatch) => {
        return database.ref(`users/${uid}/posts`).once('value').then((snapshot) => {
            const posts = [];
            snapshot.forEach((childSnapshot) => {
                posts.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                });
            });

            return database.ref(`users/${uid}/username`).once('value').then((snapshot2) => {
                const username = snapshot2.val();
                dispatch(setViewOnlyPosts(uid, username, posts));
            });
        });
    }
};
