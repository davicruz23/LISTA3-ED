import ListaSimples from "../src/L3Q4";

let lista;

beforeEach(() => {
  lista = new ListaSimples();
});

test("Inverter lista com múltiplos elementos", () => {
  lista.inserir(1);
  lista.inserir(2);
  lista.inserir(3);
  lista.inserir(4);
  lista.inverter();
  expect(lista.toArray()).toEqual([4, 3, 2, 1]);
});

test("Inverter lista com um único elemento", () => {
  lista.inserir(10);
  lista.inverter();
  expect(lista.toArray()).toEqual([10]);
});

test("Inverter lista vazia", () => {
  lista.inverter();
  expect(lista.toArray()).toEqual([]);
});
