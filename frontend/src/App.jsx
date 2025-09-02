import {  useEffect, useRef, useState } from "react";
import { Search, Send } from "lucide-react";
import axios from "axios";
import "./App.css";
import MessageLoading from "./components/MessageLoading";
import Message from "./components/Message";
import { lIVE_SERVER_lINK, lOCAL_SERVER_lINK } from "./apiLinks/apiLinks";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [messages, setMessages] = useState([]);
  const messagesEndRef = useRef(null);

  const sendTextToInventory = async (text) => {
    console.log(text);
    
    if (!text?.trim()) return;

    setMessages((prev) => [...prev, { role: "user", text }]);
    setIsAnalyzing(true);

    try {
      const { data } = await axios.post(lOCAL_SERVER_lINK, { text });
      setMessages((prev) => [...prev, { role: "bot", text: data.reply || "✅ Request sent successfully" }]);
    } catch {
      setMessages((prev) => [...prev, { role: "bot", text: "❌ Server error, please try again." }]);
    } finally {
      setIsAnalyzing(false);
      setSearchQuery("");
    }
  };

  // Scrolls down whenever messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isAnalyzing]);


  return (
    <div
      className="min-h-screen p-4 flex items-center justify-center"
      style={{ background: "linear-gradient(135deg, #F7E6BF, #E6EBD8, #C6DCE6, #6FA9B3)" }}
    >
      <div className="max-w-md w-full space-y-6">
        <div className="text-center">
          <h1 className="text-2xl font-extrabold text-gray-800 drop-shadow-lg mb-5">📦 Inventory Chat Management</h1>
          <p className="text-gray-700 text-sm -mt-2">Manage your items easily with chat</p>
        </div>

        <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-lg p-6 h-96 overflow-y-auto border border-white/40">
          {messages.map((msg, i) => (
            <Message key={i} role={msg.role} text={msg.text} />
          ))}
          {isAnalyzing && <MessageLoading />}
          <div ref={messagesEndRef} />
        </div>

        <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-lg p-4 border border-white/40">
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Ask about inventory..."
              className="w-full ps-8 bg-white/80 border-0 rounded-xl py-3 px-4 pr-12 text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#6FA9B3] focus:bg-white/90 transition-all duration-200"
              onKeyDown={(e) => e.key === "Enter" && sendTextToInventory(searchQuery)}
            />
            <Search className="absolute left-3 top-3.5 w-4 h-4 text-gray-500" />
            <button
              onClick={() => sendTextToInventory(searchQuery)}
              className="absolute right-3 top-2.5 w-8 h-8 bg-[#6FA9B3] hover:bg-[#5B8A99] rounded-full flex items-center justify-center transition-colors duration-200"
            >
              <Send className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
