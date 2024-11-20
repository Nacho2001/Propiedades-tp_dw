import { Module } from '@nestjs/common';
import { ReservasController } from './reservas.controller';
import { ReservasService } from './reservas.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Reservas } from 'src/entities/reservas.entity';
import { Usuarios } from 'src/entities/usuarios.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Reservas, Usuarios])
  ],
  controllers: [ReservasController],
  providers: [ReservasService]
})
export class ReservasModule {}
