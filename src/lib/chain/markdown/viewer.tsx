import { useSmart } from "../../state/smart-value";
import MDEditor from "@uiw/react-md-editor";
import React from "react";
import { MarkdownEditor } from "wysiwyg-markdown-react";
import "wysiwyg-markdown-react/dist/wysiwyg-markdown-react.css";
import "wysiwyg-markdown-react/dist/theme.css";
import "./remirror.scss";
export interface ViewerProps {
    text: string;
    className?: string;
}

export default function Viewer({ text, className }: ViewerProps) {
    className = className ?? "";
    return (
        <MarkdownEditor
            editable={false}
            initialContent={text}
            onChange={() => {}}
        />
    );
}
