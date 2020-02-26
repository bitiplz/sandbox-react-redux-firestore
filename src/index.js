import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { Provider } from 'react-redux'
import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/firestore' // <- needed if using firestore
import 'firebase/functions' // <- needed if using httpsCallable
import 'firebase/auth'
import { createStore, combineReducers, compose } from 'redux'
import { ReactReduxFirebaseProvider, firebaseReducer } from 'react-redux-firebase'
import { createFirestoreInstance, firestoreReducer } from 'redux-firestore'
import todos from './reducers/todos'
import cases from './reducers/cases'
import visibilityFilter from './reducers/visibilityFilter'

import App from './App';

const fbConfig = {

}

const rrfConfig = {}

firebase.initializeApp(fbConfig)
firebase.firestore() // <- needed if using firestore
firebase.auth().onAuthStateChanged(async user => {
	if (!user) {
	  await firebase.auth().signInAnonymously();
	}
  });

const rootReducer = combineReducers({
	firebase: firebaseReducer,
	firestore: firestoreReducer,
	todos,
	cases,
	visibilityFilter,
})

const initialState = {}
const store = createStore(rootReducer, initialState)

const rrfProps = {
	firebase,
	config: rrfConfig,
	dispatch: store.dispatch,
	createFirestoreInstance // <- needed if using firestore
  }

ReactDOM.render(
	<Provider store={store}>
		<ReactReduxFirebaseProvider {...rrfProps}>
			<App />
		</ReactReduxFirebaseProvider>
	</Provider>,
	document.getElementById('root')
)
