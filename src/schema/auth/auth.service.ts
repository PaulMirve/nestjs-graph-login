import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import User from 'src/models/User';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(@InjectRepository(User) private repository: Repository<User>) { }

    async login(username: string, password: string) {
        const user = await this.repository.findOne({ username });
        if (!user) {
            throw new BadRequestException("The user doesn't exists");
        }
        const validPassword = bcrypt.compareSync(password, user.password);
        if (!validPassword) {
            throw new BadRequestException('The password is incorrect');
        }

        return user;
    }
}
