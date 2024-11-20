import { HttpException, Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { PropiedadDto } from "../dto/propiedades.dto";
import { Propiedades } from "../entities/propiedades.entity";
import { QueryFailedError, Repository } from "typeorm";
import checkNull from "./checkNull";
import { TipoPropiedad } from "src/enums/tipos.enum";


@Injectable()
export class PropiedadesService {
  constructor(
    @InjectRepository(Propiedades) private readonly repo: Repository<PropiedadDto>
  ){}
  
  // Creación de nueva propiedad
  async create(propiedad: PropiedadDto): Promise<PropiedadDto> {
    try {
      // Realiza un checkeo de valores nulos invocando la función checkNull
      let nullFlag = checkNull(propiedad)
      // Si checkNull retornó 0, es decir si no encontró valores nulos, carga los datos en la base
      if (nullFlag == 0){
        const result = await this.repo.save(propiedad);
        return result;
      }
    } catch (error: any) {
      // Si hay un error, lo retorna por terminal y un mensaje al cliente
      console.error(error);
      if (error instanceof QueryFailedError)
        throw new HttpException(`${error.name} ${error.driverError}`, 404);
      throw new HttpException(error.message, error.status);
    }
    
  }
  
  // Obtener todas las propiedades
  async findAll(): Promise<Propiedades[]> {
    try {
      // Realiza la busqueda en de todos los registros de la tabla
      return this.repo.find()
    } catch (error: any) {
      // Si falla, retorna el error por terminal y al cliente
      console.error(error);
      if(error instanceof QueryFailedError)
        throw new HttpException(`${error.name} ${error.driverError}`, 404);
      throw new HttpException(error.message, error.status);
    }
  }

  // Buscar propiedad por id
  async findById(id: number): Promise<PropiedadDto> {
    try {
      // Busca con metodo findOne donde coincida el id enviado
      const propiedad = this.repo.findOne({ where: {id}});
      // Si no lo encontró, enviará al cliente un mensaje de error con un 404
      if(!propiedad) throw new NotFoundException("No se encontró la propiedad solicitada");
      return propiedad;
    } catch (error) {
      // Si falla, retorna el error por terminal y al cliente
      if(error instanceof QueryFailedError)
        throw new HttpException(`${error.name} ${error.driverError}`, 404);
      throw new HttpException(error.message, error.status);
    }
  }

  
  // Buscar propiedades por tipo; Con esta consulta, se pueden buscar parcelas o departamentos
  async findByType(tipo: TipoPropiedad): Promise<PropiedadDto>{
    try {
      // Busca con metodo findOne donde coincida el tipo enviado
      const propiedad = this.repo.findOne({ where: {tipo}});
      // Si no lo encontró, enviará al cliente un mensaje de error con un 404
      if(!propiedad) throw new NotFoundException("No se encontró las propiedades solicitadas");
      return propiedad;
    } catch (error) {
      // Si falla, retorna el error por terminal y al cliente
      if(error instanceof QueryFailedError)
        throw new HttpException(`${error.name} ${error.driverError}`, 404);
      throw new HttpException(error.message, error.status);
    }
  }

  
  // Actualizar datos de propiedad
  async update(id: number, propiedad: PropiedadDto) {
    try {
      let nullFlag = checkNull(propiedad);
      if (nullFlag == 0) {
        const result = await this.repo.update(id, propiedad)
        return result;
      }
    } catch (error) {
      // Si falla, retorna el error por terminal y al cliente
      if(error instanceof QueryFailedError)
        throw new HttpException(`${error.name} ${error.driverError}`, 404);
      throw new HttpException(error.message, error.status);
    }
  }

  // Eliminar una propiedad
  async remove(id: number): Promise<PropiedadDto> {
    try {
      const propiedad = await this.repo.findOne({ where: { id }});
      if (!propiedad) throw new NotFoundException(`No se encontró la propiedad a eliminar`)
      const result = await this.repo.remove(propiedad);
      return result;
    } catch (error) {
      // Si falla, retorna el error por terminal y al cliente
      if(error instanceof QueryFailedError)
        throw new HttpException(`${error.name} ${error.driverError}`, 404);
      throw new HttpException(error.message, error.status);
    }
  }
}
  