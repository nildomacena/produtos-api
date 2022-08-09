import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Livro } from "./livro.model";

@Injectable()
export class LivrosService {

    constructor(
        @InjectModel(Livro)
        private livroModel: typeof Livro
    ) { }
    livros: Livro[] = [
        /*   new Livro('LIV001', 'A Elite da Tropa', 39.9),
          new Livro('LIV002', 'Introdução a algoritmos', 29.9),
          new Livro('LIV003', 'As Crônicas de Nárnia', 19.9),
          new Livro('LIV004', 'A Elite da Tropa', 29.9), */
    ];

    obterTodos(): Promise<Livro[]> {
        return this.livroModel.findAll();
    }

    obterUm(id: number): Promise<Livro> {
        return this.livroModel.findByPk(id);
    }

    criar(livro: Livro): Promise<Livro> {
        return this.livroModel.create(livro);
    }

    alterar(livro: Livro): Promise<[number]> {

        return this.livroModel.update(livro, {
            where: { id: livro.id }
        });
    }


    async apagar(id: number): Promise<void> {
        const livro = await this.obterUm(id);
        return livro.destroy();
    }
}