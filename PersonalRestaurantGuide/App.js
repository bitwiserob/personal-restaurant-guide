import { StatusBar } from "expo-status-bar";
import {
  DatePickerAndroid,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DetailScreen from "./screens/DetailScreen";
import HomeScreen from "./screens/HomeScreen";
import WelcomeScreen from "./screens/WelcomeScreen";
import MapScreen from "./screens/MapScreen";
import AddScreen from "./screens/AddScreen";
import UserScreen from "./screens/User/UserScreen";
import { useAuth } from "./screens/context/AuthContext";
import { AuthProvider } from "./screens/context/AuthContext";
import SignupScreen from "./screens/User/SignupScreen";
import LoginScreen from "./screens/User/LoginScreen";
import ShareScreen from "./screens/ShareScreen";
import AboutScreen from "./screens/AboutScreen";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function NavContainer() {
  // if user is logged in  show home page otherwise show welcome(signin/signup) page

  //const { isLoggedin } = useAuth();
  const isLoggedin = true;

  return (
    <NavigationContainer>
      {!isLoggedin ? (
        <Stack.Navigator initialRouteName="Welcome">
          <Stack.Screen name="Welcome" component={WelcomeScreen} />
          <Stack.Screen name="Signup" component={SignupScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
        </Stack.Navigator>
      ) : (
        <Tab.Navigator>
          <Tab.Screen
            name="Home"
            component={HomeScreen}            
            options={{
              tabBarIcon: () => (
                <Image
                  style={{height: 35, width:35}}
                  source={require('./assets/home.png')                  
                  }/>
            ),             
            }}
          />
          <Tab.Screen
            name="Map"
            component={MapScreen}            
            options={{
              tabBarIcon: () => (
                <Image
                  style={{height: 35, width:35}}
                  source={require('./assets/map.png')                  
                  }/>
            ),             
            }}
          />

          <Tab.Screen
            name="About"
            component={AboutScreen}            
            options={{
              tabBarIcon: () => (
                <Image
                  style={{height: 35, width:35}}
                  source={require('./assets/about.png')                  
                  }/>
            ),             
            }}
          />
        </Tab.Navigator>
      )}
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <AuthProvider>
       <NavContainer></NavContainer>
    </AuthProvider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
