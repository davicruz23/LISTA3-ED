import FilaEncadeada from "../src/L3Q2";

let fila;

beforeEach(() => {
  fila = new FilaEncadeada();
});

test("Enfileirar e desenfileirar elementos", () => {
  fila.enqueue(1);
  fila.enqueue(2);
  fila.enqueue(3);

  expect(fila.dequeue()).toBe(1);
  expect(fila.dequeue()).toBe(2);
  expect(fila.dequeue()).toBe(3);
});

test("Verificar elemento da frente (front)", () => {
  fila.enqueue("a");
  fila.enqueue("b");
  expect(fila.front()).toBe("a");
});

test("Verificar se fila está vazia", () => {
  expect(fila.isEmpty()).toBe(true);
  fila.enqueue(10);
  expect(fila.isEmpty()).toBe(false);
});

test("Underflow: tentar remover de uma fila vazia", () => {
  expect(() => fila.dequeue()).toThrow("Underflow");
});

test("Verificar tamanho da fila", () => {
  fila.enqueue(1);
  fila.enqueue(2);
  fila.enqueue(3);
  expect(fila.size()).toBe(3);
});
