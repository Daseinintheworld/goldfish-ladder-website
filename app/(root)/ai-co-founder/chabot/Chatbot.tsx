import Image from "next/image";
import { ArrowUp, Loader } from "lucide-react";
import { useChat } from "@ai-sdk/react";
import { useEffect, useRef } from "react";

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
    <div className="h-[60vh] max-w-4xl mx-auto px-4 py-6 flex flex-col rounded-xl shadow-xl bg-[#fff7f3]">
      {/* Chat Area */}
      <div
        ref={chatRef}
        className="flex-1 overflow-y-scroll space-y-4 p-4 bg-white rounded-xl border border-[#FCD699BF]"
      >
        {/* Intro Message */}
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full overflow-hidden">
            <Image src="/mascot.svg" alt="Bot" width={24} height={24} />
          </div>
          <div className="px-4 py-2 rounded-2xl shadow text-xs md:text-sm bg-[#FCD699BF] text-gray-800">
            <p>
              Hey there! I&apos;m your AI cofounder. What business challenge are
              we tackling today?
            </p>
          </div>
        </div>

        {/* Chat Messages */}
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex items-center gap-2 ${
              message.role === "user" ? "justify-end" : ""
            }`}
          >
            {message.role !== "user" && (
              <div className="w-6 h-6 rounded-full overflow-hidden">
                <Image src="/mascot.svg" alt="Bot" width={24} height={24} />
              </div>
            )}

            {message.role === "user" && (
              <div className="w-6 h-6 rounded-full overflow-hidden">
                <Image
                  src="/aiCoFounder/user.png"
                  alt="User"
                  width={24}
                  height={24}
                />
              </div>
            )}

            <div
              className={`px-4 py-2 rounded-2xl shadow max-w-sm text-xs md:text-sm transition-all duration-200 ease-in-out ${
                message.role === "user"
                  ? "bg-[#FCD699BF] text-gray-900"
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
        className="mt-4 flex items-center gap-2 bg-white p-3 rounded-xl shadow border border-[#f3d5b3]"
      >
        <input
          name="prompt"
          id="user-input"
          type="text"
          className="w-2/3 md:w-full flex-1 px-3 py-2 rounded-lg border border-[#f3d5b3] focus:outline-none focus:ring-2 focus:ring-[#FCD699BF] text-sm bg-[#FCD699BF]"
          placeholder="Ask Anything..."
          autoComplete="off"
          value={input}
          onChange={handleInputChange}
          disabled={status !== "ready"}
          required
        />

        {/* Mic Button */}
        <button
          type="button"
          className="p-2 hidden md:inline rounded-lg hover:bg-gray-100 transition-colors"
          onClick={() => {
            alert("Voice input coming soon!");
          }}
        >
          <Image
            src="/aiCoFounder/voice.png"
            alt="Voice"
            width={24}
            height={24}
            className="w-6 h-6"
          />
        </button>

        {/* Send Button */}
        <button
          type="submit"
          className="p-2 rounded-lg bg-[#854836] hover:bg-[#6e392c] transition-colors"
        >
          {status === "submitted" ? (
            <Loader className="w-4 h-4 animate-spin" />
          ) : (
            <ArrowUp className="w-4 h-4 text-white" />
          )}
        </button>
      </form>
    </div>
  );
};

export default Chatbot;
