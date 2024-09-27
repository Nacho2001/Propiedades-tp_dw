import { UsuarioDto } from "src/dto/usuarios.dto";
import { Roles } from "src/enums/roles.enum";

export default function checkRol(usuario: UsuarioDto){
    let adminFlag = 0;
    if(usuario.rol = Roles.administrador){
        adminFlag = 1;
    }
    return adminFlag;
}