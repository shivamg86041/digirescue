import { Routes , Route} from "react-router-dom";
import "./App.css";
import ChatBot from 'react-simple-chatbot';
import Navbar from "./Components/Navbar";
import Home from "./pages/home";
import Login from "./pages/login";
import SignUp from "./pages/SignUp";
import { ThemeProvider } from 'styled-components';
import chat from './chatbot.png'
import Dial112 from "./Components/Dial112";
import DisasterGiftBoxPage from "./Components/Donation";
import EmergencyContacts from "./Components/Emergency";
import MarkersMap from "./pages/Shelter";


const theme = {
  background: 'white',
  headerBgColor: '#0F3789',
  headerFontSize: '20px',
  botBubbleColor: '#0F3789',
  headerFontColor: 'white',
  botFontColor: 'white',
  userBubbleColor: '#FF5733',
  userFontColor: 'white',
};

const config = {
  botAvatar: {chat},
  floating: true,
};

const steps = [
  {
      id: '0',
      message: 'Hey!!',

      // This calls the next id
      // i.e. id 1 in this case
      trigger: '1',
  }, {
      id: '1',

      // This message appears in
      // the bot chat bubble
      message: 'Please write your query',
      trigger: '2'
  }, {
      id: '2',

      // Here we want the user
      // to enter input
      user: true,
      trigger: '3',
  }, {
      id: '3',
      message: " hi {previousValue}, how can I help you?",
      trigger: 4
  }, {
      id: '4',
      options: [
           
          // When we need to show a number of
          // options to choose we create alist
          // like this
          { value: 1, label: 'View Courses' },
          { value: 2, label: 'Read Articles' },

      ],
      end: true
  }
];

function App() {
  

  return(
    <div>

      <Navbar/>
      <Dial112/>
      <Routes>

        <Route path="/" element={<Home/>} />

        <Route path="/login" element={<Login/>} />

        <Route path="/signUp" element={<SignUp/>} />

        <Route path="/donation" element={<DisasterGiftBoxPage/>}/>
        <Route path="/Emergencies" element={<EmergencyContacts/>}/>
        <Route path="/shelter" element={<MarkersMap/>}/>
      </Routes>
      
      <ThemeProvider theme={theme}>
                <ChatBot
 
                    // This appears as the header
                    // text for the chat bot
                    headerTitle="ChatBot"
                    steps={steps}
                    {...config}
                    botAvatar = {chat}
                />
            </ThemeProvider>
    </div>
  )
}

export default App;
