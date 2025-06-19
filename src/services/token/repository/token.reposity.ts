import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Token } from '../entity/token.entity';

@Injectable()
export class TokenRepository {
    constructor(
        @InjectRepository(Token)
        private readonly tokenRepo: Repository<Token>,
    ) {}

    async create(token: Partial<Token>): Promise<Token> {
        return this.tokenRepo.save(token);
    }

    async findById(id: number): Promise<Token | null> {
        return this.tokenRepo.findOne({ where: { id } });
    }
}