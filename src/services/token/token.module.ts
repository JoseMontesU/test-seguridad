import { Module } from '@nestjs/common';
import { TokenService } from './service/token.service';
import { TokenController } from './controller/token.controller';
import { TokenRepository } from './repository/token.reposity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Token } from './entity/token.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Token])],
  controllers: [TokenController],
  providers: [TokenService, TokenRepository],
})
export class TokenModule {}
