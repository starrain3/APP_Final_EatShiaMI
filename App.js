import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet, Text, View,
  Image, Button, Dimensions,
  TouchableOpacity
} from 'react-native';


import { useEffect, useState } from 'react';

function sortPlace(x, y) {
  return ((x.rating == y.rating) ? 0 : ((x.rating > y.rating) ? -1 : 1));
}
export default function App() {
  const [placeInfo, setPlaceInfo] = useState([])

  handleSearchClick = (searchContext) => {
    fetch("https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=25.0338,121.5646&radius=1000&keyword=牛排&language=zh-TW&key=AIzaSyC49EMPbo6jSehZQSnX-SinYbqPr5W88Sw", {
      method: "GET"
    }).then(res => res.json()).then(data => {
        const sortedPlace = data.sort(sortPlace)
        this.setPlaceInfo(sortedPlace)
    })
    alert()
  }


  return (
    <View style={styles.container}>
      <HomeTitle></HomeTitle>
      <HomeImg></HomeImg>
      <HomeButton></HomeButton>


      <StatusBar style="auto" />
    </View>
  );
}

const HomeTitle = () => {
  return (
    <Text style={styles.homeTitle}>吃鯊米?</Text>
  );
};

const HomeImg = () => {
  return (
    <Image style={styles.homeImg} source={require('./assets/whatToEat.png')} ></Image>
  );
};

const HomeButton = () => {
  return (
    <TouchableOpacity style={styles.homeButton} onPress={handleRiceClick}>
      <Text style={styles.homeButtonText}>吃飯去</Text>
    </TouchableOpacity>
  );
}

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  homeImg: {
    // marginBottom: "10rem",
    height: windowHeight / 2,
    width: windowWidth,
    resizeMode: "stretch"
  },

  homeTitle: {
    fontSize: 100
  },

  homeButton: {

    width: windowWidth,
    backgroundColor: '#000',
    height: windowHeight / 4,
    // paddingTop: 50 ,
    alignItems: "center",
    justifyContent: 'center'

  },

  homeButtonText: {
    color: "#fff"
  }

});
