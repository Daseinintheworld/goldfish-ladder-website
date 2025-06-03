import { ArrowUp, Bot, Mic } from "lucide-react";
import { useChat } from "@ai-sdk/react";
import { useEffect, useRef } from "react";

const Chatbot = () => {
  const { messages, input, handleInputChange, handleSubmit, status } = useChat();
  const chatRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="h-full max-w-4xl mx-auto px-4 py-6 flex flex-col rounded-xl shadow-xl bg-[#fff7f3]">

      {/* Chat Area */}
      <div
        ref={chatRef}
        className="flex-1 overflow-y-auto space-y-4 p-4 bg-white rounded-xl border border-[#FCD699BF]"
      >
        {/* Intro Message */}
        <div className="flex gap-2 items-start">
          <div className="w-8 h-8 flex items-center justify-center rounded-full bg-[#854836]">
            <Bot className="w-4 h-4 text-white" />
          </div>
          <div className="px-4 py-2 rounded-2xl shadow text-sm bg-[#FCD699BF] text-gray-800">
            <p>
              Hey there! I&apos;m your AI cofounder. What business challenge are we tackling today?
            </p>
          </div>
        </div>

        {/* Chat Messages */}
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex items-start gap-2 ${message.role === "user" ? "justify-end" : ""}`}
          >
            {message.role !== "user" && (
              <div className="w-8 h-8 flex items-center justify-center rounded-full bg-[#854836]">
                <Bot className="w-4 h-4 text-white" />
              </div>
            )}

            {message.role === "user" && (
              <div className="w-8 h-8 flex items-center justify-center rounded-full bg-pink-500 text-white text-sm font-bold">
                U
              </div>
            )}

            <div
              className={`px-4 py-2 rounded-2xl shadow max-w-sm text-sm transition-all duration-200 ease-in-out ${
                message.role === "user"
                  ? "bg-pink-100 text-gray-800"
                  : "bg-[#FCD699BF] text-gray-900"
              }`}
            >
              {message.content}
            </div>
          </div>
        ))}
      </div>

      {/* Error Message */}
      {status === "error" && (
        <p className="text-red-500 mt-2 text-center animate-pulse text-sm">
          There seems to be an error.
        </p>
      )}

      {/* Input Bar */}
      <form
        onSubmit={handleSubmit}
        className="mt-4 flex items-center gap-2 bg-white p-3 rounded-xl shadow border border-[#854836]"
      >
        <input
          name="prompt"
          id="user-input"
          type="text"
          className="flex-1 px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FCD699BF] text-sm"
          placeholder="Type your message..."
          autoComplete="off"
          value={input}
          onChange={handleInputChange}
          disabled={status !== "ready"}
          required
        />

        {/* Mic Button */}
        <button
          type="button"
          className="p-2 rounded-lg hover:bg-gray-100 transition-colors text-[#854836]"
          onClick={() => {
            alert("Voice input coming soon!");
          }}
        >
          <Mic className="w-5 h-5" />
        </button>

        {/* Send Button */}
        <button
          type="submit"
          className="p-2 rounded-lg hover:bg-gray-100 transition-colors text-[#854836]"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      </form>
    </div>
  );
};

export default Chatbot;
