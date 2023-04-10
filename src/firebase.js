import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: 'chitchat-49e76.firebaseapp.com',
  projectId: 'chitchat-49e76',
  storageBucket: 'chitchat-49e76.appspot.com',
  messagingSenderId: '167456525552',
  appId: '1:167456525552:web:a98166cde474a00f9e8635',
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
