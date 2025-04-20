// com muita ajuda 
class Josephus {
  constructor(N, D) {
    if (N <= 0 || D <= 0 || D > N) {
      throw new Error("D deve ser menor ou igual a N e maior que 0.");
    }
    this.soldados = [...Array(N).keys()].map(i => i + 1);
    this.eliminados = [];
    this.D = D;
  }

  resolver() {
    let i = 0;


    while (this.soldados.length > 1) {
      
      i = (i + this.D - 1) % this.soldados.length; 
      this.eliminados.push(this.soldados.splice(i, 1)[0]);
    }

   
    return {
      eliminados: this.eliminados,
      sobrevivente: this.soldados[0]
    };
  }
}

module.exports = Josephus;
