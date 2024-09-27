import { IsEnum, IsNumber, IsString } from "class-validator";
import { TipoPropiedad } from "src/enums/tipos.enum";

// declara propiedad DTO
export class PropiedadDto {
    // id
    id: number;

    // nombre
    @IsString()
    nombre: string;

    // tipo
    @IsEnum(TipoPropiedad)
    tipo: TipoPropiedad;

    // precio
    @IsNumber()
    precio: number;
}