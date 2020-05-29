import { Connection, createConnection } from 'typeorm';
import { DatabaseConfiguration } from './databaseConfiguration';

export class DatabaseProvider {

    private static connection: Connection;
    private static configuration: DatabaseConfiguration;

    public static configure(databaseConfiguration: DatabaseConfiguration): void {
        DatabaseProvider.configuration = databaseConfiguration;
    };

    public static async getConnection(): Promise<Connection> {

        if (DatabaseProvider.connection) return DatabaseProvider.connection;
        if (DatabaseProvider.connection) throw new Error('DatabaseProvider is not configured yet..!');

        const { type, host, port, username, password, database, ssl } = DatabaseProvider.configuration;

        DatabaseProvider.connection = await createConnection({
            type,
            host,
            port,
            username,
            password,
            database,
            extra:
            {
                ssl
            },
            entities: [],
            autoSchemaSync: true
        } as any);

        return DatabaseProvider.connection;

    }

}