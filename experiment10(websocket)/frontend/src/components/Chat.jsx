import { useState, useEffect, useRef } from 'react';

const Chat = () => {
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState('');
    const [username, setUsername] = useState('');
    const [isConnected, setIsConnected] = useState(false);
    const wsRef = useRef(null);

    useEffect(() => {
        // Connect to WebSocket server
        wsRef.current = new WebSocket('ws://localhost:8080');

        wsRef.current.onopen = () => {
            console.log('Connected to WebSocket');
            setIsConnected(true);
        };

        wsRef.current.onmessage = (event) => {
            const data = JSON.parse(event.data);
            setMessages((prev) => [...prev, data]);
        };

        wsRef.current.onclose = () => {
            console.log('Disconnected from WebSocket');
            setIsConnected(false);
        };

        wsRef.current.onerror = (error) => {
            console.error('WebSocket error:', error);
            setIsConnected(false);
        };

        return () => {
            if (wsRef.current) {
                wsRef.current.close();
            }
        };
    }, []);

    const sendMessage = () => {
        if (wsRef.current && wsRef.current.readyState === WebSocket.OPEN && message) {
            const chatMessage = {
                type: 'chat',
                username: username || 'Anonymous',
                message: message
            };
            wsRef.current.send(JSON.stringify(chatMessage));
            setMessage('');
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    };

    return (
        <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
            <div style={{ marginBottom: '20px' }}>
                <input 
                    type="text" 
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)} 
                    placeholder="Enter your username..."
                    style={{ padding: '8px', marginRight: '10px', width: '200px' }}
                />
                <span style={{ color: isConnected ? 'green' : 'red' }}>
                    {isConnected ? '● Connected' : '● Disconnected'}
                </span>
            </div>
            
            <div 
                className="chat-box" 
                style={{ 
                    height: '400px', 
                    overflowY: 'auto', 
                    border: '1px solid #ccc', 
                    padding: '15px', 
                    marginBottom: '15px',
                    borderRadius: '8px',
                    backgroundColor: '#f5f5f5'
                }}
            >
                {messages.map((msg, index) => (
                    <div 
                        key={index} 
                        style={{ 
                            marginBottom: '10px',
                            padding: '8px',
                            backgroundColor: msg.type === 'system' ? '#e0e0e0' : '#ffffff',
                            borderRadius: '4px',
                            borderLeft: msg.type === 'system' ? '4px solid #666' : '4px solid #007bff'
                        }}
                    >
                        {msg.type === 'system' ? (
                            <em style={{ color: '#666' }}>{msg.message}</em>
                        ) : (
                            <div>
                                <strong style={{ color: '#007bff' }}>{msg.username}</strong>
                                <span style={{ color: '#999', fontSize: '0.8em', marginLeft: '10px' }}>
                                    {msg.timestamp}
                                </span>
                                <div style={{ marginTop: '5px' }}>{msg.message}</div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
            
            <div style={{ display: 'flex', gap: '10px' }}>
                <input 
                    type="text" 
                    value={message} 
                    onChange={(e) => setMessage(e.target.value)} 
                    onKeyPress={handleKeyPress}
                    placeholder="Type a message..."
                    disabled={!isConnected}
                    style={{ 
                        flex: 1, 
                        padding: '10px', 
                        borderRadius: '4px',
                        border: '1px solid #ccc'
                    }}
                />
                <button 
                    onClick={sendMessage} 
                    disabled={!isConnected || !message}
                    style={{
                        padding: '10px 20px',
                        backgroundColor: '#007bff',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: isConnected && message ? 'pointer' : 'not-allowed'
                    }}
                >
                    Send
                </button>
            </div>
        </div>
    );
};

export default Chat;
