
class No {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
    this.next = null;
  }
}

class ListaEncadeada {
  constructor() {
    this.head = null;
  }

  adicionar(nome, idade) {
    const novoNo = new No(nome, idade);
    if (!this.head) {
      this.head = novoNo;
    } else {
      let atual = this.head;
      while (atual.next) {
        atual = atual.next;
      }
      atual.next = novoNo;
    }
  }

  ordenarPorNome() {
    if (!this.head) return null;

    let listaOrdenada = new ListaEncadeada();
    let arrayPessoas = [];

    let atual = this.head;
    while (atual) {
      arrayPessoas.push(atual);
      atual = atual.next;
    }

    arrayPessoas.sort((a, b) => a.nome.localeCompare(b.nome));

    for (let pessoa of arrayPessoas) {
      listaOrdenada.adicionar(pessoa.nome, pessoa.idade);
    }

    return listaOrdenada;
  }

  ordenarPorIdade() {
    if (!this.head) return null;

    let listaOrdenada = new ListaEncadeada();
    let arrayPessoas = [];

    let atual = this.head;
    while (atual) {
      arrayPessoas.push(atual);
      atual = atual.next;
    }

    arrayPessoas.sort((a, b) => a.idade - b.idade);

    for (let pessoa of arrayPessoas) {
      listaOrdenada.adicionar(pessoa.nome, pessoa.idade);
    }

    return listaOrdenada;
  }

  imprimir() {
    let atual = this.head;
    while (atual) {
      console.log(`${atual.nome}, ${atual.idade} anos`);
      atual = atual.next;
    }
  }
}

module.exports = ListaEncadeada;
