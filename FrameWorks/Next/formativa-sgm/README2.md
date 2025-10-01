Análise De Risco
- qnd vc vai entragar a documentação pro cliente... ela precisa estar pronta
- são ações que podem ter, se ele tem auto, médoi ou auto impacto; qual a mitigação (como resolve)...
- faz uma lista de mmitigação
- ensinar pro cliente de uma forma rápida como ele pode se prever e resolver
- como pode impactar qualiticamente e quantaticamente
- ex: mercado livre
- 


# Análise de Risco em Projetos de TI

## 1. Conceito

* Processo de **identificar, analisar e responder** a problemas que podem impactar um projeto de TI.
* Objetivo: **minimizar ameaças** e **maximizar oportunidades**.

## 2. Etapas do Processo

1. **Identificação de Riscos** – Listar todos os riscos possíveis (brainstorming).
2. **Análise de Riscos** – Avaliar **probabilidade** e **impacto**;

   * Qualitativa: subjetiva
   * Quantitativa: matemática/modelos
3. **Priorização de Riscos** – Focar nos mais críticos (probabilidade × impacto).
4. **Planejamento de Respostas** – Estratégias: evitar, mitigar, transferir ou aceitar.
5. **Monitoramento e Controle** – Acompanhar riscos existentes, novos riscos e avaliar eficácia das respostas.

## 3. Categorias de Risco

* **Técnicos** – falhas de sistema, bugs, desempenho.
* **Gerenciamento de projeto** – escopo, prazo, comunicação.
* **Organizacionais e de adoção** – resistência de usuários, dados incorretos, falta de treinamento.
* **Externos** – fatores fora do controle da equipe (ex.: fornecedores, legislação).

## 4. Benefícios de uma boa gestão de riscos

* Redução de **custos e tempo**
* Melhoria da **qualidade do software**
* Aumento da **confiança das partes interessadas**

## 5. Exemplo: Projeto Sistema de Gestão de Manutenção (SGM)

### Riscos Técnicos

* **JWT**: Chaves secretas fracas → vulnerabilidade
* **Bcrypt**: Limite de 72 bytes → truncamento e risco
* **Desempenho**: Sistema lento com aumento de dados
* **Código**: Bugs e baixa qualidade

### Riscos de Gerenciamento

* Escopo mal definido → atrasos/custos
* Prazos irrealistas → qualidade comprometida
* Comunicação falha → requisitos mal entendidos

### Riscos Organizacionais

* Resistência dos usuários → baixa adoção
* Dados iniciais incorretos → decisões ruins
* Falta de treinamento → uso incorreto do sistema

## 6. Estratégias de Mitigação (Resumo da Matriz SGM)

| Tipo           | Risco                        | Probabilidade | Impacto | Mitigação                                        |
| -------------- | ---------------------------- | ------------- | ------- | ------------------------------------------------ |
| Técnico        | Chave JWT comprometida       | Média         | Alto    | Chaves longas, armazenar seguro, rotacionar      |
| Técnico        | Bcrypt truncamento           | Baixa         | Alto    | Limitar entrada a 72 bytes, tratar senha isolada |
| Técnico        | Lentidão                     | Média         | Média   | Indexação, paginação, arquitetura escalável      |
| Técnico        | Código ruim                  | Alta          | Média   | Código limpo, revisão, testes                    |
| Gerenciamento  | Scope Creep                  | Alta          | Média   | Controle de mudanças, análise de impacto         |
| Gerenciamento  | Atrasos                      | Alta          | Média   | Metodologias ágeis, reavaliação do cronograma    |
| Gerenciamento  | Requisitos mal interpretados | Média         | Alto    | Validar protótipos, comunicação constante        |
| Organizacional | Resistência de usuários      | Média         | Alto    | Envolver usuários-chave, UI/UX amigável          |
| Organizacional | Dados incorretos             | Média         | Alto    | Validações robustas e importação correta         |
| Organizacional | Falta de treinamento         | Média         | Média   | Manuais, treinamento prático, suporte            |
