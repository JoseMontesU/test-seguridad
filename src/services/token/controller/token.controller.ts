import { Controller } from '@nestjs/common';
import { TokenService } from '../service/token.service';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller()
export class TokenController {
  constructor(private readonly tokenService: TokenService) {}

  async validateToken(token: string): Promise<boolean> {
    return false;
  }

  @MessagePattern('CREATE_TOKEN')
  async generateToken(){
    return this.tokenService.createToken();
  }

  @MessagePattern('FIND_TOKEN')
  async findToken(@Payload() payload: { token: number }) {
    return this.tokenService.findToken(payload.token);
  }
}
