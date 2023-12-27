import { Chain, Message } from "./types";
import dayjs from "dayjs";

export function generateMessages() {
    const messages = [
        {
            uid: "uid-1",
            seq: 0,
            fullText: "This is the full text of the first message.",
            summaryText: "First message summary."
        },
        {
            uid: "uid-2",
            seq: 1,
            fullText: "This is the full text of the second message.",
            summaryText: "Second message summary."
        },
        {
            uid: "uid-3",
            seq: 2,
            fullText: "This is the full text of the third message.",
            summaryText: "Third message summary."
        },
        {
            uid: "uid-4",
            seq: 3,
            fullText: "This is the full text of the fourth message.",
            summaryText: "Fourth message summary."
        },
        {
            uid: "uid-5",
            seq: 4,
            fullText: "This is the full text of the fifth message.",
            summaryText: "Fifth message summary."
        },
        {
            uid: "uid-6",
            seq: 5,
            fullText: "This is the full text of the sixth message.",
            summaryText: "Sixth message summary."
        },
        {
            uid: "uid-7",
            seq: 6,
            fullText: "This is the full text of the seventh message.",
            summaryText: "Seventh message summary."
        },
        {
            uid: "uid-8",
            seq: 7,
            fullText: "This is the full text of the eighth message.",
            summaryText: "Eighth message summary."
        },
        {
            uid: "uid-9",
            seq: 8,
            fullText: "This is the full text of the ninth message.",
            summaryText: "Ninth message summary."
        },
        {
            uid: "uid-10",
            seq: 9,
            fullText: "This is the full text of the tenth message.",
            summaryText: "Tenth message summary."
        }
    ];

    const fullMessages = messages.map(
        (x, i) =>
            ({
                ...x,
                chain: null! as Chain,
                timing: {
                    start: dayjs(),
                    end: dayjs().add(1, "hour")
                },
                sender:
                    i % 2 === 0
                        ? "you"
                        : {
                              name: "Bot",
                              uid: "bot-uid"
                          }
            }) satisfies Message
    );

    const chain: Chain = {
        root: fullMessages[0],
        tip: fullMessages[fullMessages.length - 1],
        uid: "chain-uid"
    };

    for (const x of fullMessages) {
        x.chain = chain;
    }

    return fullMessages;
}
