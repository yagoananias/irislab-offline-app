import React from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

import styles from '../styles/SignUpStyles'

export default class SignUpComponent extends React.Component {
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
        <Text style={styles.title}>Cadastrar</Text>
        <Text style={styles.text}>Insira seus dados</Text>
        <View style={styles.action}>
          <View style={[styles.section, {
            borderColor: this.state.borderColor=="account-circle" ? '#9256b1' : '#777'
          }]}>
            <MaterialIcons name="account-circle" size={20} color={this.state.borderColor=="account-circle" ? '#9256b1' : '#777'} />
            <TextInput
              placeholder="Nome"
              style={[styles.textInput, {
                color: this.state.borderColor=="account-circle" ? '#9256b1' : '#777'
              }]}
              onFocus={()=> this.onFocus("account-circle")}
              autoCorrect={false}/>
          </View>

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

        <TouchableOpacity style={styles.login}>
          <Text style={styles.textLogin}>Cadastrar</Text>
        </TouchableOpacity>
        <TouchableOpacity
            style={styles.voltar}
            onPress={() => this.props.navigation.navigate("SwiperScreen")}>
            <MaterialIcons name="arrow-back" size={10} />
            <Text style={styles.textVoltar}>Voltar</Text>
          </TouchableOpacity>
        <View style={styles.signup}>
          <Text style={[styles.textSignup], {color: '#777'}}>Já possui uma conta?</Text>
          <TouchableOpacity
          onPress={() => this.props.navigation.navigate("LoginScreen")}>
            <Text style={[styles.textSignup, {color: '#9256b1', marginLeft: 3}]}>Entrar</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

