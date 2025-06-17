type ResultadoAposentadoria = {
  aporteMensalNecessario: number;
  valorAcumuladoInicioAposentadoria: number;
  valorPrimeiraRetiradaAtual: number;
  valorPrimeiraRetiradaNominal: number;
};

function calcularAposentadoria(
  idadeAtual: number,
  idadeAposentadoria: number,
  retiradaMensal: number,
  inflacaoAnual: number,
  rendimentoAnual: number
): ResultadoAposentadoria {
  const mesesContribuicao = (idadeAposentadoria - idadeAtual) * 12;
  const inflacaoMensal = Math.pow(1 + inflacaoAnual, 1 / 12) - 1;
  const rendimentoMensal = Math.pow(1 + rendimentoAnual, 1 / 12) - 1;

  let aporteMin = 0;
  let aporteMax =
    retiradaMensal * Math.pow(1 + inflacaoAnual, idadeAposentadoria - idadeAtual); 
  const tolerancia = 0.01;

  let aporteMensal = 0;
  let valorAcumulado = 0;

  while (true) {
    aporteMensal = (aporteMin + aporteMax) / 2;
    valorAcumulado = 0;

    
    for (let mes = 1; mes <= mesesContribuicao; mes++) {
      valorAcumulado = (valorAcumulado + aporteMensal) * (1 + rendimentoMensal);
    }

   
    const mesesAposentadoria = 30 * 12;
    let valorRetirada = retiradaMensal;
    let falhou = false;

    for (let mes = 1; mes <= mesesAposentadoria; mes++) {
      if (valorAcumulado < valorRetirada) {
        falhou = true;
        break;
      }
      valorAcumulado = (valorAcumulado - valorRetirada) * (1 + rendimentoMensal);
      valorRetirada *= 1 + inflacaoMensal;
    }

    if (!falhou && valorAcumulado >= 0) {
      aporteMax = aporteMensal;
    } else {
      aporteMin = aporteMensal;
    }

    if (Math.abs(aporteMax - aporteMin) < tolerancia) {
      break;
    }
  }

  const valorRetiradaAtualizado =
    retiradaMensal * Math.pow(1 + inflacaoAnual, idadeAposentadoria - idadeAtual);
  const valorAcumuladoFinal = (valorAcumulado + aporteMensal) * (1 + rendimentoMensal);

  return {
    aporteMensalNecessario: parseFloat(aporteMensal.toFixed(2)),
    valorAcumuladoInicioAposentadoria: parseFloat(valorAcumuladoFinal.toFixed(2)),
    valorPrimeiraRetiradaAtual: parseFloat(retiradaMensal.toFixed(2)),
    valorPrimeiraRetiradaNominal: parseFloat(valorRetiradaAtualizado.toFixed(2)),
  };
}


const resultado = calcularAposentadoria(
  20,
  60,
  5000,
  0.04, 
  0.04  
);

console.log(resultado);
