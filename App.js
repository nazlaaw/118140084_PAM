import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ActionSheetIOS, StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Volume from './Volume'; 

const dataGlobal = {
  volumeMic: 30,
  volumeMusic:  30
}

const reducerIndex = (state = dataGlobal, action) => {

  if(action.type === "VOLUME_UP_MIC"){
    return {
      ...state,
      volumeMic: state.volumeMic + 10
    }
  }

  if(action.type === "VOLUME_DOWN_MIC"){
    if(state.volumeMic > 0){
      return {
        ...state,
        volumeMic: state.volumeMic - 10
      }
    } else {
      return  {
        ...state,
        volumeMic: 0
      }
    }
  }

  if(action.type === "VOLUME_UP_MUSIC"){
    return {
      ...state,
      volumeMusic: state.volumeMusic + 5
    }
  }

  if(action.type === "VOLUME_DOWN_MUSIC"){
    if(state.volumeMusic > 0){
      return {
        ...state,
        volumeMusic: state.volumeMusic - 5
      }
    } else {
      return  {
        ...state,
        volumeMusic: 0
      }
    }
  }

  return state;
}

const store = createStore(reducerIndex);

export default function App() {
  return (
    <Provider store={store}>
      <Volume />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
