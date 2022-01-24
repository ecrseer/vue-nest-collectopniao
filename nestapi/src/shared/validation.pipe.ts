import { ArgumentMetadata, BadRequestException, PipeTransform } from "@nestjs/common";
import { ObjectSchema } from "joi";

export class JoiValidationPipe implements PipeTransform<undefined>{
    constructor(private schema:ObjectSchema){}

    transform(value: any, metadata: ArgumentMetadata) {
        const {error} = this.schema.validate(value)
        if(error){
            throw new BadRequestException("Dados incorretos.");
            
        }
        return value

    }

}