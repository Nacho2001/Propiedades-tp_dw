import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { db } from './config';
import { ReservasModule } from './reservas/reservas.module';
import { PropiedadesModule } from './propiedades/propiedades.module';
import { AuthService } from './auth/auth.service';


@Module({
  imports: [
    TypeOrmModule.forRoot(db),
    ReservasModule,
    PropiedadesModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
