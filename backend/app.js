import express from 'express'
import cors from "cors";
import dotenv from 'dotenv'
import inventoryRoutes from "./src/routes/inventory.routes.js";
import connectDB from "./src/config/db.js"

dotenv.config({quiet:true});
const PORT =process.env.PORT || 3001;

const app = express();


//midlleware
app.use(cors());

app.use(express.json());

// Routes
app.use("/api/inventory", inventoryRoutes);

// Health check
app.get("/", (req, res) => {
  res.send("server is running...");
});

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
});
