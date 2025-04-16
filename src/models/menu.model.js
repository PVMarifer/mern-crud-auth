import mongoose, { mongo } from "mongoose";

const menuSchema = new mongoose.schema ({
    title: {
        type: String, 
        required: true,
    }, 
    price: {
        type: Int, 
        required: true
    },
    description: {
        type: String, 
        required: true, 
    }
});

export default mongoose.model("Menu", menuSchema);