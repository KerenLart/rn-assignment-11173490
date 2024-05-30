import { StatusBar } from 'expo-status-bar';
import { FlatList, Image,SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';



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
    <View style={styles.searchtab}>
      <TextInput style={styles.search}> <Ionicons name="search" size={24}  />
      <Text style={{fontSize:16, fontWeight:700}}>Search</Text></TextInput>
      <Image 
          source={require('./assets/bx_slider.png')}
          style={styles.slider}
          />
    </View>
    <Text style={{fontSize:20, fontWeight:"bold", marginTop:25}}>Categories</Text>
    <ScrollView horizontal={true} >
      <View style={styles.Categories}>
        <View style={styles.task}>
          <Text>Exercise</Text>
          <Text>12 Tasks</Text>
          <Image 
            source={require('./assets/ladysitting.png')}
            style={styles.taskimg}
            />
        </View>
        <View style={styles.task}>
          <Text>Exercise</Text>
          <Text>12 Tasks</Text>
          <Image 
            source={require('./assets/ladysitting.png')}
            style={styles.taskimg}
            />
        </View>
        <View style={styles.task}>
          <Text>Exercise</Text>
          <Text>12 Tasks</Text>
          <Image 
            source={require('./assets/ladysitting.png')}
            style={styles.taskimg}
            />
        </View>
        <View style={styles.task}>
          <Text>Exercise</Text>
          <Text>12 Tasks</Text>
          <Image 
            source={require('./assets/ladysitting.png')}
            style={styles.taskimg}
            />
        </View>
        <View style={styles.task}>
          <Text>Exercise</Text>
          <Text>12 Tasks</Text>
          <Image 
            source={require('./assets/ladysitting.png')}
            style={styles.taskimg}
            />
        </View>
        <View style={styles.task}>
          <Text>Exercise</Text>
          <Text>12 Tasks</Text>
          <Image 
            source={require('./assets/ladysitting.png')}
            style={styles.taskimg}
            />
        </View>
        <View style={styles.task}>
          <Text>Exercise</Text>
          <Text>12 Tasks</Text>
          <Image 
            source={require('./assets/ladysitting.png')}
            style={styles.taskimg}
            />
        </View>
        <View style={styles.task}>
          <Text>Exercise</Text>
          <Text>12 Tasks</Text>
          <Image 
            source={require('./assets/ladysitting.png')}
            style={styles.taskimg}
            />
        </View>
      </View>
    </ScrollView>
    <Text>Ongoing Tasks</Text>
    <FlatList styles={styles.flatlist}
      data={[
                { key : "1", text : "Dream Theater" }, 
                { key : "2", text : "Enchant" },
                { key : "3", text : "Fates Warning" }, 
                { key : "4", text : "Kamelot" },
                { key : "5", text : "Pyramaze" }, 
                { key : "6", text : "Rush" },
                { key : "7", text : "Serenity" }, 
                { key : "8", text : "Shadow Gallery" },
                { key : "9", text : "Pink Floyd" },
                { key : "10", text : "Queensryche" }
          ]}
      renderItem={ ({item}) => <Text>{ item.text }</Text> }
/>

    
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
  search:{
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 10,
    margin: 10,
    flex:3,  
  },
  searchtab:{
    flexDirection: 'row',
   
    
    
  },
  slider:{
    width: 50,
    height: 50,
    borderRadius: 10,
    backgroundColor:'orange',
    flex:1,
  },

  task:{
    backgroundColor: '#fff',
    borderRadius: 10,
  },

  taskimg:{
    width:151,
    height:132,
  },

  Categories:{
    flexDirection: 'row',
    padding: 16,
    display: 'flex',
    justifyContent: 'space-between',
  },
  flatlist:{
    
  }
});
