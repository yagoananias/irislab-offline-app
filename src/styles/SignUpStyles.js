import { StyleSheet } from 'react-native'

export default StyleSheet.create({
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