import PilhaEncadeada from "../src/L3Q1";

let pilha;

beforeEach(() => {
  pilha = new PilhaEncadeada();
});

test("Empilhar e desempilhar elementos", () => {
  pilha.push(1);
  pilha.push(2);
  pilha.push(3);

  expect(pilha.pop()).toBe(3);
  expect(pilha.pop()).toBe(2);
  expect(pilha.pop()).toBe(1);
});

test("Verificar elemento do topo com peek()", () => {
  pilha.push("a");
  pilha.push("b");
  expect(pilha.peek()).toBe("b");
});

test("Verificar se pilha está vazia", () => {
  expect(pilha.isEmpty()).toBe(true);
  pilha.push(10);
  expect(pilha.isEmpty()).toBe(false);
});

test("Underflow: tentar remover de uma pilha vazia", () => {
  expect(() => pilha.pop()).toThrow("Underflow");
});

test("Verificar tamanho da pilha", () => {
  pilha.push(1);
  pilha.push(2);
  pilha.push(3);
  expect(pilha.size()).toBe(3);
});
