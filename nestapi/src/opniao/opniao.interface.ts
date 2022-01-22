import { Document } from "mongoose";

export interface Opniao extends Document {
    readonly first_name: string,
    readonly last_name: string,
    readonly email: string,
    readonly phone: string,
    readonly address: string,
    readonly description: string,
    readonly satisfacao: number,
    readonly created_at: Date

}