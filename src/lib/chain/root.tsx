import React from "react";
import EditorPane from "./editor-pane/editor-pane";
import History from "./history/history";
import { Message } from "../concepts/types";
import "./root.scss";
import { useSmart } from "../state/smart-value";
export interface RootProps {
    messages: Message[];
}

export default function Root({ messages }: RootProps) {
    const editorText = useSmart("");
    return (
        <>
            <EditorPane
                initialText={editorText.value}
                onChange={editorText.set}
                onSend={console.log}
            />
            <History messages={messages} />
        </>
    );
}
