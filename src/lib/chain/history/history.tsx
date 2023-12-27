import { Message } from "../../concepts/types";

import Panes from "./panes";
import React from "react";
import "./history.scss";

export interface HistoryViewProps {
    messages: Message[];
}

export default function History({ messages }: HistoryViewProps) {
    return (
        <section className="history">
            <div className="summaries_overlay"></div>
            <Panes messages={messages} />
            <div className="summaries_overlay"></div>
        </section>
    );
}
