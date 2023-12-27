import React from "react";
import { MarkdownEditor } from "wysiwyg-markdown-react";
import "wysiwyg-markdown-react/dist/wysiwyg-markdown-react.css";
import "wysiwyg-markdown-react/dist/theme.css";

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
            onChange={console.log}
        />
    );
}
