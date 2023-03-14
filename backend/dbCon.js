import mongoose from "mongoose";

export const dbCon = async () => {
    try{
       await mongoose.connect('mongodb+srv://admin:9582170515@cluster0.xpbvbv5.mongodb.net/store?retryWrites=true&w=majority',
            {useNewUrlParser: true, useUnifiedTopology: true})
        console.log("Connected")
    }catch (e){
        console.log(e)
    }
}


