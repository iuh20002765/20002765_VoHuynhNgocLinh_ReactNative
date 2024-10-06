import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  TextInput,
  Image,
  Pressable,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";

export default function App() {
  const [name, onChangeName] = React.useState("Name");
  const [password, onChangePassword] = React.useState("Password");

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={["#FBCB00", "#BF9A00"]}
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          height: "100%",
        }}
      />
      <View
        style={{
          flex: 1,
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            fontFamily: "Roboto",
            fontWeight: "bold",
            fontSize: 32,
          }}
        >
          LOGIN
        </Text>
      </View>
      <View
        style={{
          flex: 3,
          alignContent: "center",
        }}
      >
        <View style={styles.inputContainer}>
          <Image
            source={require("./assets/avatar_user.png")}
            style={styles.image}
          />
          <TextInput
            style={styles.textInput}
            value={name}
            onChangeText={onChangeName}
          />
        </View>
        <View style={styles.inputContainer}>
          <Image source={require("./assets/lock.png")} style={styles.image} />
          <TextInput
            style={styles.textInput}
            value={password}
            onChangeText={onChangePassword}
          />
          <Image source={require("./assets/eye.png")} style={styles.image} />
        </View>
        <Pressable
          style={styles.button}
          onPress={() => console.log("Login Pressed")}
        >
          <Text style={styles.buttonText}> LOGIN </Text>
        </Pressable>
        <Text style={styles.text}> Forgot your password ? </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 8,
  },
  inputContainer: {
    marginTop: 30,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#fff",
    borderRadius: 5,
    width: "90%",
    paddingHorizontal: 10,
  },
  image: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  textInput: {
    flex: 1,
    height: 60,
  },
  button: {
    marginTop: 50,
    backgroundColor: "#000",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#ccc",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  text: {
    marginTop: 20,
    color: "#000",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});
