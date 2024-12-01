import 'dotenv/config'
import * as joi from 'joi';

interface EnvVars {
    PORT: number;
    DATABASE_URL: string;
}

const envSchema = joi.object({
    PORT: joi.number().required().default(3001),
    DATABASE_URL: joi.string().required(),
}).unknown(true);

const { error, value } = envSchema.validate(process.env);


if (error) {
    throw new Error(`Config Validation errror: ${error.message}`);
}

const envVars:EnvVars = value

export const envs = {
    port: envVars.PORT,
    databaseUrl: envVars.DATABASE_URL,
}