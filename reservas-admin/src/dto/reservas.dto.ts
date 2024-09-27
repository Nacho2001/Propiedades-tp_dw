import { IsBoolean, IsDate, IsEnum, IsString } from "class-validator";
import { EstadoReserva } from "src/enums/estados.enum";

// Crea el DTO de una reserva
export class ReservaDto{
    id: number;

    @IsDate()
    fechaIngreso: Date;

    @IsDate()
    fechaSalida: Date;

    @IsBoolean()
    salida: boolean;

    @IsEnum(EstadoReserva)
    estado: EstadoReserva;

    @IsString()
    codigo: string;

    idUsuario: number;

    idPropiedad: number;
}