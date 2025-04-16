import mongoose, { mongo } from "mongoose";

const categorieSchema = new mongoose.schema ({
    title: {
        type: String, 
        required: true,
    }, 
    description: {
        type: String, 
        required: true, 
    }
});

export default mongoose.model("Categorie", categorieSchema);