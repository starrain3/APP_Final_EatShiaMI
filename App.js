import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, 
          Image, Button, Dimensions,
          TouchableOpacity } from 'react-native';



export default function App() {
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
    <Text style = {styles.homeTitle}>吃鯊米?</Text>
  );
};

const HomeImg = () => {
  return (
    <Image style = {styles.homeImg} source={require('./assets/whatToEat.png')} ></Image>
  );
};

const HomeButton = () => {
  return (
    <TouchableOpacity style={styles.homeButton} onPress={() => console.log('Button clicked')}>
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

  homeImg : {
    // marginBottom: "10rem",
    height: windowHeight/2,
    width: windowWidth,
    resizeMode: "stretch"
  },

  homeTitle : {
    fontSize: 100
  },

  homeButton: {

    width: windowWidth,
    backgroundColor: '#000',
    height: windowHeight/4,
    // paddingTop: 50 ,
    alignItems: "center",
    justifyContent: 'center'

  },

  homeButtonText: {
    color: "#fff"
  }

});
