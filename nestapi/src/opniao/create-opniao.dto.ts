import * as Joi from "joi";

 
export interface CriaOpniaoDTO  {
    readonly first_name: string,
    readonly last_name: string,
    readonly email: string,
    readonly phone: string,
    readonly address: string,
    readonly description: string,
    readonly satisfacao: number,
    readonly created_at: Date

}
export const CriaOpniaoSchema = Joi.object({
    first_name:Joi.string().required(),
    last_name: Joi.string(),
    email: Joi.string(),
    phone: Joi.string(),
    address: Joi.string(),
    description: Joi.string(),
    created_at: Joi.date(),
}).options({ abortEarly: false, allowUnknown: true });