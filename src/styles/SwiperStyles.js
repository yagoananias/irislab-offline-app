import { StyleSheet, Dimensions }  from 'react-native';

const { width, height } = Dimensions.get("screen")
const height_image = height * 0.5 * 0.8
const width_image = height_image * 1.1
const width_button = width * 0.3

export default StyleSheet.create({
  slide: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  footer: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 20
  },
  image: {
    height: height_image,
    width: width_image
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#9256b1',
    alignItems: 'center'
  },
  text: {
    color: 'gray',
    textAlign: 'center',
    marginTop: 20,
    paddingBottom: 10
  },
  dot: {
    backgroundColor: '#9946b1',
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 5,
    marginVertical: 3
  },
  activeDot: {
    backgroundColor: '#5046b1',
    width: 20,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 5,
    marginVertical: 3
  },
  button: {
    width: width_button,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center'
  },
  bg: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  animaApolo: {
    width: 350,
    height: 350,    
  }
})