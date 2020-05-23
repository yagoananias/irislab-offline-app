import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View styles={styles.container} >
        
        <View style={{alignItems: 'center'}}>
          <Text style={styles.titleTop}>Home</Text>
        </View>

        <TouchableOpacity style={styles.touchImpar}>
          <View style={styles.viewItens}>
            <Image source={require("../assets/asset2.png")} style={styles.viewImage}  />
            <Text style={styles.textTarefas}>Tarefa 01</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.touchPar}>
          <View style={styles.viewItens}>
            <Image source={require("../assets/asset2.png")} style={styles.viewImage}  />
            <Text style={styles.textTarefas}>Tarefa 02</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.touchImpar}>
          <View style={styles.viewItens}>
            <Image source={require("../assets/asset2.png")} style={styles.viewImage}  />
            <Text style={styles.textTarefas}>Tarefa 03</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.touchPar}>
          <View style={styles.viewItens}>
            <Image source={require("../assets/asset2.png")} style={styles.viewImage}  />
            <Text style={styles.textTarefas}>Tarefa 04</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.touchImpar}>
          <View style={styles.viewItens}>
            <Image source={require("../assets/asset2.png")} style={styles.viewImage}  />
            <Text style={styles.textTarefas}>Tarefa 05</Text>
          </View>
        </TouchableOpacity>

      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 30,
    paddingVertical: 100
  },
  titleTop: {
    justifyContent: 'center',
    paddingVertical: 50,
    fontSize: 30,
    fontWeight: 'bold',
    color: '#9256b1'
  },
  touchImpar: {
    backgroundColor: '#C68DF8',
    borderRadius: 100/2,
    marginBottom: 8,
    marginHorizontal: 20
  },
  touchPar: {
    backgroundColor: '#8ed4d3',
    borderRadius: 100/2,
    marginBottom: 8,
    marginHorizontal: 20
  },
  viewItens: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 70
  },
  viewImage: {
    width: 80,
    height: 80,
    borderRadius: 100/2,
    borderWidth: 1,
    borderColor: '#9256b1'
  },
  textTarefas: {
    alignItems: 'center',
    fontSize: 20,
    color: 'white'
  }

})



