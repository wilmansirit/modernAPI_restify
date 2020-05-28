export interface DatabaseConfiguration {
    type: 'postgres' | 'mysql';
    host: string;
    port: number;
    username: string;
    password: string;
    database: string;
    ssl?: boolean;
}