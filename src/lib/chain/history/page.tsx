import React from "react";
import { Dayjs } from "dayjs";
import { Message, MessageUid } from "../../concepts/types";
import Viewer from "../markdown/viewer";
export interface ChainPageProps {
    message: Message;
}

export default function Page({
    message: { fullText, sender }
}: ChainPageProps) {
    const senderClass = sender === "you" ? "sender--you" : "sender--them";
    return (
        <div className={`page ${senderClass}`}>
            <Viewer text={fullText} />
        </div>
    );
}
