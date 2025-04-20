import ListaSimples from "../src/L3Q5";

let lista;

beforeEach(() => {
  lista = new ListaSimples();
  [1, 2, 3, 4, 5].forEach(n => lista.inserir(n));
});

test("Embaralhar lista deve manter os mesmos elementos", () => {
  const original = lista.toArray().slice().sort();
  lista.embaralhar();
  const embaralhada = lista.toArray().slice().sort();

  expect(embaralhada).toEqual(original);
});

test("Embaralhar lista deve alterar a ordem (provavelmente)", () => {
  const original = lista.toArray().join("");
  lista.embaralhar();
  const novaOrdem = lista.toArray().join("");
  
  expect(novaOrdem).not.toBe(original);
});
