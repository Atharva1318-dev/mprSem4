import React from "react";
import { useNavigate } from "react-router-dom";
const VideoCallHome = () => {
  const [roomId, setRoomId] = React.useState("");
  const navigate = useNavigate();
  const handleJoin = () => {
    navigate(`/dashboard/videocall/room/${roomId}`);
  };
  return (
    <div className="bg-zinc-900 text-blue-200 min-h-screen flex flex-col items-center justify-center space-y-4">
      <input
        type="text"
        placeholder="Enter Room Id"
        className="p-2 rounded-md border border-blue-400 bg-zinc-800 text-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
        onChange={(e) => setRoomId(e.target.value)}
      />
      <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700" onClick={handleJoin}>
        Join Now
      </button>
    </div>
   
  );
};

export default VideoCallHome;
