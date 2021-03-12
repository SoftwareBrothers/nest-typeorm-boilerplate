import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfigGeneral: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.POSTGRES_HOST,
  port: +process.env.POSTGRES_PORT,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  synchronize: process.env.POSTGRES_SYNCHRONIZE === 'true' ? true : false,
  migrationsRun: process.env.NODE_ENV === 'test' ? false : true,
  migrationsTableName: 'migrations',
  migrationsTransactionMode: 'each',
  keepConnectionAlive: true,
  logging: process.env.POSTGRES_LOGGING === 'true' ? true : false,
};

export const typeOrmConfig: TypeOrmModuleOptions = {
  migrations: [`${__dirname}/../../database/migrations/**/*.ts`],
  entities: [`${__dirname}/../**/*.entity{.ts,.js}`],
  ...typeOrmConfigGeneral,
};
