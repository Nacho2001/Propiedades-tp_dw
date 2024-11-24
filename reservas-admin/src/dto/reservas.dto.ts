import { IsArray, IsBoolean, IsDateString, IsEnum, IsOptional, IsString } from "class-validator";
import { EstadoReserva } from "src/enums/estados.enum";
import { UsuarioDto } from "./usuarios.dto";
import { PropiedadDto } from "./propiedades.dto";

// Crea el DTO de una reserva
export class ReservaDto{
    id: number;

    @IsDateString()
    fechaIngreso: Date;

    @IsDateString()
    fechaSalida: Date;

    @IsOptional()
    @IsBoolean()
    salida: boolean;

    @IsOptional()
    @IsEnum(EstadoReserva)
    estado: EstadoReserva;

    @IsOptional()
    @IsString()
    codigo: string;

    usuario: UsuarioDto;

    @IsArray()
    propiedades: PropiedadDto;
}