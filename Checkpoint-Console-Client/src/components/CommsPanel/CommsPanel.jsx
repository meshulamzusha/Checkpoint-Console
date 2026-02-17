import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";

const CommsPanel = () => {
  const [messages, setMessages] = useState([]);
  const {token} = useContext(AuthContext)
  useEffect(() => {
    getMessages()
  },[messages])
  const getMessages = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/messages", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
      });

      const { messages } = await response.json();
      setMessages(messages);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <ol>
        {messages.map((m) => (
          <li key={m.id}>{m.content}</li>
        ))}
      </ol>
    </div>
  );
};

export default CommsPanel;
