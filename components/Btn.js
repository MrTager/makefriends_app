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

import { inject } from "mobx-react";

@inject("RootStore")
class Btn extends React.Component{
render(){
    return (<View>
    <Text>Btn:{this.props.RootStore.name}</Text>
    </View>
    );
}
}

export default Btn