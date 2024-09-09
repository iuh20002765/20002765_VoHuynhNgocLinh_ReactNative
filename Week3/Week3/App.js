import {
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  Pressable,
  View,
} from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.logo} source={require("./assets/Ellipse.png")} />
      <Text style={styles.paragraphShape}>
        GROW <br /> YOUR BUSINESS
      </Text>
      <Text style={styles.paragraph}>
        We will help you to grow your business using online server
      </Text>
      <View style={styles.buttonView}>
        <Pressable style={styles.button}>
          <Text style={styles.text}>LOGIN</Text>
        </Pressable>
        <Pressable style={styles.button}>
          <Text style={styles.text}>SIGN UP</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#00CCF9",
    padding: 8,
  },
  paragraph: {
    marginTop: 50,
    margin: 24,
    fontSize: 13,
    fontWeight: "bold",
    textAlign: "center",
  },
  paragraphShape: {
    marginTop: 50,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    width: "189px",
    height: "58px",
  },
  logo: {
    height: 128,
    width: 128,
    marginTop: "50px",
  },
  buttonView: {
    marginTop: 50,
    flexDirection: "row",
    gap: 20,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    width: "119px",
    height: "48px",
    borderRadius: 5,
    backgroundColor: "#E3C000",
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "black",
  },
});
