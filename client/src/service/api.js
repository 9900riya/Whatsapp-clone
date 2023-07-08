// now to add users i am making an api  toh api k ek  function bna rha hu adduser naam s
// yh ek post api hogi kyuki m yha data bhejna wala hu adduser m kyuki mein sara data body m bhajna wala hu
// axios ki help s aap get post sbhi call kr skta ho
// POST is the HTTP method that is designed to send loads of data to a server from a specified resource.
// put -koi text ko edit krna h toh 
// backend k url hota h -url
// jo bhi api hoti h vo asynchronous request hoti h toh vo promise return krti h isliya usko handli krna k liya await lgana hota h
import axios from 'axios';

const url = 'http://localhost:8000';

export const addUser = async (data) => {
    try {
        let response = await axios.post(`${url}/add`, data);
        return response.data;
    } catch (error) {
        console.log('Error while calling addUser API ', error);
    }
}
export const getUsers = async () => {
    try {
        let response = await axios.get(`${url}/users`);
        // console.log(response);
        return response.data;
    } catch (error) {
        console.log('Error while calling getUsers API ', error.message);
    }
}

export const setConversation = async (data) => {
    try {
        await axios.post(`${url}/conversation/add`, data);
    } catch (error) {
        console.log('Error while calling setConversation API ', error);
    }
}
export const getConversation = async (users) => {
    try {
        let response = await axios.post(`${url}/conversation/get`, users);
        return response.data;
    } catch (error) {
        console.log('Error while calling getConversation API ', error.message);
    }
}

export const newMessages = async (data) => {
    try {
        return await axios.post(`${url}/message/add`, data);
    } catch (error) {
        console.log('Error while calling newConversations API ', error.message);
    }
}

export const getMessages = async (id) => {
    try {
        let response = await axios.get(`${url}/message/get/${id}`);
        return response.data
    } catch (error) {
        console.log('Error while calling getMessages API ', error);
    }
}



export const uploadFile = async (data) => {
    try {
        return await axios.post(`${url}/file/upload`, data);
    } catch (error) {
        console.log('Error while calling newConversations API ', error);
    }
}