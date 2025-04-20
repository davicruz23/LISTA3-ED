import ListaString from "../src/L3Q6";

let lista;

beforeEach(() => {
  lista = new ListaString();
  lista.inserirString("estrutura");
});

test("Lista convertida para string", () => {
  expect(lista.toString()).toBe("estrutura");
});

test("Substring de 0 até 2 deve ser 'est'", () => {
  const sub = lista.substring(0, 2);
  expect(sub.toString()).toBe("est");
});

test("Substring do meio da string", () => {
  const sub = lista.substring(2, 5);
  expect(sub.toString()).toBe("trut");
});

test("Substring completa", () => {
  const sub = lista.substring(0, 8);
  expect(sub.toString()).toBe("estrutura");
});

test("Substring com índices inválidos deve lançar erro", () => {
  expect(() => lista.substring(5, 2)).toThrow("Índices inválidos");
  expect(() => lista.substring(-1, 3)).toThrow("Índices inválidos");
  expect(() => lista.substring(0, 100)).toThrow("Índices inválidos");
});
