import { Controller } from '@nestjs/common';
import { TokenService } from './token.service';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller()
export class TokenController {
  constructor(private readonly tokenService: TokenService) {}

  async validateToken(token: string): Promise<boolean> {
    return false;
  }

  @MessagePattern('CREATE_TOKEN')
  async generateToken(@Payload() data: any){
    return 'hola perro me conecte al microservicio de seguridad';
  }
}
