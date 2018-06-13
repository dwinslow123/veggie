import { auth } from './firebase';

// Sign up
export const doCreateUserWithEmailAndPassword = (email, password) => {
  auth.createUserWithEmailAndPassword(email, password);
}

// Sign In
export const doSignInUserWithEmailAndPasswod = (email, password) => {
  auth.signInUserWithEmailAndPassword(email, password);
}

// Sign Out
export const doSignOut = () => {
  auth.signOut();
}

// Password Reset
export const doPasswordReset = (email) => {
  auth.sendPasswordResetEmail();
}

// Pasword Change
export const doPasswordChange = (password) => {
  auth.currentUser.updatePassword(password);
}