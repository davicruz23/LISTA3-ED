// Nó da lista
class Node {
  constructor(dado) {
    this.dado = dado;
    this.proximo = null;
  }
}

class PilhaEncadeada {
  constructor() {
    this.topo = null;
    this.tamanho = 0;
  }

  push(dado) {
    const novoNode = new Node(dado);
    novoNode.proximo = this.topo;
    this.topo = novoNode;
    this.tamanho++;
  }

  pop() {
    if (this.isEmpty()) {
      throw new Error("Underflow");
    }

    const removido = this.topo.dado;
    this.topo = this.topo.proximo;
    this.tamanho--;
    return removido;
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.topo.dado;
  }

  isEmpty() {
    return this.topo === null;
  }

  size() {
    return this.tamanho;
  }

  toArray() {
    const elementos = [];
    let atual = this.topo;
    while (atual) {
      elementos.push(atual.dado);
      atual = atual.proximo;
    }
    return elementos;
  }
}

export default PilhaEncadeada;
