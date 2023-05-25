import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style = {styles.mainTitle}>吃鯊米?</Text>
      <Image  source={require('./assets/whatToEat.png')} ></Image>
      <Button
        title="飯"
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  mainImg : {
    marginBottom: "10rem",
  },

  mainTitle : {
    fontSize: 100
  }
});
