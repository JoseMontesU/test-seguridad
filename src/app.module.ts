import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TokenModule } from './services/token/token.module';
import { DatabaseModule } from './helper/database.conexion';


@Module({
  imports: [
    TokenModule,
    DatabaseModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
