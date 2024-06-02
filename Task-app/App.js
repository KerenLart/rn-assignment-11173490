import { StatusBar } from 'expo-status-bar';
import { FlatList, Image,SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Feather } from '@expo/vector-icons';
import { Colors } from 'react-native/Libraries/NewAppScreen';



export default function App() {
  return (
    <ScrollView style={styles.Overview}>
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
      <TextInput style={styles.search}> 
        <Feather name="search" size={24}  />
        <Text style={{fontSize:18, fontWeight:"bold", paddingLeft:20 }}>Search</Text>
      </TextInput>
      <TouchableOpacity>  
        <View style={{flex:1, justifyContent: 'center', alignItems: 'center', borderRadius:20, backgroundColor: '#f3775b', padding: 10, marginTop:40,}}>
          <Feather name='sliders' size={40} color={'#fff'} style={{transform:[{rotate:'90deg'}]}} />
        </View>
      </TouchableOpacity>
      
      
    </View>
    <Text style={{fontSize:20, fontWeight:"bold", marginTop:25}}>Categories</Text>
    <ScrollView horizontal={true} >
      <View style={styles.Categories}>
        <View style={styles.task}>
          <Text style={styles.tasktext}>Exercise</Text>
          <Text>12 Tasks</Text>
          <Image 
            source={require('./assets/ladysitting.png')}
            style={styles.taskimg}
            />
        </View>
        <View style={styles.task}>
          <Text style={styles.tasktext}>Study</Text>
          <Text>12 Tasks</Text>
          <Image 
            source={require('./assets/category1.png')}
            style={styles.taskimg}
            />
        </View>
        
        <View style={styles.task}>
          <Text style={styles.tasktext}>Exercise</Text>
          <Text>12 Tasks</Text>
          <Image 
            source={require('./assets/ladysitting.png')}
            style={styles.taskimg}
            />
        </View>
        <View style={styles.task}>
          <Text style={styles.tasktext}>Exercise</Text>
          <Text>12 Tasks</Text>
          <Image 
            source={require('./assets/ladysitting.png')}
            style={styles.taskimg}
            />
        </View>
        <View style={styles.task}>
          <Text style={styles.tasktext}>Exercise</Text>
          <Text>12 Tasks</Text>
          <Image 
            source={require('./assets/ladysitting.png')}
            style={styles.taskimg}
            />
        </View>
        <View style={styles.task}>
          <Text style={styles.tasktext}>Exercise</Text>
          <Text>12 Tasks</Text>
          <Image 
            source={require('./assets/ladysitting.png')}
            style={styles.taskimg}
            />
        </View>
        <View style={styles.task}>
          <Text style={styles.tasktext}>Exercise</Text>
          <Text>12 Tasks</Text>
          <Image 
            source={require('./assets/ladysitting.png')}
            style={styles.taskimg}
            />
        </View>
        <View style={styles.task}>
          <Text style={styles.tasktext}>Exercise</Text>
          <Text>12 Tasks</Text>
          <Image 
            source={require('./assets/ladysitting.png')}
            style={styles.taskimg}
            />
        </View>
      </View>
    </ScrollView>
    <Text style={{fontWeight:'bold', fontSize:24,marginTop:20}}>Ongoing Tasks</Text>
    <FlatList style={styles.flatlist}
      data={[
                { key : "1", text : "Mobile App Development" }, 
                { key : "2", text : "Web Development" },
                { key : "3", text : "Push Up" }, 
                { key : "4", text : "Sit Up" },
                { key : "5", text : "Paint" }, 
                { key : "6", text : "Run" },
                { key : "7", text : "Movie" }, 
                { key : "8", text : "Shadow Gallery" },
                { key : "9", text : "Pink Floyd" },
                { key : "10", text : "Queensryche" }
          ]}
      renderItem={ ({item}) => <Text style={styles.items}>{ item.text }</Text> }
/>

    
    </SafeAreaView>
    </ScrollView>
   
  );
}

const styles = StyleSheet.create({
  Overview :{
    backgroundColor: '#f7f0e8',
    flex:1,
    padding: 20,
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
    display: 'flex',
    justifyContent: 'space-between',
    
  },

  profile:{
    width: 60,
    height: 60,
    borderRadius: 50,
    backgroundColor:'#fff',
    objectFit: 'cover',

  },
  search:{
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginRight: 10,
    flex:5,
    marginTop:40,  
  },
  searchtab:{
    flexDirection: 'row',
   
    
    
  },
  slider:{
    width: 50,
    height: 49,
    borderRadius: 14,
    backgroundColor:'#f3775b',
    padding:40,
    margin: 10,
    objectFit: 'contain',
  },

  task:{
    backgroundColor: '#fff',
    borderRadius: 10,
    marginRight: 30,
    padding: 12,
    width: 186,
    height: 200,
  },
  tasktext:{
    fontSize: 20,
    fontWeight: 'bold',
  },
  taskimg:{
    width:151,
    height:132,
    objectFit:'contain',
  },

  Categories:{
    marginTop: 20,
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'space-between',
  },
  flatlist:{
    marginTop:20
  },

  items:{
    padding: 16,
    paddingTop:40,
    margin: 2,
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth:1,
    borderColor:'#E8D1BA',
    width:337,
    height: 128,
    textAlign:'left',
    fontWeight:'bold',
    fontSize:16,
    fontWeight:'700'
  }  
});
