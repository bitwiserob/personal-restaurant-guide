import * as React from 'react'
import {useAuth, AuthProvider} from "../context/AuthContext";
import { ScrollView, StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';
const LoginScreen = () => {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const {dispatch, state} = useAuth(); 
    return (
    <View>
            <Text>Log in</Text>
        <TextInput
            placeholder="Username"
            value={username}
            onChangeText={setUsername}
        />
        <TextInput
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
        />
          <Button title="Log in" onPress={() => {
            dispatch({type:'login'})
            console.log(state)
          }} />
    </View>
    );
}
export default LoginScreen;