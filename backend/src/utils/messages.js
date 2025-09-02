export const greetingMessage = `👋 Hello! I'm your inventory assistant.  
Here’s what I can do:  
- ➕ Add a new item  
- ♻️ Update an item  
- 🗑️ Delete an item  
- 📋 Show all items  
- 🔍 Show details about a specific item  

Examples:  
👉 "Add (ITEM_NUMBER) (ITEM_NAME) for $(ITEMPRICE)each"  
👉 "Delete (ITEM_NAME)"  
👉 "Show me the inventory"  
👉 "Show details about (ITEM_NAME)" 🤗`;

export const fallbackMessage = 
  "🤔 Sorry, I didn’t quite get that.\nYou can add, update, remove, or view items in the inventory.\nHow can I help you?";

export const errors = {
  missingName: "⚠️ Provide the item name. Example: 'Show details about (ITEM_NAME)'.",
  missingAddFields: `⚠️ Please provide name, quantity, and price. Example: 'Add (ITEM_NUMBER) (ITEM_NAME) for $(ITEMPRICE)each'.`,
  missingUpdate: "⚠️ Provide the item name to update. Example: 'Update(ITEM_NAME) to (ITEM_NUMBER) pieces at $(ITEMPRICE)'.",
  missingDelete: "⚠️ Provide the item name to delete. Example: 'Delete (ITEM_NAME)'.",
};
