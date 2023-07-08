import User from "../modal/User.js";

//yh adduser api k function h
export const addUser = async (request, response) => {
    // console.log(request.body);
    //body pta hi nhi hota express ko isliya body parser use krna padta h
    //ab jo frontent s data aa rhah use validate knra padtah h isliya model bna rhi hu
    // try catch because m mongodb pr hit marunga apni user ki info database m store krvaunga
    try {
        let exist = await User.findOne({ sub: request.body.sub });
// agr user milta h toh exist m objct aega 
        if(exist) {
            response.status(200).json('user already exists');
            return;
        }

        const newUser = new User(request.body);
        // to store in mongodb we use save 
        await newUser.save();
        response.status(200).json(newUser);
    } catch (error) {
        response.status(500).json(error);
    }
}
//data nikalna h user m s ,ek data niklna k liya findOne use krta h pr mujhe sara data nikalna h toh m empty object pass krungi
export const getUser = async (request, response) => {
    try {
        const user = await User.find({});
       return response.status(200).json(user);
    } catch (error) {
      return  response.status(500).json(error.message);
    }
}