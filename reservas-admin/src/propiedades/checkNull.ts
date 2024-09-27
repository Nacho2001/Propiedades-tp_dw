import { UnauthorizedException } from "@nestjs/common";
import { PropiedadDto } from "src/dto/propiedades.dto";

/*
    Función para prevenir carga de valores nulos en la tabla propiedades
 */
export default 
function checkNull(propiedad: PropiedadDto){
    // Declara una variable flag en 0, este valor cambiará si encuentra un valor nulo
    let flag = 0;
    // Convierte el objeto en un array para recorrerlo con un bucle
    let props = Object.entries(propiedad)
    // Recorre el array
    for (let index = 0; index < props.length; index++) {
        /* Declara una variable para el item. 
        Cada item es un array que contiene la clave y el valor. Ej: ['nombre, 'san martín']
        */
       const item = props[index];
        // Si un valor (item[1]) es nulo, envia una respuesta que el campo el obligatorio (item[0])
        if(item[1] == null) {
            // Cambia el valor de flag a 1, si encuentra un valor nulo
            flag = 1;
            throw new UnauthorizedException(`Error: El campo ${item[0]} es obligatorio`);
        }
    }

    // Una vez que termina, retorna el valor de la variable
    return flag;
}