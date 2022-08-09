import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProdutosController } from './produtos.controller';
import { ProdutosService } from './produtos.service';

@Module({
  imports: [
    ProdutosService
  ],
  controllers: [AppController, ProdutosController],
  providers: [AppService],
})
export class AppModule { }
