import mongoose from "mongoose";

const inventorySchema = new mongoose.Schema(
  {
    name: { type: String, required: true},       
    quantity: { type: Number, required: true, default: 0 }, 
    price: { type: Number, required: true },      
  },
  { timestamps: true } 
);
inventorySchema.index({ name: 1 });

const Inventory = mongoose.model("Inventory", inventorySchema);
export default Inventory;
