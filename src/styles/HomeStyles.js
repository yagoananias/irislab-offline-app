import { StyleSheet } from 'react-native'

export default StyleSheet.create({
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