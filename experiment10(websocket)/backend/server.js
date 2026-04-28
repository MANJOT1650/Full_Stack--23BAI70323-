const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080 });

console.log('WebSocket server is running on port 8080');

// Store connected clients
const clients = new Set();

wss.on('connection', (ws) => {
  console.log('New client connected');
  clients.add(ws);

  // Send welcome message to the new client
  ws.send(JSON.stringify({
    type: 'system',
    message: 'Welcome to the chat! You are now connected.'
  }));

  // Broadcast to all other clients that someone joined
  broadcastToOthers(ws, {
    type: 'system',
    message: 'A new user has joined the chat.'
  });

  // Handle incoming messages
  ws.on('message', (message) => {
    try {
      const data = JSON.parse(message);
      
      if (data.type === 'chat') {
        console.log(`Received message: ${data.message}`);
        
        // Broadcast the message to all clients
        broadcast({
          type: 'chat',
          username: data.username || 'Anonymous',
          message: data.message,
          timestamp: new Date().toLocaleTimeString()
        });
      }
    } catch (error) {
      console.error('Error parsing message:', error);
    }
  });

  // Handle client disconnection
  ws.on('close', () => {
    console.log('Client disconnected');
    clients.delete(ws);
    
    // Broadcast to all remaining clients
    broadcast({
      type: 'system',
      message: 'A user has left the chat.'
    });
  });

  // Handle errors
  ws.on('error', (error) => {
    console.error('WebSocket error:', error);
    clients.delete(ws);
  });
});

// Broadcast message to all clients
function broadcast(data) {
  const message = JSON.stringify(data);
  clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(message);
    }
  });
}

// Broadcast message to all clients except the sender
function broadcastToOthers(senderWs, data) {
  const message = JSON.stringify(data);
  clients.forEach((client) => {
    if (client !== senderWs && client.readyState === WebSocket.OPEN) {
      client.send(message);
    }
  });
}
