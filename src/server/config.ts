const env = process.env;

export const PORT = env.PORT ?? '8080';
export const HOST = env.HOST ?? '0.0.0.0';

export const MONGODB_URI = env.MONGODB_URI ?? 'mongodb://localhost:27017';
export const DATABASE_NAME = env.DATABASE_NAME ?? 'local';
export const SERVER_URL = `http://${HOST}:${PORT}`;

export default {
    PORT,
    HOST
}