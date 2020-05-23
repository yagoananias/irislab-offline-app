import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View styles={{flex: 1, justifyContent: 'center', paddingHorizontal: 30, paddingVertical: 100}} >
        
        <View style={{alignItems: 'center'}}>
          <Text style={{justifyContent: 'center', paddingVertical: 50, fontSize: 30, fontWeight: 'bold', color: '#9256b1'}}>Home</Text>
        </View>

        <TouchableOpacity style={{backgroundColor: '#C68DF8', borderRadius: 100/2, marginBottom: 8, marginHorizontal: 20}}>
          <View style={{justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center', paddingVertical: 10, paddingHorizontal: 70}}>
            <Image source={require("../assets/asset2.png")} style={{width: 80, height: 80, borderRadius: 100/2, borderWidth: 1, borderColor: '#9256b1'}}  />
            <Text style={{alignItems: 'center', fontSize: 20, color: 'white'}}>Tarefa 01</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={{backgroundColor: '#8ed4d3', borderRadius: 100/2, marginBottom: 8, marginHorizontal: 20}}>
          <View style={{justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center', paddingVertical: 10, paddingHorizontal: 70}}>
            <Image source={require("../assets/asset2.png")} style={{width: 80, height: 80, borderRadius: 70/2, borderWidth: 1, borderColor: '#9256b1'}}  />
            <Text style={{alignItems: 'center', fontSize: 20, color: 'white'}}>Tarefa 02</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={{backgroundColor: '#C68DF8', borderRadius: 100/2, marginBottom: 8, marginHorizontal: 20}}>
          <View style={{justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center', paddingVertical: 10, paddingHorizontal: 70}}>
            <Image source={require("../assets/asset2.png")} style={{width: 80, height: 80, borderRadius: 100/2, borderWidth: 1, borderColor: '#9256b1'}}  />
            <Text style={{alignItems: 'center', fontSize: 20, color: 'white'}}>Tarefa 03</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={{backgroundColor: '#8ed4d3', borderRadius: 100/2, marginBottom: 8, marginHorizontal: 20}}>
          <View style={{justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center', paddingVertical: 10, paddingHorizontal: 70}}>
            <Image source={require("../assets/asset2.png")} style={{width: 80, height: 80, borderRadius: 100/2, borderWidth: 1, borderColor: '#9256b1'}}  />
            <Text style={{alignItems: 'center', fontSize: 20, color: 'white'}}>Tarefa 04</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={{backgroundColor: '#C68DF8', borderRadius: 100/2, marginBottom: 8, marginHorizontal: 20}}>
          <View style={{justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center', paddingVertical: 10, paddingHorizontal: 70}}>
            <Image source={require("../assets/asset2.png")} style={{width: 80, height: 80, borderRadius: 100/2, borderWidth: 1, borderColor: '#9256b1'}}  />
            <Text style={{alignItems: 'center', fontSize: 20, color: 'white'}}>Tarefa 05</Text>
          </View>
        </TouchableOpacity>

      </View>
    )
  }
}

