/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReduxers, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import reducer from './app/reducers'
import AppContainer from './app/containers/AppContainer'
import { persistStore, autoRehydrate } from 'redux-persist'
import { AsyncStorage } from 'react-native'

import {
  AppRegistry,
} from 'react-native';

const loggerMiddleware = createLogger({ predicate: (getState, action) => __DEV__});

function configureStore(initialState) {
  const enhancer = compose(
      applyMiddleware(
          thunkMiddleware,
          loggerMiddleware,
        ),
      autoRehydrate()
    );
  return createStore(reducer, initialState, enhancer);
}

const store = configureStore({});
persistStore(store, { storage: AsyncStorage })

const App = () => (

    <Provider store={store}>
      <AppContainer>
      </AppContainer>
    </Provider>

  );


AppRegistry.registerComponent('ReduxLogin', () => App);
