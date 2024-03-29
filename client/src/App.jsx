import axios from "axios"

import {UserContextProvider } from "./UserContext";

import Routes from "./Routes";


function App() {
  axios.defaults.baseURL = 'https://chats-bharat-cb-api-self.vercel.app/';
  axios.defaults.withCredentials = true;
 
  return (
    <UserContextProvider>
      <Routes/>
    </UserContextProvider>
    
  )
}

export default App
