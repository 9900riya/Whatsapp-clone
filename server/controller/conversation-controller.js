import Conversation  from "../modal/Conversation.js";


export const newConversation = async (request, response) => {
    let senderId = request.body.senderId;
    let receiverId = request.body.receiverId;

    const exist = await Conversation.findOne({ members: { $all: [receiverId, senderId]  }})//konsi api m find krna h
    //$all will see ki apka array k sbhi elements  match hu h ya nhi,konsa elements match krna h receiverId and senderId
    
    //exist dekhna k liya modal bnana padh rha h
    if(exist) {//it exist true
        response.status(200).json('conversation already exists');
        return;
    }
    //else
    const newConversation = new Conversation({
        members: [senderId, receiverId]
    });//Conversation m bhut sari cheeja h toh m nhi chahti ki agr req.body pass kru toh baaki aur cheeja bhi override ho jay isliya specific members pass kr rhi hu ki members m mere senderid aur receiver id daal de

    try {
        const savedConversation = await newConversation.save();//phir yha daali hui info ko save kr diya mongodb p isliya using await here
        response.status(200).json(savedConversation);
    } catch (error) {
        response.status(500).json(error.message);
    }

}

export const getConversation = async (request, response) => {
    try {
        const conversation = await Conversation.findOne({ members: { $all: [  request.body.receiverId,request.body.senderId] }});
        response.status(200).json(conversation);
    } catch (error) {
        response.status(500).json(error);
    }

}