class Node {
  constructor(dado) {
    this.dado = dado;
    this.proximo = null;
  }
}

class ListaSimples {
  constructor() {
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
    this.tamanho++;
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

  embaralhar() {
    const array = this.toArray();

    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }

    // Recriar a lista
    this.inicio = null;
    this.tamanho = 0;
    array.forEach(dado => this.inserir(dado));
  }
}

export default ListaSimples;
