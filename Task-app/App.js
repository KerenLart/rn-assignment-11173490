import { StatusBar } from 'expo-status-bar';
import { Image,SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.Overview}>
      <SafeAreaView style={styles.SafeArea}>
       <View>
        <View style={styles.titlebar}>
          <View>
            <Text style={styles.title}>Hello , Devs</Text>
            <Text>14 tasks today</Text>
          </View>
          <Image 
          source={require('./assets/profile.png')}
          style={styles.profile}
          />
        </View>
      
      <StatusBar style="auto" />
    </View>
    </SafeAreaView>
    </View>

  );
}

const styles = StyleSheet.create({
  Overview :{
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
  },

  titlebar:{
    flexDirection: 'row',
    padding: 16,
    display: 'flex',
    justifyContent: 'space-between',
    
  },

  profile:{
    width: 60,
    height: 60,
    borderRadius: 50,
    backgroundColor:'#fff'
    
    
  },

});
