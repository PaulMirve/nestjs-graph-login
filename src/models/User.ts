import { Field, ObjectType } from "@nestjs/graphql";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@ObjectType()
@Entity({ name: 'Users' })
export default class User {
    @PrimaryGeneratedColumn({ name: 'IdUser' })
    id: number;

    @Field(type => String)
    @Column({ name: 'PublicId', generated: 'uuid' })
    publicId: string;

    @Field(type => String)
    @Column({ name: 'Name' })
    name: string;

    @Field(type => String)
    @Column({ name: 'LastName' })
    lastName: string;

    @Field(type => String)
    @Column({ name: 'Username' })
    username: string;

    @Column({ name: 'Password' })
    password: string;
}