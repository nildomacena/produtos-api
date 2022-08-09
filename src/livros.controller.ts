import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Livro } from "./livro.model";
import { LivrosService } from "./livros.service";

@Controller("livros")
export class LivrosController {

    constructor(private livrosService: LivrosService) { }

    @Get()
    obterTodos(): Promise<Livro[]> {
        return this.livrosService.obterTodos();
    }

    @Get(':id')
    obterUm(@Param() params): Promise<Livro> {
        return this.livrosService.obterUm(params.id);
    }

    @Post()
    criar(@Body() body: Livro): Promise<Livro> {
        return this.livrosService.criar(body);
    }

    @Put(':id')
    alterar(@Body() body): Promise<[number]> {
        return this.livrosService.alterar(body);
    }


    @Delete(':id')
    apagar(@Param() params): Promise<void> {
        return this.livrosService.apagar(params.id)
    }
}
