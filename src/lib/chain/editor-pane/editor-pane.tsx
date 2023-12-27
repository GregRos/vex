import React, { useRef } from "react";
import Editor from "../markdown/editor";
import DragBar from "./drag-bar";
import { useSmart } from "../../state/smart-value";
import "./editor-pane.scss";
export interface EditorPaneProps {
    initialText: string;
    onChange(newText: string): void;
    onSend(text: string): void;
}

export default function EditorPane({
    initialText,
    onChange,
    onSend
}: EditorPaneProps) {
    const isExpanded = useSmart(false);
    const editorRef = useRef(null);
    const expandedClass = isExpanded.value ? "editor-pane--expanded" : "";
    return (
        <section
            className={`editor-pane ${expandedClass}`}
            onKeyDown={x => {
                if (x.ctrlKey && x.key === "Enter") {
                    onSend(initialText);
                    onChange("");
                }
            }}
        >
            <Editor text={initialText} onChange={onChange} />
            <DragBar onInteract={isExpanded.doMap(x => !x)} />
        </section>
    );
}
