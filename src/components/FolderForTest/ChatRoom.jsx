import React, { useEffect, useState } from "react";
import SockJS from "sockjs-client";
import { Client } from "@stomp/stompjs";

const ChatRoom = () => {
    const [client, setClient] = useState(null);
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState("");
    const [username, setUsername] = useState("");
    const [tempUsername, setTempUsername] = useState(""); // 임시 닉네임 상태 추가
    const [connected, setConnected] = useState(false);

    const handleUsernameSubmit = () => {
        if (tempUsername.trim() === "") {
            alert("닉네임을 입력해주세요.");
            return;
        }
        setUsername(tempUsername); // "입장" 버튼 클릭 시 닉네임 상태 설정
        setConnected(true); // 연결 상태를 true로 설정하여 채팅방 연결 시작
    };

    useEffect(() => {
        if (connected && username) { // connected 상태가 true일 때만 연결 시도
            const socket = new SockJS("http://localhost:8081/ws");
            const stompClient = new Client({
                webSocketFactory: () => socket,
                reconnectDelay: 5000,
                onConnect: () => {
                    console.log("WebSocket 연결 성공");
                    stompClient.subscribe("/topic/chatroom", (msg) => {
                        const receivedMessage = JSON.parse(msg.body);
                        console.log("받은 메시지:", receivedMessage);
                        setMessages((prev) => [...prev, receivedMessage]);
                    });

                    // 입장 메시지 보내기
                    stompClient.publish({
                        destination: "/app/chat",
                        body: JSON.stringify({ sender: username, content: `${username} 님이 입장하셨습니다.`, type: "JOIN" }),
                    });
                },
                onDisconnect: () => {
                    console.log("WebSocket 연결 종료");
                    setConnected(false);
                },
            });

            stompClient.activate();
            setClient(stompClient);

            return () => {
                stompClient.deactivate();
            };
        }
    }, [connected, username]); // connected와 username을 의존성 배열에 추가

    const sendMessage = () => {
        if (client && connected && message.trim() !== "") {
            client.publish({
                destination: "/app/chat",
                body: JSON.stringify({ sender: username, content: message, type: "CHAT" }),
            });
            setMessage("");
        }
    };

    return (
        <div>
            {!connected ? ( // connected 상태에 따라 입력 필드 표시
                <div>
                    <h2>채팅방 입장</h2>
                    <input
                        type="text"
                        placeholder="닉네임 입력"
                        onChange={(e) => setTempUsername(e.target.value)} // 임시 닉네임 상태 업데이트
                        value={tempUsername}
                    />
                    <button onClick={handleUsernameSubmit}>입장</button>
                </div>
            ) : (
                <div>
                    <h2>채팅방</h2>
                    <div style={{ border: "1px solid black", height: "300px", overflowY: "scroll" }}>
                        {messages.map((msg, index) => (
                            <p key={index}>
                                <strong>{msg.sender}:</strong> {msg.content}
                            </p>
                        ))}
                    </div>
                    <input
                        type="text"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="메시지 입력"
                    />
                    <button onClick={sendMessage}>전송</button>
                </div>
            )}
        </div>
    );
};

export default ChatRoom;