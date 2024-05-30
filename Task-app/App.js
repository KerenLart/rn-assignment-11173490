import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.view}>
      <SafeAreaView style={styles.SafeArea}>
       <View>
      <Text>Open up App.js to start working on your app!</Text>
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
    marginTop:30,
    backgroundColor: '#f7f0e8',
  },
});
