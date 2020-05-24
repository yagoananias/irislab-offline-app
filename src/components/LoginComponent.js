import React from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

import styles from '../styles/LoginStyles'

export default class LoginComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      borderColor: null
    }
  }

  onFocus(value) {
    this.setState({
      borderColor: value
    })
  }

  render() {
    return(
      <View style={styles.container}>
        <Text style={styles.title}>Entrar</Text>
        <Text style={styles.text}>Entre com seu email</Text>
        <View style={styles.action}>
          <View style={[styles.section, {
            borderColor: this.state.borderColor=="email" ? '#9256b1' : '#777'
          }]}>
            <MaterialIcons name="email" size={20} color={this.state.borderColor=="email" ? '#9256b1' : '#777'} />
            <TextInput
              placeholder="E-mail"
              style={[styles.textInput, {
                color: this.state.borderColor=="email" ? '#9256b1' : '#777'
              }]}
              onFocus={()=> this.onFocus("email")}
              autoCorrect={false}/>
          </View>

          <View style={[styles.section, {
            borderColor: this.state.borderColor=="password" ? '#9256b1' : '#777'
          }]}>
            <MaterialIcons name="lock" size={20} color={this.state.borderColor=="password" ? '#9256b1' : '#777'} />
            <TextInput
              placeholder="Senha"
              style={[styles.textInput, {
                color: this.state.borderColor=="password" ? '#9256b1' : '#777'
              }]}
              secureTextEntry
              onFocus={()=> this.onFocus("password")} />
          </View>

        </View>
        <TouchableOpacity>
          <Text style={styles.forgot}>Esqueceu a senha?</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.login}
          onPress={() => this.props.navigation.navigate("DashboardHome")}>
          <Text style={styles.textLogin}>Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity
            style={styles.voltar}
            onPress={() => this.props.navigation.navigate("SwiperScreen")}>
            <MaterialIcons name="arrow-back" size={10} />
            <Text style={styles.textVoltar}>Voltar</Text>
          </TouchableOpacity>

        <View style={styles.signup}>
          <Text style={[styles.textSignup], {color: '#777'}}>Não possui uma conta?</Text>
          <TouchableOpacity
          onPress={() => this.props.navigation.navigate("SignUpScreen")}>
            <Text style={[styles.textSignup, {color: '#9256b1', marginLeft: 3}]}>Criar conta</Text>
          </TouchableOpacity>

          
        </View>
      </View>
    )
  }
}

