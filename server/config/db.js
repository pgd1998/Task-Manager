import { connect } from 'mongoose';
import {config} from 'dotenv';
config();

const connectDB=async()=>{
    try{
        await connect(process.env.MONGO_URI);
        console.log("MongoDB connected..");
    }
    catch(err) {
        console.error("Connection Refused");
        process.exit(1);
    }
}

export default connectDB;