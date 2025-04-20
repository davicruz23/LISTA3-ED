// com muita ajuda 
const Josephus = require('../src/L3Q7')

describe("Problema de Josephus", () => {
  test("Ordem correta de eliminação e sobrevivente com N=7, D=3", () => {
    const josephusSolver = new Josephus(7, 3);
    const resultado = josephusSolver.resolver();
    expect(resultado.eliminados).toEqual([3, 6, 2, 7, 5, 1]);
    expect(resultado.sobrevivente).toBe(4);
  });

  test("N pequeno: N=5, D=2", () => {
    const josephusSolver = new Josephus(5, 2);
    const resultado = josephusSolver.resolver();
    expect(resultado.eliminados).toEqual([2, 4, 1, 5]);
    expect(resultado.sobrevivente).toBe(3);
  });

  test("Sobrevivente é o primeiro com N=1, D=1", () => {
    const josephusSolver = new Josephus(1, 1);
    const resultado = josephusSolver.resolver();
    expect(resultado.eliminados).toEqual([]);
    expect(resultado.sobrevivente).toBe(1);
  });

  test("Erro se D > N", () => {
    expect(() => new Josephus(3, 5).resolver()).toThrow("D deve ser menor ou igual a N e maior que 0.");
  });

  test("Erro se N <= 0", () => {
    expect(() => new Josephus(0, 2).resolver()).toThrow("D deve ser menor ou igual a N e maior que 0.");
  });
});
