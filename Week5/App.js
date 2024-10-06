import {
  Image,
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Rating } from "react-native-ratings";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();
const STAR_IMAGE = require("./assets/star.png");
const VS_BLACK = require("./assets/vs_black.png");
const VS_BLUE = require("./assets/vs_blue.png");
const VS_RED = require("./assets/vs_red.png");
const VS_SILVER = require("./assets/vs_silver.png");

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Details">
        <Stack.Screen name="First" component={FirstScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function FirstScreen({ navigation, route }) {
  React.useEffect(() => {
    if (route.params?.image) {
      // Post updated, do something with `route.params.post`
      // For example, send the post to the server
    }
  }, [route.params?.image]);
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={route.params?.image}
        style={{ width: 150, height: 180, alignItems: "center" }}
      />
      <Text style={{ fontSize: 13 }}>
        Điện Thoại Vsmart Joy 3 - Hàng chính hãng
      </Text>
      <View style={{ flexDirection: "row" }}>
        <Rating
          onFinishRating={this.ratingCompleted}
          style={{ paddingVertical: 10 }}
          imageSize={20}
        />
        <Text style={{ fontSize: 13, paddingVertical: 10, marginLeft: 20 }}>
          (Xem 828 đánh giá)
        </Text>
      </View>
      <View style={{ flexDirection: "row" }}>
        <Text style={{ fontSize: 18, paddingVertical: 10, fontWeight: "bold" }}>
          {" "}
          1.790.000 đ
        </Text>
        <Text
          style={{
            fontSize: 13,
            paddingVertical: 15,
            marginLeft: 20,
            textDecoration: "line-through",
            color: "#00000094",
          }}
        >
          {" "}
          1.790.000 đ
        </Text>
      </View>
      <View style={{ flexDirection: "row" }}>
        <Text style={{ fontSize: 13, paddingVertical: 10, color: "#FA0000" }}>
          {" "}
          Ở ĐÂU RẺ HƠN HOÀN TIỀN
        </Text>
        <Image
          source={require("./assets/help.png")}
          style={{ width: 15, height: 15, marginTop: 10, marginLeft: 20 }}
        />
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Details")}
      >
        <Text>4 MÀU-CHỌN MÀU</Text>
        <Image
          source={require("./assets/next.png")}
          style={{ width: 10, height: 10, marginTop: 10, marginLeft: 20 }}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.buyButton}>
        <Text style={{ color: "#fff", fontWeight: "bold" }}>CHỌN MUA</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

function DetailsScreen({ navigation, route }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1, flexDirection: "row" }}>
        <Image
          source={require("./assets/vs_blue.png")}
          style={{ width: 70, height: 90, justifyContent: "center" }}
        />
        <Text style={{ fontSize: 13, paddingVertical: 10, marginLeft: 20 }}>
          {" "}
          Điện Thoại Vsmart Joy 3 Hàng chính hãng
        </Text>
      </View>
      <View style={{ flex: 3, backgroundColor: "#C4C4C4" }}>
        <Text style={{ fontSize: 13, paddingVertical: 10, marginLeft: 20 }}>
          {" "}
          Chọn một màu bên dưới:
        </Text>
        <View style={{ flexDirection: "column", alignItems: "center" }}>
          <Image
            source={require("./assets/silver.png")}
            style={{
              width: 60,
              height: 60,
              justifyContent: "center",
              marginBottom: 5,
            }}
          />
          <Image
            source={require("./assets/red.png")}
            style={{
              width: 60,
              height: 60,
              justifyContent: "center",
              marginBottom: 5,
            }}
          />
          <Image
            source={require("./assets/black.png")}
            style={{
              width: 60,
              height: 60,
              justifyContent: "center",
              marginBottom: 5,
            }}
          />
          <Image
            source={require("./assets/blue.png")}
            style={{
              width: 60,
              height: 60,
              justifyContent: "center",
              marginBottom: 5,
            }}
          />
        </View>
        <TouchableOpacity
          style={styles.doneButton}
          onPress={() => navigation.navigate("First")}
        >
          <Text style={{ color: "#fff", fontWeight: "bold" }}>XONG</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
    backgroundColor: "#fff",
  },
  button: {
    alignContent: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    padding: 10,
    borderWidth: 1,
    borderRadius: 20,
    flexDirection: "row",
  },
  buyButton: {
    alignContent: "center",
    marginTop: 20,
    justifyContent: "center",
    backgroundColor: "#EE0A0A",
    padding: 10,
    borderRadius: 15,
    flexDirection: "row",
  },
  doneButton: {
    alignContent: "center",
    justifyContent: "center",
    backgroundColor: "#1952E294",
    padding: 10,
    borderRadius: 15,
    flexDirection: "row",
  },
});
