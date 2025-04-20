import ListaSimples from "../src/L3Q3";

let lista;

beforeEach(() => {
  lista = new ListaSimples();
});

test("Inserção de elementos na lista", () => {
  lista.inserir(10);
  lista.inserir(20);
  lista.inserir(30);
  expect(lista.toArray()).toEqual([10, 20, 30]);
});

test("Remoção de elemento da lista", () => {
  lista.inserir(1);
  lista.inserir(2);
  lista.inserir(3);
  lista.remover(2);
  expect(lista.toArray()).toEqual([1, 3]);
});

test("Buscar elemento existente", () => {
  lista.inserir("a");
  lista.inserir("b");
  expect(lista.buscar("b").dado).toBe("b");
});

test("Buscar elemento inexistente", () => {
  lista.inserir("x");
  expect(lista.buscar("z")).toBeNull();
});

test("Verificar se lista está vazia", () => {
  expect(lista.isEmpty()).toBe(true);
  lista.inserir(100);
  expect(lista.isEmpty()).toBe(false);
});
