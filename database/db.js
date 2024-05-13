
import mongoose from 'mongoose';

const Connection = async (username, password) => {
    const URL = `mongodb://${username}:${password}@ac-5qeoso1-shard-00-00.gr5vmu1.mongodb.net:27017,ac-5qeoso1-shard-00-01.gr5vmu1.mongodb.net:27017,ac-5qeoso1-shard-00-02.gr5vmu1.mongodb.net:27017/?ssl=true&replicaSet=atlas-nvjxnk-shard-0&authSource=admin&retryWrites=true&w=majority&appName=blog-app`;
    try {
        await mongoose.connect(URL,{useNewUrlParser:true})
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};

export default Connection;