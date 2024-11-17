import { Controller, Get, Post, Body, Param, Delete, Patch } from '@nestjs/common';
import { PropiedadesService } from './propiedades.service';
import { PropiedadDto } from 'src/dto/propiedades.dto';
import { TipoPropiedad } from 'src/enums/tipos.enum';

@Controller('propiedades')
export class PropiedadesController {
  constructor(private readonly propiedadesService: PropiedadesService) {}

  /* Con un post, recibe el body, lo reconoce como objeto propiedad 
    y lo envia al servicio para hacer enviarlo a la base.
  */
  @Post()
  create(@Body() propiedad: PropiedadDto) {
    return this.propiedadesService.create(propiedad);
  }

  /* Con un metodo get sin ningún parámetro, busca todas las propiedades:
    Departamentos y parcelas
  */
  @Get()
  findAll() {
    return this.propiedadesService.findAll();
  }

  /* Busca propiedades por id */
  @Get(':id')
  findById(@Param('id') id: number) {
    return this.propiedadesService.findById(+id);
  }

  /* Busqueda por tipo de propiedad, enviada como parámetro */
  @Get(':tipo')
  findByType(@Param('tipo') tipo: TipoPropiedad){
    return this.propiedadesService.findByType(tipo);
  }

  /* Para actualizar los datos de la propiedad utiliza el metodo patch para cambiar
  solo los datos enviados, sin afectar los que no se enviaron cambios */
  @Patch(':id')
  update(@Param('id') id: number, @Body() propiedad: PropiedadDto) {
    return this.propiedadesService.update(+id, propiedad);
  }

  /* Borra una propiedad especifica */
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.propiedadesService.remove(+id);
  }
}
