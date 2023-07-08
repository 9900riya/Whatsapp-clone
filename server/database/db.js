

import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;
const Connection = async () => {
    const URL = `mongodb://${USERNAME}:${PASSWORD}@ac-6hkqwc6-shard-00-00.czgfs8d.mongodb.net:27017,ac-6hkqwc6-shard-00-01.czgfs8d.mongodb.net:27017,ac-6hkqwc6-shard-00-02.czgfs8d.mongodb.net:27017/?ssl=true&replicaSet=atlas-7lifkx-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
        console.log('hi');
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });
        console.log('Database Connected Succesfully');
    } catch(error) {
        console.log('Error: ', error.message);
    }

};

export default Connection;