import Message from "../modal/Message.js";
import Conversation from '../modal/Conversation.js';//mujhe conversation m bhi data save krna h means left side pr naam k neeche jo last msg h vo bhi store krna h


export const newMessage = async (request, response) => {//request m poori body aegi,uss body ko validate krna hoga toh ek modal bnaungi
    const newMessage = new Message(request.body);//validated msg dega
    try {
        await newMessage.save();//await func chlta h async k saath,yh wali line database m info store kr degi
    await Conversation.findByIdAndUpdate(request.body.conversationId /*last conversation ko lena h*/, { message: request.body.text /*konsi field ko update krna h*/ });//existing msg ki field ko liya aur message m update kiya
        response.status(200).json("Message has been sent successfully");
    } catch (error) {
        response.status(500).json(error);
    }

}

export const getMessage = async (request, response) => {
    try {
        const messages = await Message.find({ conversationId: request.params.id });//request m ek field params hoti h,
        response.status(200).json(messages);
    } catch (error) {
        response.status(500).json(error);
    }

}//ab isse mesaage ko screen pr dikhana h,iss fn ko ab call krna h toh i will go to Route.js