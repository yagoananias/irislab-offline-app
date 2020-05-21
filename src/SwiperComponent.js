import React from 'react';
import { Text, View, StyleSheet, Image, Dimensions } from 'react-native';
import Swiper from 'react-native-swiper'

export default class SwiperComponent extends React.Component {
  render() {
    return(
      <Swiper>
        <View style={styles.slide}>
          <View style={styles.header}>
            <Image source={require("../assets/asset1.png")}
                    style={styles.image}
            />

          </View>
          <View style={styles.footer}>

          </View>

        </View>
      </Swiper>
    )
  }
}

const { width, height } = Dimensions.get("screen")
const height_image = height * 0.5 * 0.8
const width_image = height_image * 1.1

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
  }
})
