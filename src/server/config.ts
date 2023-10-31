const env = process.env;

export const PORT = env.PORT ?? '8080';
export const HOST = env.HOST ?? '0.0.0.0';

export default {
    PORT,
    HOST
}