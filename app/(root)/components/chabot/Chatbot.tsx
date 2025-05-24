import { Rocket } from "lucide-react";
import { useChat } from "@ai-sdk/react"; // Ensure OPENAI_API_KEY environment variable is set

const Chatbot = () => {
  const { messages, input, handleInputChange, handleSubmit, status } =
    useChat();

  return (
    <div className="chat-container shadow">
      <div className="chat-header flex gap-2">
        <Rocket />
        <h4 className="mb-0">Cofounder AI Chat</h4>
      </div>
      <div className="chat-messages" id="chat">
        <div>
          <div className="message-row">
            <div className="avatar">🤖</div>
            <div className="message-bubble">
              Hey there! I&apos;m your AI cofounder. What business challenge are
              we tackling today?
            </div>
          </div>
        </div>
        {messages.map((message) => (
          <div key={message.id}>
            <div
              className={`message-row ${
                message.role === "user" ? "user" : "assistant"
              }`}
            >
              <div className="avatar">
                {message.role === "user" ? "U" : "🤖"}
              </div>
              <div className="message-bubble">{message.content}</div>
            </div>
          </div>
        ))}
      </div>
      {status === "error" && <p>There seems to be an error.</p>}
      <form onSubmit={handleSubmit} className="chat-input-area d-flex">
        <input
          name="prompt"
          id="user-input"
          type="text"
          className="form-control me-2"
          placeholder="Type your message..."
          autoComplete="off"
          value={input}
          onChange={handleInputChange}
          disabled={status !== "ready"}
          required
        />
        <button type="submit" id="send-btn" className="btn btn-primary px-4">
          Send
        </button>
      </form>
    </div>
  );
};

export default Chatbot;
