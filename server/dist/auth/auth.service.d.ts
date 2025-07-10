import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private jwtService;
    constructor(jwtService: JwtService);
    validateUser(username: string, password: string): Promise<{
        id: number;
        username: string;
        role: string;
    }>;
    login(user: any): Promise<{
        access_token: string;
    }>;
}
