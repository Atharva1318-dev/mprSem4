
import React, { useEffect, useRef } from "react";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { useParams } from "react-router-dom";

const VideocallRoom = () => {
  const { id } = useParams(); // Get room ID from URL
  const meetingRef = useRef(null); // Create a ref for the meeting container

  useEffect(() => {
    const myMeeting = async () => {
      const appID = 1344802977;
      const serverSecret = "7e1a73ac219d75be8c3b147c61413374";
      const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
        appID,
        serverSecret,
        id,
        Date.now().toString(),
        "Rishabh Jain"
      );
      const zp = ZegoUIKitPrebuilt.create(kitToken);
      zp.joinRoom({
        container: meetingRef.current, // Use the ref as the container
        sharedLinks: [
          {
            name: "copy link",
            url:
              window.location.protocol +
              "//" +
              window.location.host +
              window.location.pathname +
              "?roomID=" +
              id,
          },
        ],
        scenario: {
          mode: ZegoUIKitPrebuilt.GroupCall, // Change to OneONoneCall for 1-on-1 calls
        },
      });
    };

    myMeeting();
  }, [id]); // Run effect when id changes

  return (
    <div>
      <div
        ref={meetingRef} // Use the ref here
        className="bg-gray-50"
        style={{ width: "100vw", height: "100vh" }}
      />
    </div>
  );
};

export default VideocallRoom;
