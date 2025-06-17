import pandas as pd

def calcular_aposentadoria(idade_atual, idade_aposentadoria, retirada_mensal, inflacao_anual, rendimento_anual):
    # Conversão de taxas anuais para mensais e outros parâmetros
    meses_contribuicao = (idade_aposentadoria - idade_atual) * 12
    inflacao_mensal = (1 + inflacao_anual) ** (1/12) - 1
    rendimento_mensal = (1 + rendimento_anual) ** (1/12) - 1

    # Simulação mês a mês
    dados = []
    valor_acumulado = 0
    aporte_mensal = 0  # Calcularemos isso iterativamente

    # Primeira etapa: encontrar o aporte necessário (usando busca binária)
    aporte_min = 0
    aporte_max = retirada_mensal * (1 + inflacao_anual) ** (idade_aposentadoria - idade_atual)  # Chute inicial alto
    tolerancia = 0.01  # Precisão desejada

    while True:
        aporte_mensal = (aporte_min + aporte_max) / 2
        valor_acumulado = 0

        # Fase de acumulação
        for mes in range(1, meses_contribuicao + 1):
            valor_acumulado = (valor_acumulado + aporte_mensal) * (1 + rendimento_mensal)

        # Fase de retirada (simulamos 30 anos de aposentadoria)
        meses_aposentadoria = 30 * 12
        valor_retirada = retirada_mensal
        falhou = False

        for mes in range(1, meses_aposentadoria + 1):
            if valor_acumulado < valor_retirada:
                falhou = True
                break
            valor_acumulado = (valor_acumulado - valor_retirada) * (1 + rendimento_mensal)
            valor_retirada *= (1 + inflacao_mensal)  # Atualiza retirada pela inflação

        if not falhou and valor_acumulado >= 0:
            aporte_max = aporte_mensal
        else:
            aporte_min = aporte_mensal

        if abs(aporte_max - aporte_min) < tolerancia:
            break

    # Retorno os resultados
    valor_retirada_atualizado = retirada_mensal * (1 + inflacao_anual) ** (idade_aposentadoria - idade_atual)
    return {
        "Aporte mensal necessário": round(aporte_mensal, 2),
        "Valor acumulado no início da aposentadoria": round((valor_acumulado + aporte_mensal) * (1 + rendimento_mensal), 2),
        "Valor da primeira retirada (em poder de compra atual)": round(retirada_mensal, 2),
        "Valor da primeira retirada (nominal)": round(valor_retirada_atualizado, 2)
    }

# Exemplo de uso:
resultado = calcular_aposentadoria(
    idade_atual=20,
    idade_aposentadoria=60,
    retirada_mensal=5000,
    inflacao_anual=0.04,  
    rendimento_anual=0.08  
)

print(resultado)
