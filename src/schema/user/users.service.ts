import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import User from 'src/models/User';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {

    constructor(@InjectRepository(User) private repository: Repository<User>) {

    }

    create(user: User): Promise<User> {
        const _user = this.repository.create(user);
        return this.repository.save(_user);
    }

    find(): Promise<User[]> {
        return this.repository.find();
    }
}
