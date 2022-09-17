"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Aluno = void 0;
class Aluno {
    constructor(nome, idade) {
        this._nota = 0;
        this._nome = nome;
        this._idade = idade;
    }
    get nome() {
        return this._nome;
    }
    get idade() {
        return this._idade;
    }
    get status() {
        return this._status;
    }
    get nota() {
        return this._nota;
    }
    atualizarNota() {
        this._nota++;
        if (this.nota >= 6) {
            this._status = "Aprovado";
        }
        else {
            this._status = "Reprovado";
        }
    }
}
exports.Aluno = Aluno;
