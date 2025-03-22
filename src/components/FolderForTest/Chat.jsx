import React, { useState, useEffect } from "react";
import SockJS from "sockjs-client";
import { Client } from "@stomp/stompjs";

const socket = new SockJS("http://localhost:8081/ws");

const Chat = () => {
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState("");
    const [client, setClient] = useState(null);
    
    useEffect(() => {
      const stompClient = new Client({
        webSocketFactory: () => socket,
        reconnectDelay: 5000,
        onConnect: () => {
            console.log("Connected to WebSocket");
        },
    });
    stompClient.activate();
        setClient(stompClient);

        return () => stompClient.deactivate();
    }, []);

    const sendMessage = () => {
      if (client && client.connected && message.trim() !== "") {
          console.log("메시지 전송 중:", message); // 디버깅용 로그
          client.publish({
              destination: "/app/chat",
              body: JSON.stringify({ sender: "User", content: message }),
          });
          setMessage("");
      } else {
          console.error("STOMP 클라이언트가 아직 연결되지 않았거나 메시지가 비어있음.");
      }
  };
  

    return (
        <div>
            <h2>채팅</h2>
            <div style={{ border: "1px solid black", height: "300px", overflowY: "auto" }}>
                {messages.map((msg, index) => (
                    <div key={index}>
                        <b>{msg.sender}:</b> {msg.content}
                    </div>
                ))}
            </div>
            <input value={message} onChange={(e) => setMessage(e.target.value)} />
            <button onClick={sendMessage}>전송</button>
        </div>
    );
};

export default Chat;
