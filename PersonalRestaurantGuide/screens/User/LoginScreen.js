import * as React from "react";
import { colors } from "../../app/colors";
import { useAuth, AuthProvider } from "../context/AuthContext";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Alert,
  TouchableHighlight,
  Image,
} from "react-native";
const LoginScreen = () => {
  const [username, setUsername] = React.useState("");
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
        <Text style={{ fontSize: 25, fontWeight: "bold" }}>Sign in</Text>
        <Text style={styles.lightText}> HI there ! Nice to see you again.</Text>
        <Text style={styles.labels}> Username</Text>
        <TextInput
          style={styles.inputs}
          value={username}
          onChangeText={setUsername}
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
            dispatch({ type: "login", payload: {
             "username": username,
             "password": password
           }});
           console.log('newstate ' +state);
         }}
        >
          <Text style={styles.text}> Sign in</Text>
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
        <Text style={{ color: "#abb5be" }}> Don't have an account ?</Text>
        <Button color={"#f85f6a"} title=" Sign Up" />
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
export default LoginScreen;
