import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Produto } from "./produto.model";
import { ProdutosService } from "./produtos.service";

@Controller("produtos")
export class ProdutosController {

    constructor(private produtosService: ProdutosService) { }

    @Get()
    obterTodos(): Produto[] {
        return this.produtosService.obterTodos();
    }

    @Get(':id')
    obterUm(@Param() params): Produto {
        return this.produtosService.obterUm();
    }

    @Post()
    criar(@Body() body: Produto): string {
        return this.produtosService.criar(body);
    }

    @Put(':id')
    alterar(@Body() body, @Param() params): string {
        return this.produtosService.alterar(body, params.id);
    }


    @Delete(':id')
    apagar(@Param() params): string {
        return this.produtosService.apagar(params.id)
    }
}
