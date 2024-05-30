import { StatusBar } from 'expo-status-bar';
import { Image,SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.view}>
      <SafeAreaView style={styles.SafeArea}>
       <View>
        <View>
        <Text style={styles.title}>Hello , Devs</Text>
        <Image 
          source={require('./assets/icon.png')}
          style={styles.image}
          />
        </View>
      <Text>14 tasks today</Text>
      <StatusBar style="auto" />
    </View>
    </SafeAreaView>
    </View>

  );
}

const styles = StyleSheet.create({
  view :{
    backgroundColor: '#f7f0e8',
    flex:1,
  },

  SafeArea : {
    padding:2,
    marginTop:60,
    backgroundColor: '#f7f0e8',
  },

  title:{
    //fontFamily:'lato',
    fontWeight:'bold',
    fontSize: 32,
  }
});
