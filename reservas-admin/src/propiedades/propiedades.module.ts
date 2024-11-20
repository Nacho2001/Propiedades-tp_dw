import { Module } from '@nestjs/common';
import { PropiedadesService } from './propiedades.service';
import { PropiedadesController } from './propiedades.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Propiedades } from 'src/entities/propiedades.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Propiedades])
  ],
  controllers: [PropiedadesController],
  providers: [PropiedadesService],
})
export class PropiedadesModule {}
