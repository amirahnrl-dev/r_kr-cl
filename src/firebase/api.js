import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    
};

export const createUserDoc = async(userAuth, extraData) => {
    if (!userAuth) return;  // if null

    //console.log(firestore.doc('users/akjshakjhdgskhg'));

    const userRef = firestore.doc(`users/${ userAuth.uid }`);
    const snapShot = await userRef.get();
    //console.log(snapShot);

    // checking if exists already
    if(!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...extraData
            })
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;

/*
firestore
.collection('users').doc('hashed id here')
.collection('cartItems').doc('hashed id here');

OR

firestore.doc('/users/hashed id/cartItems/hashed id');

To get collection in the cartItemms,
firestore.collection('/users/hashed id/cartItems');
*/