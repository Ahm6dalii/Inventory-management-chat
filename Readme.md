# Inventory Management Chatbot

A simple chatbot to manage inventory: add, update, remove, and view items.  

## Demo Video 
[Watch the demo](https://drive.google.com/file/d/1JM-r1KukkzjtCm5zNHiCksZTGDkwKYDU/view?usp=sharing)

## Features

- **Natural Language Commands**: Add, update, view, or delete inventory items using text-based commands.
- **Scalable Backend**: Built with **Node.js** and **MongoDB**.
- **Modern Frontend**: Built with **React** and **TailwindCSS**.
- **Cloud-Hosted**: Deployed on **Vercel**.

---

## System Architecture

1. **Frontend**: React + TailwindCSS  
2. **Backend**: Node.js API (handles inventory + Gemini AI integration)  
3. **Database**: MongoDB  
4. **Cloud Hosting**: Vercel  

---
## Installation and Setup

You can find it live [here](https://inventory-fnd-chatbot.vercel.app/) or run it locally:

### Prerequisites

- **Node.js** installed  
- **MongoDB Atlas** account (or local MongoDB instance)  
- **Google AI Studio** account for Gemini  

### Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/Ahm6dalii/Inventory-management-chat.git
   cd inventory-management-chatbot
   ```

2. **Install dependencies**
   ```bash
   cd backend 
   npm install 
   ```
   ```bash
   cd frontend
   npm install
   ```

3. **Configure environment variables**  
   Create a `.env` file inside **backend/** with:
   ```env
   PORT=5000
   
   ```

4. **Run the backend**
   ```bash
   cd backend 
   npm run dev 
   ```

5. **Run the frontend**  
   - If running **locally**, ensure the request uses `LOCAL_SERVER_LINK` in `app.jsx`:
     ```js
     const { data } = await axios.post(LOCAL_SERVER_LINK, { text });
     ```
   - If running on **live server**, ensure the request uses `LIVE_SERVER_LINK` in `app.jsx`:
     ```js
     const { data } = await axios.post(LIVE_SERVER_LINK, { text });
     ```

   ```bash
   cd frontend 
   npm run dev 
   ```

6. **Open the chatbot in your browser** after starting both backend and frontend:  
   [http://localhost:5173](http://localhost:5173)


## Usage

### Supported Commands

- **Check items**  
  - `"Do we have apples?"`  
  - `"Show info about laptops in stock."`  

- **Display all items**  
  - `"Display all items."`  
  - `"Show me everything in stock."`  

- **Update items**  
  - `"Update apples price to $3 and quantity to 15."`  
  - `"Change laptops price to $1200."`  

- **Delete items**  
  - `"Delete mobiles from inventory."`  
  - `"Remove laptops."`  

- **Add items**  
  - `"Add 10 apples at $2 each."`  
  - `"Add 5 laptops at $1000 each."`  

---

## Example Interaction

**User**: `"Add 10 apples at $2 each."`  
**Bot**: `"Added apples with quantity 10 and price $2."`  

**User**: `"Update laptops price to $1200."`  
**Bot**: `"Updated laptops to Quantity: 5, Price: $1200."`  

**User**: `"Delete mobiles."`  
**Bot**: `"Deleted mobiles from inventory."`  

**User**: `"Display all items."`  
**Bot**: `"Inventory: apples (10, $2), laptops (5, $1200)"`  

---

## Deployment on Vercel

You can deploy using **Vercel CLI** or **GitHub Integration**.

### Option 1: Vercel CLI (Manual)

1. Push project to GitHub.  
2. Install Vercel CLI:  
   ```bash
   npm install -g vercel
   ```
3. Login:  
   ```bash
   vercel login
   ```
4. Deploy:  
   ```bash
   vercel
   vercel --prod
   ```
5. Add environment variables:  
   ```bash
   vercel env add
   ```
6. Access your app via the provided Vercel URL.  
7. Redeploy after updates:  
   ```bash
   vercel --prod
   ```

### Option 2: GitHub Integration (Automatic)

1. Push project to GitHub.  
2. Go to [Vercel Dashboard](https://vercel.com/dashboard).  
3. Import your repo → configure project.  
4. Add environment variables in **Settings → Environment Variables**.  
5. Vercel will auto-deploy on every push to **main**.  

- Production: `https://your-app.vercel.app`  
- Preview: `https://branch-name-your-app.vercel.app`  

✅ Recommended: Use GitHub auto-deploy + CLI for manual redeploys.

---

## Troubleshooting

- **Gemini API errors** → Check `.env` GEMINI_API_KEY.  
- **MongoDB connection issues** → Verify `MONGO_URI`.  
- **Vercel deploy issues** → Check logs in Vercel Dashboard.  
