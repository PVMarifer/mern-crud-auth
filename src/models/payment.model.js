import mongoose, { mongo } from "mongoose";

const paymentSchema = new mongoose.Schema ({
    paymentM: {
        type: String, 
        required: true,
    }, 
    description: {
        type: String, 
        required: true, 
    }
});

export default mongoose.model("Payment", paymentSchema);