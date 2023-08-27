import {ApiProperty} from "@nestjs/swagger";

export class OrderOutput {
    @ApiProperty()
    id: string;

    @ApiProperty()
    createdAt: Date;


}