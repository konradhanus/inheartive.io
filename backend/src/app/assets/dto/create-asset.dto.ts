import { ApiProperty } from "@nestjs/swagger";

export class CreateAssetBody {
  @ApiProperty()
  readonly originalName: string;

  @ApiProperty()
  readonly fullPath: string;

  @ApiProperty()
  readonly mimeType: string;
}
