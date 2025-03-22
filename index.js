function calcularDiasEntreDatas(dataInicial, dataFinal) {
  const umDiaEmMilissegundos = 24 * 60 * 60 * 1000;
  const diferencaEmMilissegundos = new Date(dataFinal) - new Date(dataInicial);
  return Math.round(diferencaEmMilissegundos / umDiaEmMilissegundos);
}

// Exemplo de uso:
const dataInicial = "2023-01-01";
const dataFinal = "2023-12-31";
console.log(calcularDiasEntreDatas(dataInicial, dataFinal)); // Saída: 364
