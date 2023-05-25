import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, 
        Image, Button, Dimensions } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style = {styles.mainTitle}>吃鯊米?</Text>
      <Image style = {styles.mainImg} source={require('./assets/whatToEat.png')} ></Image>
      <Button title="吃飯去"/>

      <StatusBar style="auto" />
    </View>
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

  mainImg : {
    // marginBottom: "10rem",
    height: windowWidth,
    width: windowWidth,
    resizeMode: "stretch"
  },

  mainTitle : {
    fontSize: 100
  }
});
