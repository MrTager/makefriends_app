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

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


// const App = () => {
//   let num = 100;
//   setInterval(()=>{
//     num++
//   },1000);

//   return <View>
//     <Text>{num}</Text>
//   </View>
// }

class App extends React.Component{
  state = {
    num:100
  }
  componentDidMount(){
    alert("发送异步请求")
  }
  render(){
    // setTimeout(()=>{
    //   this.setState({
    //     num:this.state.num+1
    //   })
    // },1000)
    return <View>
      <Text>{this.state.num}</Text>
    </View>
  }
}

export default App;
