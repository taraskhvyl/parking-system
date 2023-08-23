import {ApiProperty} from "@nestjs/swagger";
import {Type} from "class-transformer";
import {OrderOutput} from "../../order/dtos/order-output.dto";

export class UserOutput {
    @ApiProperty()
    id: number;

    @ApiProperty()
    email: string;

    @ApiProperty()
    firstName: string;

    @ApiProperty()
    lastName: string;

    @Type(() => OrderOutput)
    @ApiProperty()
    orders: OrderOutput[];
}