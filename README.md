# 🏠 Simulador de Compra de Imóvel — Desafio aMORA

Este projeto foi desenvolvido como parte do desafio técnico aMORA para nível Júnior, com o objetivo de construir um simulador de compra de imóvel, avaliando habilidades práticas de front-end e back-end, além de organização e clareza de lógica.

---

## 📚 Descrição

A aplicação permite ao usuário simular a compra de um imóvel informando:

- 💰 **Valor do imóvel**
- 📊 **Percentual de entrada** (entre 5% e 20%)
- 📆 **Duração do contrato** (de 1 a 5 anos)

Com base nesses dados, o simulador calcula e retorna:

- Valor da entrada
- Valor a financiar
- Total a guardar (15% do valor do imóvel)
- Valor mensal a guardar (distribuído pelo tempo de contrato)

---

## 🛠️ Tecnologias Utilizadas

### Front-end:

- React + Vite
- CSS Modules
- Responsividade via Media Queries

### Back-end:

- Node.js
- Express
- CORS

### Contêiner:

- Docker

---

## 📱 Layout

A aplicação foi projetada para funcionar bem tanto em **desktop** quanto em **dispositivos móveis**, adaptando tamanhos de fontes, espaçamentos e largura de inputs.

---

## 🚀 Como Rodar o Projeto

### 📦 Pré-requisitos:

- Node.js instalado (para rodar localmente sem Docker)
- Docker instalado (para rodar com contêiner)

---

### 🔧 Rodando localmente 

Clone o repositório:

```bash
git clone https://github.com/danielMonteiro84/simulador-de-financiamento
cd simulador-de-financiamento

🐳 Rodando com Docker
No diretório raiz do projeto, rode:

docker-compose up --build

Back-end:

cd backend
npm install
npm run dev

Front-end:

cd frontend
npm install
npm run dev

Isso irá construir e subir os contêineres do front-end e back-end juntos.

Front-end disponível em http://localhost:5173

Back-end em http://localhost:3000
```
