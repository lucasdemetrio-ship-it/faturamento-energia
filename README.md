# 🔌 Faturamento de Energia – Projeto com Padrões de Projeto (Strategy, Decorator, Singleton)

Projeto desenvolvido para a disciplina de **Linguagem de Programação e Paradigmas**, aplicando três padrões de projeto clássicos:  
**Strategy**, **Decorator** e **Singleton**.  
O sistema simula o faturamento de energia elétrica considerando consumo (kWh), sazonalidade, bandeiras tarifárias e impostos.

---

## 👤 Autor

**Lucas Eduardo Demétrio**

---

## 🎯 Objetivo do Projeto

Construir um sistema modular e extensível para calcular o valor da conta de energia com diferentes fatores:

- Tarifas variáveis por faixa de consumo (kWh)
- Sazonalidade (alta ou normal)
- Bandeiras tarifárias (verde, amarela, vermelha)
- Impostos adicionais

Tudo isso sendo aplicado dinamicamente utilizando **padrões de projeto**.

---

# 🧠 Padrões de Projeto Utilizados

## 1️⃣ Strategy — Estratégias de Tarifação
Usado para permitir **múltiplas formas de calcular o consumo**:

- `FlatRateStrategy` → cálculo por faixas de kWh  
- `SeasonalStrategy` → aplica multiplicador conforme sazonalidade

📌 **Por que usar?**  
Permite trocar a lógica de cálculo **em tempo de execução**, deixando o sistema flexível.

---

## 2️⃣ Decorator — Bandeiras e Impostos
Usado para adicionar custos extras ao cálculo sem alterar o código da Strategy.

Decorators usados:

- `FlagDecorator` → adiciona valor por bandeira tarifária  
- `TaxDecorator` → adiciona percentual de impostos

📌 **Por que usar?**  
Permite **empilhar regras adicionais** (bandeira + imposto + outra taxa, etc.)  
Sem criar estratégias novas para cada combinação.

---

## 3️⃣ Singleton — Tabelas de Tarifas
Usado para garantir que as tabelas de preços e bandeiras sejam carregadas **uma única vez**:

- `TariffSingleton.js`

📌 **Por que usar?**  
Evita duplicação de dados e garante consistência entre todas as estratégias e decorators.

---

# 🗂️ Estrutura de Pastas

