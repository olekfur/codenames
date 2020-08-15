import app from 'firebase/app';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAdI5EGTwxrOzenbi_HNIggR20v4wTWobo",
    authDomain: "codenames-f10d9.firebaseapp.com",
    databaseURL: "https://codenames-f10d9.firebaseio.com",
    projectId: "codenames-f10d9",
    storageBucket: "codenames-f10d9.appspot.com",
    messagingSenderId: "148689535750",
    appId: "1:148689535750:web:0d4721ff3fe2cefcdd5487",
    measurementId: "G-ME5GGPGEEK"
}

class Firebase {
    constructor() {
        app.initializeApp(config);

        this.auth = app.auth();
    }

    // *** Auth API ***

    doCreateUserWithEmailAndPassword = (email, password) => 
        this.auth.createUserWithEmailAndPassword(email, password);

    doSignInWithEmailAndPassword = (email, password) =>
        this.auth.signInWithEmailAndPassword(email, password);

    doSignOut = () => this.auth.signOut();

    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

    doPasswordUpdate = password => this.auth.currentUser.updatePassword(password);
}

export default Firebase;