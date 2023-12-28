import React from "react";
import { MarkdownEditor } from "@remirror/react-editors/markdown";
import { marked } from "marked";
export interface EditorProps {
    text: string;

    onChange(newText: string): void;

    className?: string;
}

export default function Editor({ text, onChange, className }: EditorProps) {
    className = className ?? "";
    return (
        <MarkdownEditor
            editable={true}
            placeholder={"Your message here..."}
            initialContent={text}
        />
    );
}
