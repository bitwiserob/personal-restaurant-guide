import * as React from 'react'
import axios from 'axios';



const AuthContext = React.createContext()

function authReducer(state, action) {
  switch (action.type) {
    case 'login': 
      console.log(action.type + " is");
      postLogin(state, action)
      break;
    case 'logout': 
      return {'isLoggedIn': false, "userId": -1}
      break;
    case 'signup':
      console.log(action.type + " is");
      postSignup(state, action);
      break;
    default: 
      throw new Error(`Unhandled action type: ${action.type}`)
    
  }
}

const postLogin = async(state, action) =>{
  console.log(action.payload + " payload is");
  axios.post("http://localhost:8081/api/user/login", {
    "username": action.payload.username,
    "password": action.payload.password
  })
    .then((response) => {

      console.log("RESPONSE IS");
      console.log(response.data);
      if (response.data['status']) {
        return {
          "userId": response.data.username,
          "isLoggedIn": true
        };
      }
      return { ...state };

    }).catch(reason => console.log(reason));
}

const postSignup = async(state, action) => {
  console.log(action.type + " is");
  console.log(action.payload + " is");
  axios.post("http://localhost:8081/api/user/signup", {
    "username": action.payload.username,
    "email": action.payload.email,
    "password": action.payload.password,
  })  
    .then((response) => {

      console.log("RESPONSE IS");
      console.log(response.data);
      if (response.data.username === action.payload.username) {
        return {
          "userId": response.data.username,
          "isLoggedIn": true
        };
      }
      return { ...state };
    }).catch(reason => console.log(reason));
}

function AuthProvider({children}) {
  const [state, dispatch] = React.useReducer(authReducer, {
    "isLoggedIn": false,
    "userId": -1,
  })
  const value = {state, dispatch}
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

function useAuth() {
  const context = React.useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within a AuthProvider')
  }
  return context
}

export {AuthProvider, useAuth}
