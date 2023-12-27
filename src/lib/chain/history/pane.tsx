import Summary, { SummaryProps } from "./summary";
import { Message } from "../../concepts/types";
import React from "react";
import Page from "./page";

export interface ViewPaneProps {
    summaries: SummaryProps[];
    message: Message;
    isLastSummaried: boolean;
}

export default function Pane(props: ViewPaneProps) {
    const { summaries, message, isLastSummaried } = props;
    const lastSummariedClass = isLastSummaried ? "last_summaried" : "";
    return (
        <div className={`pane ${lastSummariedClass}`}>
            <div className="pane_summaries">
                {summaries.map((summary, i) => (
                    <Summary {...summary} key={summary.uid} />
                ))}
            </div>
            <Page message={message} />
        </div>
    );
}
