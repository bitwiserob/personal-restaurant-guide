import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Button,
  TouchableHighlight,
} from "react-native";
import { useNavigation } from '@react-navigation/native';
import { colors } from "../app/colors";

const WelcomeScreen = ({navigation}) => {

  return (
    <ImageBackground
      style={{ flex: 1, padding: 20 }}
      source={require("../assets/background_homepage.jpg")}
    >
      <View style={styles.top}>
        <Text style={styles.title}>PERSONAL </Text>
        <Text style={styles.title}>RESTAURANT</Text>
        <Text style={styles.title}>GUIDE</Text>
      </View>

      <View style={styles.bottom}>
        <TouchableHighlight
          style={[styles.button, { backgroundColor: colors.yellow }]}
          activeOpacity={0.6}
          underlayColor="#DDDDDD"
          onPress={() => {
            navigation.navigate("Signup");
          }}
        >
          <Text style={styles.text}> Sign Up</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={[styles.button, { backgroundColor: colors.pink }]}
          activeOpacity={0.6}
          underlayColor="#DDDDDD"
          onPress={() => {
            navigation.navigate("Login");
          }}
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
    flex: 0.5,
  },
  title: {
    fontSize: 30,
    color: colors.title,
  },
  bottom: {
    flex: 0.5,
    justifyContent: "center",
  },
  button: {
    flex: 0.12,
    borderRadius: 20,
    marginBottom: "5%",
  },
  text: {
    textAlign: "center",
    padding: 15,
    fontWeight: "bold",
  },
});

export default WelcomeScreen;
