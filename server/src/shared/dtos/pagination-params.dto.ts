import {ApiPropertyOptional} from "@nestjs/swagger";
import {IsNumber, IsOptional, Min} from "class-validator";

export class PaginationParamsDto {
    @ApiPropertyOptional({
        description: 'Optional, defaults to 100',
        type: Number,
    })
    @IsNumber()
    @IsOptional()
    @Min(1)
    page = 1;

    @ApiPropertyOptional({
        description: 'Optional, defaults to 10',
        type: Number,
    })
    @IsNumber()
    @IsOptional()
    @Min(1)
    limit = 10;
}