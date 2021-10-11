import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import User from "src/models/User";
import { UsersService } from "./users.service";
import { UserInput } from "./users.types";

@Resolver(of => User)
export default class UserResolver {
    constructor(
        private userService: UsersService
    ) { }

    @Query(returns => [User])
    getUsers(): Promise<User[]> {
        return this.userService.find();
    }

    @Mutation(returns => User)
    saveUser(
        @Args('user', { type: () => UserInput }) user: User
    ): Promise<User> {
        return this.userService.create(user);
    }
}