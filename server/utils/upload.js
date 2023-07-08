import multer from 'multer';
import { GridFsStorage } from 'multer-gridfs-storage';

import dotenv from 'dotenv';

dotenv.config();

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

const storage = new GridFsStorage({
     url: `mongodb://${username}:${password}@ac-6hkqwc6-shard-00-00.czgfs8d.mongodb.net:27017,ac-6hkqwc6-shard-00-01.czgfs8d.mongodb.net:27017,ac-6hkqwc6-shard-00-02.czgfs8d.mongodb.net:27017/?ssl=true&replicaSet=atlas-7lifkx-shard-0&authSource=admin&retryWrites=true&w=majority`,
    options: { useNewUrlParser: true },//poorana  wala parser outdate ho gya h isliya nya pass kr rh huff 
    file: (request, file) => {
        const match = ["image/png", "image/jpg"];

        if(match.indexOf(file.memeType) === -1) //index array m dekha but nhi mile 
            return`${Date.now()}-blog-${file.originalname}`;//datee.now  duplicate files s bachna k liya as it will change name of file 

        return {
            bucketName: "photos",
            filename: `${Date.now()}-blog-${file.originalname}`
        }
    }
});

export default multer({storage}); 