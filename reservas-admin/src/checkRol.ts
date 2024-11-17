import { UsuarioDto } from "src/dto/usuarios.dto";
import { RolUsuario } from "src/enums/roles.enum";

export default function checkRol(usuario: UsuarioDto){
    let adminFlag = 0;
    if(usuario.rol = RolUsuario.administrador){
        adminFlag = 1;
    }
    return adminFlag;
}