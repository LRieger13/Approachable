import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Button, Image, TextInput } from "react-native";

export default function App() {
  const [outputText, setOutputText] = useState(
    "Open up App.js to start working on your app!"
  );
  return (
    <View style={styles.container}>
      {/* PROFILE IMAGE */}
      <Image source={require("./Profile/assets/avatar.png")} style={styles.profile} />
      {/* INFORMATION :: each leads to a redirect to edit that section info */}
      <br />
      <View style={styles.edit}>
        <Text style={{ padding: 10, width: 100 }}>Name</Text>
        {/**/}
        <br />
      </View>
      <View style={styles.edit}>
        <Text style={{ padding: 10, width: 100 }}>Phone</Text>
        {/**/}
        <br />
      </View>
      <View style={styles.edit}>
        <Text style={{ padding: 10, width: 100 }}>Email</Text>
        {/**/}
        <br />
      </View>
      <View style={styles.edit}>
        <Text style={{ padding: 10, width: 100 }}>Bio</Text>
        {/**/}
        <br />
      </View>
      <Button title="Edit >" />
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
    backgroundColor: "lightgrey",
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
