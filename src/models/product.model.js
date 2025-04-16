import mongoose, { mongo } from "mongoose";

const prodcutSchema = new mongoose.schema ({
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

export default mongoose.model("Product", productSchema);