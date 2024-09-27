import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Usuarios } from "./usuarios.entity";
import { Propiedades } from "./propiedades.entity";

@Entity('reservas')
export class Reservas{
    // id de reserva
    @PrimaryGeneratedColumn('increment')
    id: number;

    // fecha de ingreso
    @Column({ type: 'date', nullable: false})
    fechaIngreso: Date;

    // fecha de salida registrada
    @Column({ type: 'date', nullable: false})
    fechaSalida: Date;

    // Marca de salida del departamento o parcela
    @Column({ type: 'bool', default: false })
    salida: boolean;

    // Estado de reserva, por defecto "pendiente"
    @Column({ type: 'string', default: 'pendiente', nullable: false, length: 20 })
    estado: string;

    // Codigo de ingreso 
    @Column({ type: 'string', nullable: false, length: 6 })
    codigo: string;

    // id de Usuario que hizo la reserva
    @ManyToOne(() => Usuarios, usuarios => usuarios.id)
    @JoinColumn({ name: 'id'})
    idUsuario: Usuarios;

    // Id de propiedad que se reservó
    @ManyToOne(() => Propiedades, propiedades => propiedades.id)
    @JoinColumn({ name: 'id'})
    idPropiedad: Propiedades;
}