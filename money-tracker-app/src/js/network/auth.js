import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from 'firebase/auth';
import { auth } from '../utils/firebase';

const Auth = {
  async register({ email, password }) {
    return await createUserWithEmailAndPassword(auth, email, password);
  },

  async login({ email, password }) {
    return await signInWithEmailAndPassword(auth, email, password);
  },

  async logout() {
    return await signOut(auth);
  },

  async updateProfile(user, { displayName = null } = {}) {
    return await updateProfile(user, {
      displayName,
    });
  },
};

export default Auth;
