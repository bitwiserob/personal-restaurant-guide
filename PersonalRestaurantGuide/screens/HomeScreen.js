import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Button,
  TouchableHighlight,
} from "react-native";

import { colors } from "../app/colors";
const HomeScreen = () => {
  return (
    <ImageBackground
      style={{ flex: 1, padding: 20 }}
      source={require("../assets/background_homepage.jpg")}
    >
      <View style={styles.top}>
        <Text style={{ alignSelf: "flex-start", bottom: "15%" }}>10:00 AM</Text>

        <Text style={styles.title}>PERSONAL </Text>
        <Text style={styles.title}>RESTAURANT</Text>
        <Text style={styles.title}>GUIDE</Text>
      </View>

      <View style={styles.bottom}>
        <TouchableHighlight
          style={[styles.button, { backgroundColor: colors.yellow }]}
          activeOpacity={0.6}
          underlayColor="#DDDDDD"
          onPress={() => alert("Pressed!")}
        >
          <Text style={styles.text}> Sign Up</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={[styles.button, { backgroundColor: colors.pink }]}
          activeOpacity={0.6}
          underlayColor="#DDDDDD"
          onPress={() => alert("Pressed!")}
        >
          <Text style={styles.text}> Sign in</Text>
        </TouchableHighlight>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  top: {
    alignItems: "center",
    justifyContent: "center",
    flex: 0.3,
  },
  title: {
    fontSize: 30,
    color: colors.title,
  },
  bottom: {
    flex: 0.7,
    justifyContent: "flex-end",
  },
  button: {
    flex: 0.1,
    borderRadius: 20,
    marginBottom: "5%",
  },
  text: {
    textAlign: "center",
    padding: 10,
  },
});

export default HomeScreen;
