import { Dayjs } from "dayjs";
import { Observable } from "rxjs";
import { Duration } from "dayjs/plugin/duration";

export type MessageUid = string;
export type ChainUid = string;
export type FieldUid = string;
export type BotUid = string;

export interface Timing {
    start: Dayjs;
    end: Dayjs;
}

export interface Chain {
    uid: ChainUid;
    root: Message;
    tip: Message;
}

export interface Message {
    uid: MessageUid;
    sender: Sender;
    timing: Timing;
    text: string;
}

export type PagePane = {
    summaries: Map<MessageUid, Message>;
};

export type Sender = Bot | "you";

export interface Bot {
    uid: BotUid;
    name: string;
}

export interface Field {
    uid: FieldUid;
    title: string;
    bot: Bot;
}
