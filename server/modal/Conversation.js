import mongoose from 'mongoose';

const ConversationSchema = new mongoose.Schema({
    members: {
        type: Array
    },
    message: {
        type: String
    }},
    {
        timestamps: true //jb aap api call kroga tb uska timestamp de dega
    }
);

const conversation = mongoose.model('Conversation', ConversationSchema);// yh apna aap hi s lga dega toh jo schema generate hoga/collection vo conversations naam s hoga

export default conversation;