import React from 'react';
import { Text, View, StyleSheet, Image, Dimensions, TouchableOpacity, ImageBackground } from 'react-native';
import Swiper from 'react-native-swiper'
import * as Animatable from 'react-native-animatable'
import LottieView from 'lottie-react-native'

import apolo from '../assets/apolo-animation.json'

let texto = "Buscando apresentar a tecnologia aos pequenos de uma maneira equilibrada, nós da Iris Lab ajudaremos seu filho a desenvolver suas próprias habilidades de forma prática promovendo a união entre a criança, os pais e o ambiente a sua volta."


export default class SwiperComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      animation_signup: null,
      animation_login: null,
      show: false
    }
  }

  onIndexChanged(index) {
    if(index==2) {
      this.setState({
        animation_signup: 'bounceInLeft',
        animation_login: 'bounceInRight',
        show: true
      })
    }
    else {
      this.setState({
        animation_signup: null,
        animation_login: null,
        show: false
      })
    }
  }

  render() {
    return(
    <Swiper
    loop={false}
    dot={<View style={styles.dot}/>}
    activeDot={<View style={styles.activeDot} />}
    onIndexChanged={(index)=>this.onIndexChanged(index)}>
      
        <View style={styles.slide}>
          <View style={styles.header}>
            <Image source={require("../assets/asset1.png")}
                    style={styles.image}
                    resizeMode={"stretch"}>
            </Image>
            <View style={styles.title}>
            <Text style={styles.title}>Iris Lab</Text>
            <Text style={styles.text}>{texto}</Text>
          </View>
          </View>

          
        </View>
        
        <View style={styles.slide}>
          <View style={styles.header}>
          <LottieView source={apolo} resizeMode="cover" style={styles.animaApolo} autoPlay loop />
          </View>

          <View style={styles.footer}>
            <Text style={styles.title}>Conheça o Apolo!</Text>
            <Text style={styles.text}>E sua turma :)</Text>
          </View>
        </View>

        <ImageBackground source={require("../assets/bg3.jpg")} style={styles.slide}>
          <View style={styles.header}>
            
          </View>

          <View style={styles.footer}>
            <Text style={styles.title}>Entre agora</Text>
            <Text style={styles.text}>e começe a usar</Text>
            {this.state.show ?
            <View style={{flexDirection: 'row'}}>
              <Animatable.View animation={this.state.animation_signup} delay={0} duration={1500} useNativeDriver>              
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate("SignUpScreen")}
                  style={[styles.button, {
                  borderColor: 'purple',
                  borderWidth: 1,
                  borderRadius: 50,
                  marginTop: 15
                }]}>
                  <Text style={{color: 'purple'}}>Cadastrar</Text>                
                </TouchableOpacity>
              </Animatable.View>
              
              <Animatable.View animation={this.state.animation_login} delay={0} duration={1500} useNativeDriver>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate("LoginScreen")}
                  style={[styles.button, {
                  backgroundColor: 'purple',
                  borderRadius: 50,
                  marginTop: 15,
                  marginLeft: 20
                }]}>                
                  <Text style={{color: 'white'}}>Entrar</Text>                
                </TouchableOpacity>
              </Animatable.View>
            </View>
            :null}
            
          </View>
        </ImageBackground>
      </Swiper>
    )
  }
}

const { width, height } = Dimensions.get("screen")
const height_image = height * 0.5 * 0.8
const width_image = height_image * 1.1
const width_button = width * 0.3

const styles = StyleSheet.create({
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
