export class Aluno {
  private _nome: string;
  private _idade: number;
  private _nota: number = 0;
  private _status: string | undefined;

  constructor(nome: string, idade: number) {
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
    } else {
      this._status = "Reprovado";
    }
  }
}
