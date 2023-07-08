import mongoose from 'mongoose';

const MessageSchema = new mongoose.Schema({
    conversationId: {
        type: String
    },
    senderId: {
        type: String
    },
    receiverId: {
        type: String
    },
    text: {
        type: String
    },
    type: {
        type: String
    }
},
{ 
        timestamps: true//apna kitna bja msg bheja h 
});

const message = mongoose.model('Message', MessageSchema);//Message is collection and collection k upr description-Messageschema

export default message;