import {getInventorys,getInventoryByName,createInventory,updateInventory,deleteInventory,
} from "../controllers/inventory.controller.js";
import Inventory from "../models/inventory.model.js";
import { errors } from "./messages.js";

export const intentHandlers = {
  "add-item": async ({ name, quantity, price }) =>
    name && quantity && price
      ? await createInventory({ name, quantity, price })
      : errors.missingAddFields,

  "update-item": async ({ name, quantity, price }) =>
    name
      ? await updateInventory({ name, quantity, price })
      : errors.missingUpdate,

  "delete-item": async ({ name }) =>
    name
      ? await deleteInventory({ name })
      : errors.missingDelete,

  "view-items": async () => await getInventorys(),

  "view-item": async ({ name }) => {
    if (!name) return errors.missingName;

    const item =
      (await getInventoryByName(name)) ||
      (await Inventory.findOne({ name: new RegExp(name, "i") }));

    if (item) {
      return `📦 Item: **${item.name}**\n📊 Quantity: ${item.quantity}\n💲 Price: $${item.price}`;
    }
  },
};
