import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://abhishek1720044:abhishek123@cluster0.oayt8.mongodb.net').then(()=>console.log("DB Connected"));
}