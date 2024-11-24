import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(private JwtService: JwtService){}
    
    /** Verificación del token */
    async verifyJwt(jwt: string): Promise<any>{
        return await this.JwtService.verifyAsync(jwt);
    }
}
