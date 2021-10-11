import { Args, Mutation, Resolver } from "@nestjs/graphql";
import { generateJWT } from "src/helpers/generate-jwt";
import User from "src/models/User";
import { AuthService } from "./auth.service";
import LoginResult from "./auth.types";

@Resolver()
export default class AuthResolver {
    constructor(
        private authService: AuthService
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
}