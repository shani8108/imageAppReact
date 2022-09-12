import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, ScrollView, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons'
import { Zocial } from '@expo/vector-icons'
import { useState } from 'react';

export default function App() {
  const img1 = 'https://10pri.biz/wp-content/uploads/2020/01/vegetable-1_compressed.jpg';
  const img2 = 'https://meshekd.co.il/wp-content/uploads/2021/04/collection-vegetables-isolated-white-background-1.jpg';

  const src1 = './assets/uman.jpg';
  const src2 = './assets/home.jpg';
  const [imgUrl, setImgUrl] = useState(img1);
  const [imgSrc, setImgSrc] = useState(src1);

  return (
    <View style={styles.container}>
      {/* <StatusBar style="auto" /> */}
      <Text>Images!</Text>
      <ScrollView>
        <View>
          <Button title='get next' onPress={() => { setImgUrl(img2) }}></Button>
        </View>
        <TouchableOpacity onPress={() => { setImgUrl(img1) }}>
          <Ionicons name="reload" size={100} color="pink" ></Ionicons>
        </TouchableOpacity>
        <View>
          <Ionicons name="home" size={100} color="green"></Ionicons>
          <Zocial name="acrobat" size={50} color="red"></Zocial>
          <View style={styles.imagecontainer}>
            <Image style={styles.img} source={require('./assets/uman.jpg')}></Image>
          </View>
          <View style={styles.imagecontainer}>
            <Image style={styles.img} source={{ uri: imgUrl }}></Image>
          </View>
          <View>
            <Button title='get next' onPress={() => { setImgSrc(src2) }}></Button>
          </View>
          <TouchableOpacity onPress={() => { setImgSrc(src1) }}>
            <Ionicons name="reload" size={100} color="pink" ></Ionicons>
          </TouchableOpacity>
          <View style={styles.imagecontainer}>
            <Image style={styles.img} source={{ imgSrc }}></Image>
          </View>
        </View>
      </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }, imagecontainer: {
    width: 300,
    height: 300,
    margin: 1,
    borderColor: "000",
    borderWidth: 3,
    overflow: "hidden",
    borderRadius: 110
  }, img: {
    width: '100%',
    height: '100%'
  }
});
