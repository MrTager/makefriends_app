/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Dimensions,
  TouchableOpacity,
  Image,
  ImageBackground,
  TextInput
} from 'react-native';

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);
import axios from "axios";

import RootStore from "./mobx";
import { Provider } from "mobx-react"
import Btn from "./components/Btn"

class App extends React.Component{
 
  render(){
    return <View>
      <Provider RootStore={RootStore}>
        <Btn></Btn>
      </Provider>
    </View>
  }
}

export default App;
