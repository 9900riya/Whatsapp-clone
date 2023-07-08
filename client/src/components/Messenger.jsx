
import { useContext } from 'react';
import { AppBar , Box, Toolbar ,styled } from '@mui/material';

import { AccountContext } from '../context/AccountProvider';
//import components
import LoginDialog from "./account/LoginDialog";
import ChatDialog from './chat/ChatDialog';

const Component = styled(Box)`
    height: 100vh;
    background: #DCDCDC;
`;

const Header = styled(AppBar)`
    background-color: #00A884;
    height: 125px;
    box-shadow: none;
`;
    
const LoginHeader = styled(AppBar)`
    background: #00bfa5;
    height: 200px;
    box-shadow: none;
`;

const Messenger = () => {

    const {account}=useContext(AccountContext);


    return(

        
        // ab baki sare components ko mai yahan se route karunga
    <Component >
        {
            account? 
            <>
                <Header>
                    <Toolbar>

                    </Toolbar>
                </Header>
                <ChatDialog/>
            </>
            :
            <>
            <LoginHeader>
                <Toolbar>

                </Toolbar>
            </LoginHeader>
            <LoginDialog/>
            </>
        }
         
    {/* so it is giving error as we are returning two components */}
    </Component>
    )
}
export default Messenger;