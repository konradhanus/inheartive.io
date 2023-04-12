import 'dotenv/config';
import * as path from 'path';
import { DataSource } from 'typeorm';

const config = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: 5432,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,

  entities: [path.resolve(`${__dirname}/../app/**/**.entity{.ts,.js}`)],
  migrations: [path.resolve(`${__dirname}/../migrations/*{.ts,.js}`)],
  migrationsTableName: 'migrations',
  logging: true,
  synchronize: false,
});

export default config;
