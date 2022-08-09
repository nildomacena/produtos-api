import { Produto } from "./produto.model";

export class ProdutosService {

    produtos: Produto[] = [
        new Produto('LIV001', 'A Elite da Tropa', 39.9),
        new Produto('LIV002', 'Introdução a algoritmos', 29.9),
        new Produto('LIV003', 'As Crônicas de Nárnia', 19.9),
        new Produto('LIV004', 'A Elite da Tropa', 29.9),
    ];

    obterTodos(): Produto[] {
        return this.produtos;
    }

    obterUm(): Produto {
        return this.produtos[0];
    }

    criar(produto: Produto): string {
        console.log(produto);
        this.produtos.push(produto);
        return 'Produto criado';
    }

    alterar(produto: Produto, id: number): string {
        console.log(produto);
        return `Produto ${id} alterado`;
    }


    apagar(id: number): string {
        return `Produto ${id} apagado`;
    }
}