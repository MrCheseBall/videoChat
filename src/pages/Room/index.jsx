import React from "react";
import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
const RoomPage = () => {
    const { roomId } = useParams();

    const myMeeting = async (element) => {
        const appID = 1171578754;
        const serverSecret = "9c989ef107b11231e4442cb1736be612";
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