"use client"

import React, { useEffect, FormEvent } from 'react';
import Sidebar from "@/components/sidebar/sidebarchat";
import MessageContainer from "@/components/message/MessageContainer"


import "@/app/styles/chat/style.scss"

export default function Chat() {



    return (

        < div className="chat-container">
            <Sidebar />
            <MessageContainer />
        </div>

    );
}