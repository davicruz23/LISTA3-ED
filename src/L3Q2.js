// Nó da lista
class Node {
  constructor(dado) {
    this.dado = dado;
    this.proximo = null;
  }
}

// Fila com lista simplesmente encadeada
class FilaEncadeada {
  constructor() {
    this.inicio = null;
    this.fim = null;
    this.tamanho = 0;
  }

  enqueue(dado) {
    const novoNode = new Node(dado);
    if (this.isEmpty()) {
      this.inicio = this.fim = novoNode;
    } else {
      this.fim.proximo = novoNode;
      this.fim = novoNode;
    }
    this.tamanho++;
  }

  dequeue() {
    if (this.isEmpty()) {
      throw new Error("Underflow");
    }

    const removido = this.inicio.dado;
    this.inicio = this.inicio.proximo;
    if (this.inicio === null) {
      this.fim = null;
    }
    this.tamanho--;
    return removido;
  }

  front() {
    return this.isEmpty() ? null : this.inicio.dado;
  }

  isEmpty() {
    return this.tamanho === 0;
  }

  size() {
    return this.tamanho;
  }

  toArray() {
    const elementos = [];
    let atual = this.inicio;
    while (atual) {
      elementos.push(atual.dado);
      atual = atual.proximo;
    }
    return elementos;
  }
}

export default FilaEncadeada;
