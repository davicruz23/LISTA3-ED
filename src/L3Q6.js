class Node {
  constructor(char) {
    this.char = char;
    this.next = null;
  }
}

class ListaString {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  inserirString(strin) {
    for (const char of strin) {
      this.inserirChar(char);
    }
  }

  inserirChar(char) {
    const novo = new Node(char);
    if (!this.head) {
      this.head = novo;
    } else {
      let atual = this.head;
      while (atual.next) {
        atual = atual.next;
      }
      atual.next = novo;
    }
    this.size++;
  }

  toString() {
    let resultado = "";
    let atual = this.head;
    while (atual) {
      resultado += atual.char;
      atual = atual.next;
    }
    return resultado;
  }

  substring(A, B) {
    if (A < 0 || B >= this.size || A > B) {
      throw new Error("Índices inválidos");
    }

    let atual = this.head;
    let i = 0;
    const novaLista = new ListaString();

    while (atual) {
      if (i >= A && i <= B) {
        novaLista.inserirChar(atual.char);
      }
      if (i > B) break;
      atual = atual.next;
      i++;
    }

    return novaLista;
  }
}

export default ListaString;
