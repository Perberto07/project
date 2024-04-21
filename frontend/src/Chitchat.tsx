
import Chatbot from "react-chatbot-kit";
import 'react-chatbot-kit/build/main.css';
import MessageParser from "./components/Messageparser";
import config from "./components/config";
import ActionProvider from "./components/ActionProvider";

function Chitchat() {
  return (
    <div className="chatbot-containe">
      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
    </div>
  );
}

export default Chitchat;

