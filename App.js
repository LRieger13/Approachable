import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Button, Image, TouchableOpacity, TextInput } from "react-native";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


export default function App({  }) {
  const [outputText, setOutputText] = useState(
    "Open up App.js to start working on your app!"
  );
  return (
    <View style={styles.container}>
      {/* PROFILE IMAGE */}
      <Image source={require("./Profile/assets/avatar.png")} style={styles.profile} />
      <br />

      {/* INFORMATION :: each leads to a redirect to edit that section info */}
      <TouchableOpacity style={{backgroundColor: '#fff', padding:50, width: '30%', borderRadius: 5, flexDirection: 'row', justifyContent:'space-between'}}>
        <Text>Name</Text>      {/* Display name that is edited */}
        <MaterialIcons name="arrow-forward-ios" size={20} color="black" />
      </TouchableOpacity>


      <StatusBar style="auto" />
    </View>
  );
}
/// TODO
// Follow UI example (photo, 4 text input fields, submit button)
// *BONUS* add ability to change profile picture
{
  /*
        <Text>{outputText}</Text>

      <Button title="Save Changes" onPress={() => setOutputText('Changes Saved!')} />

*/
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
    backgroundColor: "#B4D3FA",
    resizeMode: "contain",
  },

  edit: {
    justifyContent: "space-between",
    flexDirection: "row",
  },

  button: { 
      margin: 5, 
      padding: 6, 
      justifyContent: 'space-around',
      color: "#f194ff",
      alignItems: 'center'

  }

});
