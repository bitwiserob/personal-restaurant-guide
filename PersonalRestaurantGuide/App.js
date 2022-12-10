import { StatusBar } from "expo-status-bar";
import { DatePickerAndroid, ScrollView, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import DetailScreen from "./screens/DetailScreen";
import HomeScreen from "./screens/HomeScreen";
import WelcomeScreen from "./screens/WelcomeScreen";
import MapScreen from "./screens/MapScreen";
import AddScreen from "./screens/AddScreen";
import UserScreen from "./screens/User/UserScreen";
import { useAuth } from './screens/context/AuthContext';
import { AuthProvider } from './screens/context/AuthContext';

const Tab = createBottomTabNavigator();
function NavContainer() {
  // if user is logged in  show home page otherwise show welcome(signin/signup) page
  const {isLoggedin} = useAuth();
  return (
    <NavigationContainer>
      {!isLoggedin ? (
        <WelcomeScreen />
      ) : (
        <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Map" component={MapScreen} />
          <Tab.Screen name="Add" component={AddScreen} />
          <Tab.Screen name="User" component={UserScreen} />
        </Tab.Navigator>
      )}
    </NavigationContainer>
  );
}

export default function App(){
  return(
    
    <AuthProvider>
      <NavContainer>

      </NavContainer>
    </AuthProvider>
    
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
