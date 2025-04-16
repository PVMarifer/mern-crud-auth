import mongoose from "mongoose";

const cuponSchema = new mongoose.Schema({
  title: {
    type: String, 
    required: true,
  }, 
  price: {
    type: Number, 
    required: true,
  },
  description: {
    type: String, 
    required: true, 
  }
}, {
  timestamps: true  // Esto es opcional, pero útil para ver cuándo se crea o actualiza
});

export default mongoose.model("Cupon", cuponSchema);
