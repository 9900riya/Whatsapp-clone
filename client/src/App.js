

import AccountProvider from './context/AccountProvider';

import { GoogleOAuthProvider } from '@react-oauth/google';


//import components
import Messenger from "./components/Messenger";

function App() {

  //we can create function here which can be used inside return object
  const clientId = '1011580940210-hn24r01ml87g8hohs8ih8qqo7b0l6rib.apps.googleusercontent.com';




  return (
    <GoogleOAuthProvider clientId={clientId}>
      <AccountProvider>
        {/* by wrapping messenger in accountprovider we can use all details in it  */}
      <Messenger/>
      </AccountProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
