
import React, { useEffect, useRef } from "react";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { useParams } from "react-router-dom";

const VideocallRoom = () => {
  const { id } = useParams(); // Get room ID from URL
  const meetingRef = useRef(null); // Create a ref for the meeting container

  useEffect(() => {
    const myMeeting = async () => {
      const appID = 1096343752;
      const serverSecret = "c72486c28fb06c329ab3e27ce5722666";
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
        className="bg-zinc-900"
        style={{ width: "100vw", height: "100vh" }}
      />
    </div>
  );
};

export default VideocallRoom;