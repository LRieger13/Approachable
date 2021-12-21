import { StyleSheet, Text, TextInput, View, Image, Button, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useState} from 'react-native';
import { withSafeAreaInsets } from 'react-native-safe-area-context';


const Stack = createStackNavigator();

/// HOME
function Home({navigation}) {
  return (
    <View style={styles.container}>
      {/* PROFILE IMAGE 
      <MaterialIcons name="account-circle" size={100} />*/}
      <Image source={require("./assets/avatar.png")} style={styles.profile} />
      {/* Add ability to click small icon to upload own picture */}
      <MaterialIcons name="add-a-photo" size={15} style={styles.addPhoto} />
      <br />
      {/* INFORMATION :: each leads to a redirect to edit that section info */}
      <TouchableOpacity style={{backgroundColor: '#fff', padding:50, width: '30%', borderRadius: 5, flexDirection: 'row', justifyContent:'space-between'}}>
        <Text>Name</Text>      {/* Display name that is edited */}
        <MaterialIcons name="arrow-forward-ios" size={20} color="black" onPress={() => navigation.navigate('Edit')} />
      </TouchableOpacity>
      <br />
    </View>
  );
}

/// EDIT
function Edit({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Edit</Text>
      <br />
      <TextInput placeholder="Name" style={styles.edit}></TextInput>
      <br />
      <Button title="Save" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}


/// MAIN APP
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Edit" component={Edit} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

/// STYLES
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
 
  profile: {
    alignItems: "center",
    borderRadius: 50,
    borderWidth: 5,
    borderColor: "#0047FF",
    width: 100,
    height: 100,
    backgroundColor: "#00F0FF",
    resizeMode: "contain",
  },
 
  edit: {
    justifyContent: "space-between",
    flexDirection: "row",
    padding: 20,
    border: 5, 
    borderColor: "red"
  },

  addPhoto: {
    position: 'absolute',
    justifyContent: "left",
    top: 275,
    right: 325,
    zIndex: 1
  },

  title: {
    fontSize: 50,
    fontWeight: "bold",
    marginBottom: 50,
    marginTop: -20
  }
 
});

