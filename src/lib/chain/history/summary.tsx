import React from "react";
import { Dayjs } from "dayjs";
import { Message, MessageUid, Sender } from "../../concepts/types";

export interface SummaryProps {
    uid: MessageUid;
    text: string;
    sender: Sender;
}

export default function Summary({ text, sender }: SummaryProps) {
    const senderClass = sender === "you" ? "sender--you" : "sender--them";

    return <div className={`summary ${senderClass}`}>{text}</div>;
}
