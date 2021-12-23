import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  Button,
  TouchableOpacity,
  
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import React, { useState, useContext } from "react";
import { withSafeAreaInsets } from "react-native-safe-area-context";

const Stack = createStackNavigator();

const UserContext = React.createContext({
  user: 'Enter Your Name'
});

/// HOME
function Home({ navigation }) {
  const { user, setUser } = useContext(UserContext);
  const { email, setEmail } = useContext(UserContext);
  const { phone, setPhone } = useContext(UserContext);
  const { bio, setBio } = useContext(UserContext);


  return (
    <View style={styles.container}>
      
      {/* PROFILE IMAGE 
      <MaterialIcons name="account-circle" size={100} />*/}
      <Image source={require("./assets/avatar.png")} style={styles.profile} />
      {/* Add ability to click small icon to upload own picture */}
      <MaterialIcons name="add-a-photo" size={15} style={styles.addPhoto} />
      <br />
      
      {/* INFORMATION :: each leads to a redirect to edit that section info */}
      {/* USER NAME */}
      <Text style={styles.smallInfo}>Name</Text>
      <TouchableOpacity
        style={{
          backgroundColor: "#fff",
          padding: 30,
          width: "30%",
          borderRadius: 5,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
    
        <Text style={styles.info}>{user}</Text>
        {/* Display name that is edited */}
        <MaterialIcons
          name="arrow-forward-ios"
          size={20}
          color="black"
          onPress={() => navigation.navigate("Edit")}
        />
      </TouchableOpacity>
      <Text style={styles.smallInfo}>Email</Text>
      {/* EMAIL */} 
      <TouchableOpacity
        style={{
          backgroundColor: "#fff",
          padding: 30,
          width: "30%",
          borderRadius: 5,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text style={styles.info}>{email}</Text>
        <MaterialIcons
          name="arrow-forward-ios"
          size={20}
          color="black"
          onPress={() => navigation.navigate("Edit")}
        />
      </TouchableOpacity>

      <Text style={styles.smallInfo}>Phone</Text>
      {/* PHONE */} 
      <TouchableOpacity
        style={{
          backgroundColor: "#fff",
          padding: 30,
          width: "30%",
          borderRadius: 5,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text style={styles.info}>{phone}</Text>
        <MaterialIcons
          name="arrow-forward-ios"
          size={20}
          color="black"
          onPress={() => navigation.navigate("Edit")}
        />
      </TouchableOpacity>
      
      <Text style={styles.smallInfo}>About You</Text>
      {/* BIO */} 
      <TouchableOpacity
        style={{
          backgroundColor: "#fff",
          padding: 30,
          width: "30%",
          borderRadius: 5,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text style={styles.info}>{bio}</Text>
        <MaterialIcons
          name="arrow-forward-ios"
          size={20}
          color="black"
          maxLength = {250}
          onPress={() => navigation.navigate("Edit")}
        />
      </TouchableOpacity>
      <br />
    </View>
  );
}

//Pass in the function from app here to update state like in example. 
/// EDIT
function Edit({ navigation }) {

  const { user, setUser } = useContext(UserContext);
  const { email, setEmail } = useContext(UserContext);
  const { phone, setPhone } = useContext(UserContext);
  const { bio, setBio } = useContext(UserContext);


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Edit</Text>
      <br />
      {/* NAME */}
      <TextInput
        placeholder="Name"
        style={styles.edit}
        onChangeText={(text) => setUser(text)}
      ></TextInput>
     <br />
     {/* EMAIL */}
     <TextInput
        placeholder="Email"
        style={styles.edit}
        onChangeText={(text) => setEmail(text)}
      ></TextInput>
     <br />
     {/* PHONE */}
     <TextInput
        placeholder="Phone"
        style={styles.edit}
        onChangeText={(text) => setPhone(text)}
      ></TextInput>
     <br />
     {/* BIO */}
     <TextInput
        placeholder="Bio"
        style={styles.edit}
        maxLength={50}
        onChangeText={(text) => setBio(text)}
      ></TextInput>
     <br />
      <View style={styles.edit}>
        {/* ON SAVE BUTTON NEEDS TO GO BACK TO HOME SCREEN & MOVE CHANGED STATE */}
        <MaterialIcons 
          name="check"
          size={30}
          color="green"
          padding={50}
          onPress={() => navigation.navigate("Home")}
          />
        <MaterialIcons
          name="clear"
          size={30}
          color="red"
          padding={50}
          onPress={() => navigation.goBack()}
        />
      </View>
    </View>
  );
}

/// MAIN APP
export default function App() {

  const [user, setUser] = useState('Enter Name');
  const [email, setEmail] = useState('Enter Email');
  const [phone, setPhone] = useState('Enter Phone');
  const [bio, setBio] = useState('Enter Bio');


  return (
    <NavigationContainer>
      <UserContext.Provider value={{user, setUser, email, setEmail, phone, setPhone, bio, setBio}}>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Edit" component={Edit} />
        </Stack.Navigator>
      </UserContext.Provider>
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
    alignItems: "center",
    border: 5,
    borderColor: 'black',
    padding: 5
  },

  addPhoto: {
    justifyContent: "center",
    zIndex: 1,
    alignItems: "center",
  },

  title: {
    fontSize: 50,
    fontWeight: "bold",
    marginBottom: 50,
    marginTop: -20,
  },

  info: {
    fontSize: 12,
    wordWrap: 'break-word',
  },
  smallInfo: {
  fontSize: 10,
  paddingRight: 90,
  color: 'lightgrey'   
  }
});
