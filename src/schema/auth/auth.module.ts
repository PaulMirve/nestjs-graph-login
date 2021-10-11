
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import User from 'src/models/User';
import { UsersService } from '../user/users.service';
import { AuthGuard } from './auth.guard';
import AuthResolver from './auth.resolver';
import { AuthService } from './auth.service';

@Module({
    imports: [TypeOrmModule.forFeature([User])],
    providers: [
        AuthService,
        AuthResolver,
        UsersService
    ],
})
export class AuthModule { }
