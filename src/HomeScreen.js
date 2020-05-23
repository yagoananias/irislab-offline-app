import React from 'react'
import { View, Text, Image } from 'react-native'

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{flex: 2,justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{}}>Home</Text>
        <Image source={require("../assets/asset2.png")} style={{width: 100, height: 100, borderRadius: 100/2, borderWidth: 2, borderColor: '#333'}}  />
      </View>
    )
  }
}

