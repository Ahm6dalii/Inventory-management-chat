import React, { memo } from 'react'

const Message = ({ role, text }) => (
  <div className={`mb-3 flex ${role === "user" ? "justify-end" : "justify-start"}`}>
    <div
      className={`px-4 py-2 rounded-xl max-w-[80%] text-sm whitespace-pre-line shadow-sm ${
        role === "user"
          ? "bg-[#C6DCE6] text-gray-900 rounded-br-none"
          : "bg-[#E6EBD8] text-gray-900 rounded-bl-none"
      }`}
    >
      {text}
    </div>
  </div>
);


export default memo(Message)