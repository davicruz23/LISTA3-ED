
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

  inverter() {
    let anterior = null;
    let atual = this.inicio;
    let proximo = null;

    while (atual !== null) {
      proximo = atual.proximo;
      atual.proximo = anterior;
      anterior = atual;
      atual = proximo;
    }

    this.inicio = anterior;
  }
}

export default ListaSimples;
