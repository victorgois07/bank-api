# Bank Account API

API para operações de conta bancária, incluindo CRUD para contas e transações como depósito e retirada.

## 🚀 Começando

Essas instruções fornecerão uma cópia do projeto em execução na sua máquina local para fins de desenvolvimento e teste.

### 📋 Pré-requisitos

- Node.js
- Yarn (ou NPM)
- MongoDB

### 🔧 Instalação

1. Clone este repositório:
   \```bash
   git clone [url-do-repositorio]
   \```

2. Navegue até o diretório do projeto:
   \```bash
   cd account-bank
   \```

3. Instale as dependências:
   \```bash
   yarn install
   \```

4. Copie o `.env.example` e crie um arquivo `.env` com as variáveis de ambiente necessárias.

5. Execute o projeto:
   \```bash
   yarn dev
   \```

## 🛠️ Construído com

- [Express.js](https://expressjs.com/) - Framework web
- [TypeScript](https://www.typescriptlang.org/) - Superset de JavaScript
- [Prisma](https://www.prisma.io/) - ORM para MongoDB
- [Joi](https://joi.dev/) - Validação de dados
- [Swagger](https://swagger.io/) - Documentação de API

## 📌 Estrutura do Projeto

O projeto segue os princípios da Clean Architecture e SOLID, organizados em domínios.

- **core**: Contém a lógica de negócios e as entidades do domínio.
- **infra**: Contém a implementação de detalhes técnicos, como banco de dados e serviços externos.
- **middlewares**: Middlewares genéricos usados no projeto.
- **routes**: Definições de rota para a API.
- **config**: Configurações gerais e inicializações (por exemplo, Swagger).
- **useCases**: Casos de uso do domínio que representam as operações que podem ser realizadas no sistema.

## 📦 API Endpoints

Para uma descrição completa dos endpoints, consulte a documentação do Swagger em `/api-docs` após iniciar o servidor.

- **POST** `/bank-accounts`: Cria uma nova conta bancária.
- **GET** `/bank-accounts/:accountNumber`: Recupera detalhes de uma conta bancária com base no número da conta.
- **PUT** `/bank-accounts/:accountNumber`: Atualiza os detalhes de uma conta bancária.
- **DELETE** `/bank-accounts/:accountNumber`: Exclui uma conta bancária com base no número da conta.
- **GET** `/bank-accounts/:id`: Recupera detalhes de uma conta bancária com base no ID.
- **GET** `/bank-accounts`: Lista todas as contas bancárias.

## 📌 Versão

1.0.0
