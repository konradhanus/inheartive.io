import { ApiProperty } from "@nestjs/swagger";

export class AssetDto {
    @ApiProperty()
    id: string;

    @ApiProperty()
    originalName: string;

    @ApiProperty()
    fullPath: string;

    @ApiProperty()
    mimeType: string;

    @ApiProperty()
    createdAt: Date;

    @ApiProperty()
    updatedAt: Date;
}