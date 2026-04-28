# WebSocket Live Chat Application

A real-time chat application using WebSocket with backend on port 8080 and frontend on port 5173.

## Project Structure

- `backend/` - WebSocket server running on port 8080
- `frontend/` - React chat application running on port 5173

## Setup Instructions

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Start the WebSocket server:
```bash
npm start
```

The backend will run on **http://localhost:8080**

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies (if not already installed):
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The frontend will run on **http://localhost:5173**

## How to Use

1. Open multiple browser tabs or different browsers to **http://localhost:5173**
2. Enter a username in each tab
3. Start chatting - messages will appear in real-time across all connected clients
4. Connection status is shown (green = connected, red = disconnected)

## Features

- Real-time messaging using WebSocket
- Multiple users can chat simultaneously
- Connection status indicator
- Username support
- Timestamp on messages
- System notifications for join/leave events
- Clean, modern UI

## Ports

- **Backend**: 8080
- **Frontend**: 5173

## Technologies Used

- **Backend**: Node.js with `ws` library
- **Frontend**: React with Vite
- **Protocol**: Native WebSocket
