import {ApiProperty} from "@nestjs/swagger";
import {Type} from "class-transformer";
import {PlaceOutput} from "../../place/dtos/place-output.dto";

export class OrderOutput {
    @ApiProperty()
    id: string;

    @ApiProperty()
    createdAt: Date;

    @Type(() => PlaceOutput)
    @ApiProperty()
    place: PlaceOutput;
}