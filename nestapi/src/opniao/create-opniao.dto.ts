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
    first_name:Joi.string().trim().required(),
    last_name: Joi.string().trim(),
    email: Joi.string().trim(),
    phone: Joi.string().trim(),
    address: Joi.string().trim(),
    description: Joi.string().trim(),
    created_at: Joi.date(),
}).options({ abortEarly: false, allowUnknown: true });