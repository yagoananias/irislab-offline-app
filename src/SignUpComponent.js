import React from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

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
        <Text style={styles.title}>Sign Up</Text>
        <Text style={styles.text}>Sign Up with email</Text>
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
              placeholder="Password"
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
          <Text style={styles.textLogin}>Sign Up</Text>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    paddingHorizontal: 30,
    paddingVertical: 100
  },
  title: {
    color: '#9256b1',
    fontWeight: 'bold',
    fontSize: 30
  },
  text: {
    color: 'gray'
  },
  section: {
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: 15,
    paddingVertical: 10,
    alignItems: 'center',
    marginTop: 10
  },
  textInput: {
    flex: 1,
    paddingLeft: 10
  },
  forgot: {
    textAlign: 'right',
    marginTop: 15,
    color: '#9256b1'
  },
  textLogin: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold'
  },
  login: {
    width: '100%',
    height: 40,
    backgroundColor: '#9256b1',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
    borderRadius: 50
  },
  signup: {
    marginTop: 25,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  textSignup: {
    textAlign: 'center'
  },
  voltar: {
    width: '30%',
    height: 40,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 25,
    borderWidth: 0,
    borderRadius: 50,
    borderColor: '#4256b1'
  },
  textVoltar: {
    color: '#4256b1',
    fontSize: 13,
    fontWeight: '100'
  }
})