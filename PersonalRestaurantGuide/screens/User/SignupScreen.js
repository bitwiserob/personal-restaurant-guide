import * as React from "react";
import { useAuth, AuthProvider } from "../context/AuthContext";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Alert,
  Image,
  TouchableHighlight,
} from "react-native";
const SignupScreen = () => {
  const [username, setUsername] = React.useState("");
  const [email, setEMail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const { dispatch, state } = useAuth();
  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        <Image
          style={{ width: "30%", height: "30%", resizeMode: "contain" }}
          source={require("../../assets/restaurant.png")}
        ></Image>

        <Text style={styles.lightText}> Personal Restaurant Guide</Text>
      </View>
      <View
        style={{
          flex: 3,
          borderColor: "red",
          paddingHorizontal: "10%",
          justifyContent: "center",
        }}
      >
        <Text style={{ fontSize: 25, fontWeight: "bold" }}>Sign Up</Text>
        <Text style={styles.lightText}>
          {" "}
          Find the best restaurants near you
        </Text>
        <Text style={styles.labels}> Username</Text>
        <TextInput
          style={styles.inputs}
          value={username}
          onChangeText={setUsername}
        />
        <Text style={styles.labels}> Email</Text>
        <TextInput
          style={styles.inputs}
          value={email}
          onChangeText={setEMail}
        />
        <Text style={styles.labels}> Password</Text>
        <TextInput
          style={styles.inputs}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <TouchableHighlight
          style={[styles.button]}
          activeOpacity={0.6}
          underlayColor="#DDDDDD"
          onPress={() => {
            dispatch({ type: "signup" });
            console.log(state);
          }}
        >
          <Text style={styles.text}> Sign Up</Text>
        </TouchableHighlight>
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          alignItems: "baseline",
          paddingHorizontal: "15%",
        }}
      >
        <Text style={{ color: "#abb5be" }}> already have an account ?</Text>
        <Button color={"#f85f6a"} title=" Sign In" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d6e8dc",
  },
  lightText: {
    color: "#abb5be",
    paddingVertical: "5%",
    fontSize: 16,
  },
  inputs: {
    borderBottomWidth: "1%",
    borderColor: "white",
    marginVertical: "5%",
  },
  labels: {
    color: "#f85f6a",
    fontWeight: "500",
  },
  button: {
    flex: 0.22,
    borderRadius: 20,
    marginTop: "10%",
    backgroundColor: "#f85f6a",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontWeight: "bold",
    color: "white",
    fontSize: 18,
  },
});
export default SignupScreen;
