import { Message } from "../../concepts/types";
import React, { ReactElement } from "react";
import Page from "./page";
import Pane, { ViewPaneProps } from "./pane";

export interface PanesProps {
    messages: Message[];
}

export default class Panes extends React.Component<PanesProps> {
    render() {
        const { messages } = this.props;
        const panes = [] as ReactElement[];

        function getSummaryMessages(index: number) {
            if (index * 3 >= messages.length) {
                return [];
            }
            if (index === 0) {
                return messages.slice(-2);
            }
            const target = messages.slice(
                -index * 3 - 2,
                index === 0 ? undefined : -index * 3 + 1
            );
            return target;
        }

        for (let i = 0; i < messages.length; i += 1) {
            const message = messages[messages.length - 1 - i];
            const summaries = getSummaryMessages(i);
            panes.push(
                <Pane
                    message={message}
                    summaries={summaries.map(message => ({
                        uid: message.uid,
                        sender: message.sender,
                        text: message.summaryText
                    }))}
                    key={message.uid}
                    isLastSummaried={i !== 0 && summaries.length < 3}
                />
            );
        }
        return (
            <div className="panes">
                <div
                    style={{
                        width: "33.33vw",
                        height: "100%",
                        minWidth: "33.33vw"
                    }}
                    className="pane"
                ></div>
                {panes}
            </div>
        );
    }
}
