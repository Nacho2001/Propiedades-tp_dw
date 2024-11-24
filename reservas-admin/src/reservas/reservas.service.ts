import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ReservaDto } from 'src/dto/reservas.dto';
import { Reservas } from 'src/entities/reservas.entity';
import { QueryFailedError, Repository } from 'typeorm';
import checkNull from './checkNull';
import generateCode from './generateCode';

@Injectable()
export class ReservasService {
    constructor(
        @InjectRepository(Reservas) private readonly repo: Repository<ReservaDto>
    ){}

    // Listar reservas
    async findAll(): Promise<ReservaDto[]>{
        try {
            let result = await this.repo.find();
            return result;
        } catch (error) {
            if (error instanceof QueryFailedError)
                throw new HttpException(`${error.name} ${error.driverError}`, 404);
            throw new HttpException(error.message, error.status);
        }
    }

    // Crear nueva reserva
    async create(reserva: ReservaDto): Promise<ReservaDto>{
        try {
            reserva.codigo = generateCode();
            let nullFlag = checkNull(reserva);
            console.log(nullFlag)
            if (nullFlag == 0) {
                const result = await this.repo.save(reserva);
                return result;
            }
        } catch (error) {
            if (error instanceof QueryFailedError)
                throw new HttpException(`${error.name} ${error.driverError}`, 404);
            throw new HttpException(error.message, error.status);
        }
    }

    // Editar reserva
    async update(id: number, reserva: ReservaDto){
        try {
            let nullFlag = checkNull(reserva)
            if (nullFlag == 0) {
                const result = await this.repo.update(id, reserva);
                return result;
            }
        } catch (error) {
            // Si falla, retorna el error por terminal y al cliente
            if(error instanceof QueryFailedError)
                throw new HttpException(`${error.name} ${error.driverError}`, 404);
            throw new HttpException(error.message, error.status);
        }
    }

}
