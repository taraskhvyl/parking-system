import {ApiProperty} from "@nestjs/swagger";

export class PlaceOutput {
    @ApiProperty()
    id: string;

    @ApiProperty()
    number: string;

    @ApiProperty()
    status: string;

    @ApiProperty()
    type: string;
}