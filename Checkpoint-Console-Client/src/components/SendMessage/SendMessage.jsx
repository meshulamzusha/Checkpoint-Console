import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const SendMessage = ({ onSend }) => {
  const { token } = useContext(AuthContext);

  const sendMessage = async (text) => {
    try {
      const response = await fetch("http://localhost:3000/api/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ text: text }),
      });

      const message = await response.json().message;
      if (message) {
        onSend([]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());

    sendMessage(formJson.msg);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="msg">send message</label>
        <input type="text" name="msg" id="msg" />
        <input type="submit" value={"send"} />
      </form>
    </div>
  );
};

export default SendMessage;
