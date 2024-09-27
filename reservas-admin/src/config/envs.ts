import 'dotenv/config';
import * as joi from 'joi';

// Declara el tipo de las variables 
interface EnvVars{
    DB_HOST: string;
    DB_USER: string;
    DB_PASS: string;
    DB_PORT: number;
    DATABASE: string;
    API_PORT: number;
}

// Aplica la restricción de tipos en las variables y las hace obligatorias
const envsSchema = joi
    .object({
        DB_HOST: joi.string().required(),
        DB_USER: joi.string().required(),
        DB_PASS: joi.string().required(),
        DB_PORT: joi.number().required(),
        DATABASE: joi.string().required(),
        API_PORT: joi.number().required(),
    })
    // Permite variables no definidas previamente
    .unknown(true);

// Realiza la validación y captura los errores
const { error, value } = envsSchema.validate(process.env);

// En caso de error, se mostrará un mensaje por terminal
if (error) throw new Error(`Error al validar configuración: ${error.message}`);

const envVars : EnvVars = value;

// Exporta las variables declaradas
export const envs = {
    host: envVars.DB_HOST,
    user: envVars.DB_USER,
    pass: envVars.DB_PASS,
    db_port: envVars.DB_PORT,
    database: envVars.DATABASE,
    port: envVars.API_PORT,
}