import React from "react";
import { useNavigate } from "react-router-dom";
import { useState,useCallback } from "react";

const HomePage=()=>{
    const [value,setValue]=useState();

    const navigate=useNavigate();
    const handleJoinRoom=useCallback(()=>{
        navigate(`/room/${value}`);
    },[navigate,value])

    return(
        <div>
            <input 
            value={value}
            onChange={(e)=>setValue(e.target.value)}
            type="text" placeholder="Enter room code" />
            <button onClick={handleJoinRoom}>join</button>
        </div>
    )
}
export default HomePage;