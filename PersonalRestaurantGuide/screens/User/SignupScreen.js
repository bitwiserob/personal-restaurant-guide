import * as React from 'react'
import {useAuth, AuthProvider} from "../context/AuthContext";
import { ScrollView, StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';
const SignupScreen = () => {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const {dispatch, state} = useAuth(); 
    return (
    <View>
            <Text>Sign up</Text>
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
          <Button title="Sign Up" onPress={() => {dispatch({type:'signup'})
            console.log("something happened")
          }} />
    </View>
    );
}
export default SignupScreen;