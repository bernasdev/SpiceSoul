# 🌶️ SpiceSoul

[![Vercel](https://img.shields.io/badge/Vercel-Live_Preview-black?style=flat&logo=vercel)](https://spicesoul.vercel.app/)
![Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat&logo=next.js)
![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB)
![Bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?style=flat&logo=bootstrap&logoColor=white)

**SpiceSoul** é uma aplicação Fullstack desenvolvida para consolidar conhecimentos avançados em **React**, **Next.js (App Router)** e consumo de APIs. O projeto simula um e-commerce de especiarias, utilizando uma infraestrutura dividida entre uma aplicação cliente moderna e uma API simulada para fornecimento de dados.

---

## 🏗️ Arquitetura do Projeto

O repositório está organizado em dois módulos principais:

* **`my-app/`**: O Front-end construído com Next.js, utilizando Server Components, rotas dinâmicas e Bootstrap para estilização.
* **`servidor/`**: Uma API "mock" (simulada) em Node.js que serve os arquivos JSON (`especiarias.json`, `usuarios.json`, `contato.json`) para alimentar o site via HTTP.

---

## 🛠️ Tecnologias e Conceitos Aplicados

* **Next.js 14 (App Router):** Implementação de arquitetura moderna com `layout.jsx`, `loading.jsx` (feedback visual) e `not-found.jsx`.
* **Rotas Dinâmicas:** Uso de parâmetros dinâmicos como em `conta/[action]` para gerenciar diferentes fluxos de usuário.
* **Consumo de API:** Integração de dados através de fetches realizados ao servidor local.
* **Bootstrap:** Utilizado para garantir agilidade no design responsivo e componentes de interface.
* **Node.js & JSON:** Estrutura simples para persistência de dados de produtos e usuários.

---

## 📂 Estrutura de Arquivos Relevantes

### Front-end (`my-app/app`)
* **`page.jsx`**: Landing page principal do projeto.
* **`especiarias/`**: Rota para listagem dinâmica de produtos consumindo a API.
* **`conta/[action]/`**: Sistema dinâmico para telas de login e cadastro.
* **`teste-loading/`**: Rota experimental para validar o comportamento dos Skeletons de carregamento.

### Back-end (`servidor/`)
* **`server.js`**: Ponto de entrada da API Node.js.
* **`especiarias.json`**: Base de dados contendo o catálogo de produtos.
* **`usuarios.json`**: Armazenamento dos dados de usuários cadastrados.
---

## 🚀 Como rodar o projeto

Pré-requisitos: Ter o [Node.js](https://nodejs.org/) instalado.

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/bernasdev/SpiceSoul.git](https://github.com/bernasdev/SpiceSoul.git)
    ```

2.  **Preparar a API:**
    ```bash
    cd SpiceSoul
    cd servidor
    npm install
    node server.js
    ```

3.  **Preparar o Front-End:**
    ```bash
    cd ..
    cd my-app
    npm install
    npm run dev
    ```

4.  **Acesse no navegador:**
    Abra [http://localhost:3000](http://localhost:3000) para ver o resultado.

---

## 🤝 Contribuição

Este é um projeto de estudo. Sinta-se à vontade para sugerir melhorias, especialmente relacionadas a Server Components ou otimização de imagens no Next.js!

---

## 🔗 Links

* Live Preview: [spicesoul.vercel.app](spicesoul.vercel.app)

* Repositório: [github.com/bernasdev/SpiceSoul](github.com/bernasdev/SpiceSoul)

---

Desenvolvido por [BernasDev](https://github.com/bernasdev)
