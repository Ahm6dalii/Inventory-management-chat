import Inventory from "../models/inventory.model.js";

//  Get all Inventorys
export const getInventorys = async () => {
  try {
    const inventorys = await Inventory.find();
    if (inventorys.length === 0) {
      return "📦 No items in inventory.";
    }

    const list = inventorys
      .map((item) => `- ${item.name}: ${item.quantity} pcs at $${item.price}`)
      .join("\n");

    return `📋 Inventory list:\n${list}`;
  } catch (error) {
    return `❌ Error: ${error.message}`;
  }
};

//  Get single Inventory by ID
export const getInventoryById = async ({ id }) => {
  try {
    const item = await Inventory.findById(id);
    if (!item) return "⚠️ Item not found.";

    return `🔍 ${item.name}: ${item.quantity} pcs at $${item.price}`;
  } catch (error) {
    return `❌ Error: ${error.message}`;
  }
};

//  Create Inventory
export const createInventory = async ({ name, quantity, price }) => {
  try {
    const newInventory = new Inventory({ name, quantity, price });
    await newInventory.save();

    return `✅ Added ${quantity} ${name}(s) at $${price} each.`;
  } catch (error) {
    return `❌ Error: ${error.message}`;
  }
};

// Update Inventory
export const updateInventory = async ({ name, quantity, price }) => {
  try {
    const updatedInventory = await Inventory.findOneAndUpdate(
      { name }, // find by name instead of id
      { quantity, price },
      { new: true }
    );
    if (!updatedInventory) return `⚠️ Item "${name}" not found.`;

    return `♻️ Updated ${updatedInventory.name}: now ${updatedInventory.quantity} pcs at $${updatedInventory.price}`;
  } catch (error) {
    return `❌ Error: ${error.message}`;
  }
};

//  Delete Inventory
export const deleteInventory = async ({ name }) => {
  try {
    const deletedInventory = await Inventory.findOneAndDelete({ name });
    if (!deletedInventory) return `⚠️ Item "${name}" not found.`;

    return `🗑️ Deleted ${deletedInventory.name} successfully.`;
  } catch (error) {
    return `❌ Error: ${error.message}`;
  }
};
//  Get Specific item

export const getInventoryByName =async(name)=> {
  return await Inventory.findOne({ name: new RegExp(`^${name}$`, "i") }); 
}
