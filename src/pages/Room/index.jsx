import React from "react";
import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
const RoomPage = () => {
    const { roomId } = useParams();

    const myMeeting = async (element) => {
        const appID = ;
        const serverSecret = "";
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomId, Date.now().toString(), "aship");
        const zg=ZegoUIKitPrebuilt.create(kitToken);
        zg.joinRoom({
            container: element,
            sharedLinks:[
                {
                    name:'copy link',
                    url:`http://localhost:3000/room/${roomId}`,
                }
            ],
            scenario:{
                node: ZegoUIKitPrebuilt.OneONoneCall,
            },
            showScreenSharingButton: false,
        })

    }

    return (
        <div>
            <div ref={myMeeting} />
        </div>
    );
}
export default RoomPage;
