const ListaEncadeada = require('../src/L3Q8');  // Importe a classe ListaEncadeada corretamente

describe("Lista Simplesmente Encadeada", () => {
  test("Adicionar pessoas e ordenar por nome", () => {
    const lista = new ListaEncadeada();
    lista.adicionar("Carlos", 30);
    lista.adicionar("Ana", 25);
    lista.adicionar("Bernardo", 20);

    const listaOrdenadaPorNome = lista.ordenarPorNome();
    const nomesOrdenados = [];
    let atual = listaOrdenadaPorNome.head;
    while (atual) {
      nomesOrdenados.push(atual.nome);
      atual = atual.next;
    }

    expect(nomesOrdenados).toEqual(["Ana", "Bernardo", "Carlos"]);
  });

  test("Adicionar pessoas e ordenar por idade", () => {
    const lista = new ListaEncadeada();
    lista.adicionar("Carlos", 30);
    lista.adicionar("Ana", 25);
    lista.adicionar("Bernardo", 20);

    const listaOrdenadaPorIdade = lista.ordenarPorIdade();
    const idadesOrdenadas = [];
    let atual = listaOrdenadaPorIdade.head;
    while (atual) {
      idadesOrdenadas.push(atual.idade);
      atual = atual.next;
    }

    expect(idadesOrdenadas).toEqual([20, 25, 30]);
  });
});
