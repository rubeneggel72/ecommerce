import firebase from 'firebase/app'
import 'firebase/firestore'
const app = firebase.initializeApp(
    {
        apiKey: "AIzaSyA0Og9p_g7h6tFI8vJYTuYCeGMEO50nAPk",
        authDomain: "reactcoderhouse.firebaseapp.com",
        projectId: "reactcoderhouse",
        storageBucket: "reactcoderhouse.appspot.com",
        messagingSenderId: "479859163108",
        appId: "1:479859163108:web:7f8f9c0d44dce0b2cc51f1",
        measurementId: "G-8GGFYXCPDW"
    }
)
export const getfirebase = () => {
    return app

}
export const getFirestore = () => {
    return firebase.firestore()
}