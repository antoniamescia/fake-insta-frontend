import { User } from "./user.model";

export interface Chat {
    id: number;
    sender: User,
    receiver: User,
    // messages: Message[]

}
