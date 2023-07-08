//using createcontext of react we can use our login credentials globally wherever we want to use in any components
import { createContext, useState, useRef,useEffect } from 'react';
import {io} from 'socket.io-client'; 



export const AccountContext=createContext(null);
const AccountProvider=({children})=>{

   const[person,setPerson]=useState({});
    const[account,setAccount]=useState();
  const [newMessageFlag, setNewMessageFlag] = useState(false);
   const [showloginButton, setShowloginButton] = useState(true);
    const [showlogoutButton, setShowlogoutButton] = useState(false);

    const [activeUsers, setActiveUsers] = useState([]);
      const socket = useRef();

    useEffect(() => {
        socket.current = io('ws://localhost:9000');
    }, [])
    return (
        <AccountContext.Provider value={{
            account,
            setAccount,
            person,
            setPerson,
            newMessageFlag, 
            setNewMessageFlag,
            socket,
            showloginButton,
            setShowloginButton,
            showlogoutButton,
            setShowlogoutButton,
            activeUsers,
            setActiveUsers
        }}>
            {children}

        </AccountContext.Provider>

    )
}
export default AccountProvider;