import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'

import styles from '../styles/HomeStyles'

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View styles={styles.container} >
        
        <View style={{alignItems: 'center'}}>
          <Text style={styles.titleTop}>Home</Text>
        </View>

        <TouchableOpacity style={styles.touchImpar}>
          <View style={styles.viewItens}>
            <Image source={require("../../assets/asset2.png")} style={styles.viewImage}  />
            <Text style={styles.textTarefas}>Tarefa 01</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.touchPar}>
          <View style={styles.viewItens}>
            <Image source={require("../../assets/asset2.png")} style={styles.viewImage}  />
            <Text style={styles.textTarefas}>Tarefa 02</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.touchImpar}>
          <View style={styles.viewItens}>
            <Image source={require("../../assets/asset2.png")} style={styles.viewImage}  />
            <Text style={styles.textTarefas}>Tarefa 03</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.touchPar}>
          <View style={styles.viewItens}>
            <Image source={require("../../assets/asset1.png")} style={styles.viewImage}  />
            <Text style={styles.textTarefas}>Tarefa 04</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.touchImpar}>
          <View style={styles.viewItens}>
            <Image source={require("../../assets/asset1.png")} style={styles.viewImage}  />
            <Text style={styles.textTarefas}>Tarefa 05</Text>
          </View>
        </TouchableOpacity>

      </View>
    )
  }
}




