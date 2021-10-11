import { UseGuards } from "@nestjs/common";
import { Args, Context, Mutation, Query, Resolver } from "@nestjs/graphql";
import { generateJWT } from "src/helpers/generate-jwt";
import User from "src/models/User";
import { UsersService } from "../user/users.service";
import { AuthGuard } from "./auth.guard";
import { AuthService } from "./auth.service";
import LoginResult from "./auth.types";

@Resolver()
export default class AuthResolver {
    constructor(
        private authService: AuthService,
        private userService: UsersService
    ) { }

    @Mutation(returns => LoginResult)
    async login(
        @Args('username') username: string,
        @Args('password') password: string
    ) {
        const user: User = await this.authService.login(username, password);
        const jwt = generateJWT(user.publicId);
        return {
            user,
            jwt
        }
    }

    @Query(returns => User)
    @UseGuards(AuthGuard)
    async isAuthenticated(@Context('user') user: User) {
        return user;
    }
}