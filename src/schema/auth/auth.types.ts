import { Field, ObjectType } from "@nestjs/graphql";
import User from "src/models/User";

@ObjectType()
export default class LoginResult {
    @Field(of => User)
    user: User;

    @Field(of => String)
    jwt: string;
}