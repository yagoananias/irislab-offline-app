import React from 'react';
import { Text, View, Image, TouchableOpacity, ImageBackground } from 'react-native';
import Swiper from 'react-native-swiper'
import * as Animatable from 'react-native-animatable'
import LottieView from 'lottie-react-native'

import apolo from '../../assets/apolo-animation.json'
import styles from '../styles/SwiperStyles'

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
            <Image source={require("../../assets/asset1.png")}
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

        <ImageBackground source={require("../../assets/bg3.jpg")} style={styles.slide}>
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


