import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('propiedades')
export class Propiedades{
    // id de propiedades
    @PrimaryGeneratedColumn('increment')
    id: number;

    // nombre de propiedad
    @Column({ type: 'string', nullable: false, length: 255 })
    nombre: string;

    // Tipo de propiedad: Departamento o parcela
    @Column({ type: 'string', nullable: false, length: 255 })
    tipo: string;

    // Precio (la alternativa es cargarlo como flotante para permitir decimales)
    @Column({ type: 'decimal', nullable: false })
    precio: number;

}