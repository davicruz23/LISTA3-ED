// Classe do nó
class Node {
  constructor(dado) {
    this.dado = dado;
    this.proximo = null;
  }
}

// Lista simples baseada em array de nós
class ListaSimples {
  constructor() {
    this.nos = []; // array de nós
    this.inicio = null;
    this.tamanho = 0;
  }

  inserir(dado) {
    const novoNode = new Node(dado);
    if (this.inicio === null) {
      this.inicio = novoNode;
    } else {
      let atual = this.inicio;
      while (atual.proximo !== null) {
        atual = atual.proximo;
      }
      atual.proximo = novoNode;
    }
    this.nos.push(novoNode);
    this.tamanho++;
  }

  remover(dado) {
    if (this.inicio === null) return;

    if (this.inicio.dado === dado) {
      this.inicio = this.inicio.proximo;
      this.tamanho--;
      this.nos = this.nos.filter(n => n.dado !== dado);
      return;
    }

    let anterior = this.inicio;
    let atual = this.inicio.proximo;

    while (atual !== null && atual.dado !== dado) {
      anterior = atual;
      atual = atual.proximo;
    }

    if (atual !== null) {
      anterior.proximo = atual.proximo;
      this.tamanho--;
      this.nos = this.nos.filter(n => n.dado !== dado);
    }
  }

  buscar(dado) {
    return this.nos.find(node => node.dado === dado) || null;
  }

  toArray() {
    const elementos = [];
    let atual = this.inicio;
    while (atual !== null) {
      elementos.push(atual.dado);
      atual = atual.proximo;
    }
    return elementos;
  }

  size() {
    return this.tamanho;
  }

  isEmpty() {
    return this.tamanho === 0;
  }
}

export default ListaSimples;
