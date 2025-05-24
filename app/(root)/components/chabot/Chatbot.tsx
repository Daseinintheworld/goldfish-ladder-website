import { Rocket, Bot } from "lucide-react"; 
import { useChat } from "@ai-sdk/react"; 
import { useEffect, useRef } from "react";
import chatgpt from "@/assets/chatgpt.png";

const Chatbot = () => {
  const { messages, input, handleInputChange, handleSubmit, status } =
    useChat();
  const chatRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="chat-container shadow-lg rounded-lg p-4 text-white flex flex-col h-full  lg:mx-[0px] mx-[60px]">
      <div className="chat-header flex items-center gap-2 animate-fade-in">
        <Rocket className="text-yellow-300 animate-bounce" />
        <h4 className="mb-0 text-lg font-bold">Cofounder AI Chat</h4>
      </div>

      <div
        className="chat-messages flex-1 relative overflow-y-auto space-y-4 p-2 rounded-lg animate-slide-up mx-auto max-w-4xl bg-yellow-300 opacity-90 "
        ref={chatRef}
        style={{
          backgroundImage: `url(${chatgpt.src})`, 
          backgroundSize: "cover", 
          backgroundPosition: "center", 
        }}
      >
        {/* Chat Content */}
        <div className="relative z-10">
          <div className="message-row animate-fade-in">
            <div className="avatar p-2">
              <Bot className="w-6 h-6" />
            </div>
            <div className="message-bubble p-3  ">
              Hey there! I&apos;m your AI cofounder. What business challenge are we tackling today?
            </div>
          </div>
          {messages.map((message) => (
            <div
              key={message.id}
              className={`message-row flex items-start gap-2 ${
                message.role === "user" ? "justify-end" : ""
              } animate-fade-in`}
            >
              <div
                className={`avatar ${
                  message.role === "user"
                    ? "bg-blue-400 text-white"
                    : "bg-yellow-300 text-black"
                } rounded-full p-2`}
              >
                {message.role === "user" ? "U" : <Bot className="w-6 h-6" />}
              </div>
              <div
                className={`message-bubble ${
                  message.role === "user"
                    ? "bg-blue-500 text-white"
                    : "bg-white bg-opacity-20 text-white"
                } p-3 `}
              >
                {message.content}
              </div>
            </div>
          ))}
        </div>
      </div>

      {status === "error" && (
        <p className="text-red-500 mt-2 animate-pulse">
          There seems to be an error.
        </p>
      )}

      <form
        onSubmit={handleSubmit}
        className="chat-input-area flex items-center gap-2 mt-4 animate-fade-in"
      >
        <input
          name="prompt"
          id="user-input"
          type="text"
          className="form-control flex-1 px-4 py-2 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-yellow-300"
          placeholder="Type your message..."
          autoComplete="off"
          value={input}
          onChange={handleInputChange}
          disabled={status !== "ready"}
          required
        />
        <button
          type="submit"
          id="send-btn"
          className="btn bg-yellow-300 text-black px-5 py-3 rounded-lg shadow-md  transition-transform transform hover:scale-105"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Chatbot;