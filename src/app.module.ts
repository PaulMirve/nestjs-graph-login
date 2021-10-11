import { AuthModule } from './schema/auth/auth.module';
import { UsersModule } from './schema/user/users.module';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import User from './models/User';

@Module({
  imports: [
    AuthModule,
    UsersModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      database: 'graphql',
      entities: [User],
      synchronize: true,
      username: 'postgres',
      password: 'password',
      port: 5432
    }),
    GraphQLModule.forRoot({
      installSubscriptionHandlers: true,
      autoSchemaFile: 'schema.gql',
    })],
  providers: [],
})
export class AppModule { }
