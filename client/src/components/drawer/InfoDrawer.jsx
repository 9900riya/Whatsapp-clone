import { styled, Drawer, Box, Typography } from '@mui/material';
import { ArrowBack } from '@mui/icons-material';

//components
import Profile from './Profile';

//arrowback internally svg h
const Header = styled(Box)`
  background: #008069;
  height: 107px;
  color: #FFFFFF;
  display: flex;
  & > svg, & > p {
    margin-top: auto;
    padding: 15px;
    font-weight: 600;
`;

const Component = styled(Box)`
  background: #ededed;
  height: 85%;
`;

const Text = styled(Typography)`
    font-size: 18px;
`
//doing styling like dialog
const drawerStyle = {
    left: 20,
    top: 17,
    height: '95%',
    width: '30%',
    boxShadow: 'none'
}

const InfoDrawer = ({ open, setOpen, profile }) => {

    const handleClose = () => {
        setOpen(false);
    };
//drawer apna aap hi onclose ko call kr deta h agr bhar click kra toh
//open ek key h jo usestate ki value store krna pr kaam krti h
//header bna rha h
    return (
        <Drawer
            open={open}
            onClose={handleClose}
            PaperProps={{ sx: drawerStyle }}
            style={{ zIndex: 1500 }}
        >
            <Header>
                
                <ArrowBack onClick={() => setOpen(false)} />
                <Text>Profile</Text>
            </Header>
            <Component>
               <Profile />
            </Component>
        </Drawer>
    );
}

export default InfoDrawer;