import { Injectable } from '@nestjs/common';
import { TokenRepository } from '../repository/token.reposity';
import { Token } from '../entity/token.entity';

@Injectable()
export class TokenService {

    constructor(
        private readonly tokenRepository: TokenRepository,
    ) {}
    
    generateToken(): string {
        return Math.random().toString().slice(2, 10).padEnd(8, '0');
    }

    async createToken(): Promise<Token> {
        const token = this.generateToken();
        const newToken = await this.tokenRepository.create({ token });
        return newToken;
    }

    async findToken(token: string): Promise<any | null> {
        const tokenResponse = await this.tokenRepository.findOneByToken(token);
        if (!tokenResponse) return { success: false, message: 'Token not found', data: null };
        return { success: true, message: 'ok', data: tokenResponse };
    }
}
