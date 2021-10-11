import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class UserInput {
    @Field(type => String)
    name: string;

    @Field(type => String)
    lastName: string;

    @Field(type => String)
    username: string;

    @Field(type => String)
    password: string;
}