export class Produto {
    id: number;
    codigo: string;
    nome: string;
    precoVenda: number;

    constructor(
        codigo: string,
        nome: string,
        precoVenda: number,) {
        this.nome = nome;
        this.codigo = codigo;
        this.precoVenda = precoVenda;
    }
}