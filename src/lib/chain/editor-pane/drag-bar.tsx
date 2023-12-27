import React from "react";

export interface DragBarProps {
    onInteract(): void;
}

export default function DragBar({ onInteract }: DragBarProps) {
    return <div className="drag-bar" onClick={onInteract} />;
}
