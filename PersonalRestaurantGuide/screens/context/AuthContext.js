import * as React from 'react'
import axios from 'axios';



const AuthContext = React.createContext()

function authReducer(state, action) {
  switch (action.type) {
    case 'login': {
      console.log(action)  
      axios.post("http://localhost:8081/api/user/login",{
        "username":action.payload.username,
        "password":action.payload.password

      })
            .then((response) => {
                
                console.log("RESPONSE IS")
                console.log(response.data)
                if (response.data['status']){
                  return { 
                  "userId":response.data.user.username,
                  "isLoggedIn":true}
                }
                return {...state}
                
            }).catch(reason => console.log(reason))
    }
    case 'logout': {
      return {isLoggedIn: state.isLoggedIn = false}
    }
    case 'signup': {
      console.log(action)  
      axios.post("http://localhost:8081/api/user/signup",{
        "username":action.payload.username,
        "email":action.payload.email,
        "password":action.payload.password,

      })
            .then((response) => {
                
                console.log("RESPONSE IS")
                console.log(response.data)
                return { 
                  "userId":response.data.user.username,
                  "isLoggedIn":true}
                
            }).catch(reason => console.log(reason))
      }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
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
