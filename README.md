# 🚀 Teste Técnico VOCA - Landing Page

Repositório referente ao desenvolvimento de uma **landing page para um clube esportivo**, com o objetivo de apresentar suas atividades, estrutura e atrair novos clientes.

Este projeto foi desenvolvido como parte de um **processo seletivo para estágio em desenvolvimento front-end**, com foco em organização, componentização e qualidade visual da interface.

---

## Sumário

- [Instruções para execução do sistema](#instruções-para-execução-do-sistema)  
- [Tecnologias e ferramentas utilizadas](#tecnologias-e-ferramentas-utilizadas)  
- [Arquitetura e decisões do projeto](#arquitetura-e-decisões-do-projeto)  
- [Estrutura da aplicação](#estrutura-da-aplicação)  
- [Design e abordagem visual](#design-e-abordagem-visual)  
- [Desafio proposto](#-desafio-proposto)  

---

## Instruções para execução do sistema

Para rodar o projeto localmente:

```bash
npm install
npm run dev
```

A aplicação estará disponível em:

http://localhost:5173

---

## Tecnologias e ferramentas utilizadas

- **Linguagem**: JavaScript  
- **Framework**: React (com Vite)  
- **Estilização**: Tailwind CSS  
- **Ferramentas**: VS Code, Git, GitHub  
- **Design**: AI Stitch (geração inicial do layout da interface)  

---

## Arquitetura e decisões do projeto

### 🔹 Componentização

A aplicação foi dividida em componentes reutilizáveis, cada um responsável por uma parte da interface:

- Header  
- Hero  
- Activities  
- ActivityCard  
- About  
- Contact  
- Footer  

---

### 🔹 Separação de dados

Foi criada uma pasta dedicada (`data/`) para armazenar dados estáticos, como as informações dos cards de atividades.

---

### 🔹 Padronização de estilos

Os estilos foram organizados com foco em consistência e reutilização:

- Utilização de Tailwind CSS para estilização rápida e responsiva  
- Uso de variáveis CSS centralizadas para cores e tipografia  

---

## Estrutura da aplicação

```bash
src/
  components/
    Header.jsx
    Hero.jsx
    Activities.jsx
    ActivityCard.jsx
    About.jsx
    Contact.jsx
    Footer.jsx
  data/
    activities.js
  App.jsx
  main.jsx
```

Cada seção da página foi implementada como um componente independente.

---

## Design e abordagem visual

O layout da aplicação foi inicialmente gerado utilizando a ferramenta **AI Stitch**, que auxiliou na definição da identidade visual e estrutura da interface.

---

## 📄 Desafio proposto

O enunciado completo do desafio pode ser acessado abaixo:

👉 [Acessar desafio](./docs/desafio-frontend.pdf)

---