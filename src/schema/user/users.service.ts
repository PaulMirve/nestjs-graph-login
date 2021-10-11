import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import User from 'src/models/User';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
@Injectable()
export class UsersService {

    constructor(@InjectRepository(User) private repository: Repository<User>) { }

    async create(user: User): Promise<User> {
        user.password = await bcrypt.hash(user.password, 10);
        const _user = this.repository.create(user);
        return this.repository.save(_user);
    }

    find(): Promise<User[]> {
        return this.repository.find();
    }

    findOneByPublicId(publicId: string): Promise<User> {
        return this.repository.findOne({ publicId });
    }
}
