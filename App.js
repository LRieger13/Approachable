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
  user: 'Enter User Name'
});

/// HOME
function Home({ navigation }) {
  const [user, setUser] = useState("");

  const user2 = useContext(UserContext);

  return (
    <View style={styles.container}>
      
      {/* PROFILE IMAGE 
      <MaterialIcons name="account-circle" size={100} />*/}
      <Image source={require("./assets/avatar.png")} style={styles.profile} />
      {/* Add ability to click small icon to upload own picture */}
      <MaterialIcons name="add-a-photo" size={15} style={styles.addPhoto} />
      <br />
     
      {/* INFORMATION :: each leads to a redirect to edit that section info */}
      {/* JOIN FIRST & LAST NAME FOR OUTPUT */}
      {/*  */}
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
        <Text>{user2.user}</Text>
        {/* Display name that is edited */}
        <MaterialIcons
          name="arrow-forward-ios"
          size={20}
          color="black"
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

  const {user, setUser} = useState('default');

  const user2 = useContext(UserContext);
 
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Edit</Text>
      <br />
      <Text>{user2.user}</Text>
      {/* 2 TEXT INPUTS
          1 FOR FNAME, 1 FOR LNAME */}
      <TextInput
        placeholder="Name"
        style={styles.edit}
        onChangeText={(text) => this.setUser(text)}
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
  //So we can update user from subcomponents.
  this.setUser = (userIn) => {
    this.setState( state => {
      user: userIn
    });
  };

  return (
    <NavigationContainer>
      <UserContext.Provider value={this.state.user}>
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
    position: "absolute",
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
});
