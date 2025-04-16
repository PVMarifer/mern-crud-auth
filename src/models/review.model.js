import mongoose, { mongo } from "mongoose";

const reviewSchema = new mongoose.Schema ({
    puntuacion: {
        type: Number, 
        required: true,
    }, 
    description: {
        type: String, 
        required: true, 
    }
});

export default mongoose.model("Review", reviewSchema);