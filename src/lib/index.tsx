import React from "react";
import { createRoot } from "react-dom/client";
import { generateMessages } from "./concepts/generate-messages";
import Root from "./chain/root";

const messages = generateMessages();
createRoot(document.getElementById("root")!).render(
    <Root messages={messages} />
);
