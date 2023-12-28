import { useSmart } from "../../state/smart-value";
import React from "react";

import "./remirror.scss";
import { MarkdownEditor } from "@remirror/react-editors/markdown";
export interface ViewerProps {
    text: string;
    className?: string;
}

export default function Viewer({ text, className }: ViewerProps) {
    className = className ?? "";
    return <MarkdownEditor editable={false} initialContent={text} />;
}
