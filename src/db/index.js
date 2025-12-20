import mongoose from "mongoose";
const conectionDb = async ()=>{
    try {
        await mongoose.connect(`mongodb://localhost:27017/myapp`);
    }
    catch (error) {
        console.log(error);
        process.exit(1);
    }
}
export  {conectionDb};