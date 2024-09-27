import { Body, Controller, Delete, Get, Param, Post, Patch } from '@nestjs/common';
import { ReservasService } from './reservas.service';
import { ReservaDto } from 'src/dto/reservas.dto';

@Controller('reservas')
export class ReservasController {
  constructor(private readonly reservasService: ReservasService){}

  @Post()
  create(@Body() reserva: ReservaDto): any {
    return this.reservasService.create(reserva);
  }

  @Get()
  findAll() {
    return this.reservasService.findAll();
  }

  /*
      @Get(':id')
      findById(@Param('id') id: number) {
          return this.reservasService.findById(+id);
      }
  */
  @Patch(':id')
  update(@Param('id') id: number, @Body() reserva: ReservaDto) {
    return this.reservasService.update(+id, reserva);
  }

  /*
      @Delete(':id')
      remove(@Param('id') id: number) {
      return this.reservasService.remove(+id);
      }
  */
  
}

