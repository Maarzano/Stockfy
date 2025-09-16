# Stockfy — TCC (Controle de Almoxarifado)

> README acadêmico completo e direto. Contém: propósito do trabalho, tecnologias, estrutura do projeto, instruções de instalação/execução, exemplos de uso da API, sugestões para documentação do TCC, contribuição e licença.

---

## Sumário

1. Objetivo
2. Tecnologias
3. Principais funcionalidades
4. Estrutura do projeto (visão geral)
5. Pré-requisitos
6. Configuração e execução (Back-end / Front-end)
7. Variáveis de ambiente / `application.properties`
8. Exemplos de requisições (curl / JSON)
9. Swagger / Documentação da API
10. Banco de dados — esquema básico (MySQL)
11. Docker Compose (exemplo)
12. Contribuição

---

## 1. Objetivo

Sistema de controle de estoque (almoxarifado) destinado a gerenciar itens, movimentações (retiradas e devoluções), perfis de usuários/funcionários, aprovações e relatórios — entregue como Trabalho de Conclusão de Curso (TCC).

## 2. Tecnologias

* Back-end: **Spring Boot** (Java), OAuth2 (Google) + JWT, Swagger (OpenAPI)
* Banco de dados: **MySQL**
* Front-end: **React** (CRA), styled-components
* API: **REST**
* Ferramentas opcionais: Docker, Docker Compose, GitHub Actions (workflows)

## 3. Principais funcionalidades

* Autenticação via OAuth2 (Google) com emissão de JWT
* CRUD de `Item`
* Registro de `Movimentacao` (retirada / devolução) com status
* Gestão de `Funcionario` e `Usuario`
* Exportação (Excel/CSV) de histórico
* Interface web responsiva (React) com components reutilizáveis e hooks

---

## 4. Estrutura do projeto (visão geral)

Estrutura fornecida (copiada do seu repositório):

```
C:.
└───Stockfy
    ├───.github
    │   └───workflows
    └───TCC
        ├───BackEnd
        │   └───TCC
        │       └───src
        │           └───main
        │               ├───java
        │               │   └───TCC
        │               │       └───TCC
        │               │           ├───config
        │               │           ├───Controllers
        │               │           ├───DTOs
        │               │           │   ├───FuncionarioDTO
        │               │           │   ├───ItemDTO
        │               │           │   ├───MovimentacaoDTO
        │               │           │   └───UsuarioDTO
        │               │           ├───Entities
        │               │           │   └───Enum
        │               │           ├───Exceptions
        │               │           │   └───ItemsException
        │               │           ├───Repository
        │               │           ├───Security
        │               │           └───Service
        │               └───resources
        │                   └───db
        └───frontend
            ├───public
            └───src
                ├───Assets
                ├───Components
                ├───Context
                ├───Hooks
                ├───Pages
                ├───Routes
                ├───Services
                ├───Styles
                ├───Utils
                └───Visual
```

### Descrição rápida das pastas importantes (backend)

* `config`: configurações Spring (CORS, Swagger, segurança OAuth/JWT, beans)
* `Controllers`: controllers REST (endpoints)
* `Service`: lógica de negócios
* `Repository`: interfaces JPA
* `Entities`: mapeamentos JPA (Item, Movimentacao, Usuario, Funcionario, enums)
* `DTOs`: objetos para troca entre API e cliente
* `Security`: filtros, provider JWT/OAuth

### Descrição rápida (frontend)

* `Components`: componentes reaproveitáveis (Cart, Buttons, Cards, Modals)
* `Hooks`: hooks para consumir APIs (useMovimentacao, useProdutos, etc.)
* `Services`: wrappers HTTP (axios/fetch) que chamam a API
* `Pages`: telas (Gallery, Cart, Home, Config)
* `Context`: gerenciamento de estado (ex.: Cart Context)
* `Assets/Visual/Styles`: imagens, CSS/Styled-components

---

## 5. Pré-requisitos

* Java 21+ (ou versão alvo do projeto)
* Maven (ou `./mvnw` disponível)
* Node.js 16+ e npm (ou yarn)
* MySQL 8+ (ou Docker)
* (Opcional) Docker Compose

---

## 6. Configuração e execução

### Back-end (local)

1. Vá para a pasta do back-end:

```bash
cd Stockfy/TCC/BackEnd/TCC
```

2. Configure `src/main/resources/application.properties` (veja seção 7).
3. Build e execução:

```bash
# com wrapper Maven (recomendado)
./mvnw clean package
java -jar target/*.jar

# ou direto em dev (hot reload se Spring DevTools instalado)
./mvnw spring-boot:run
```

### Front-end (local)

1. Vá para a pasta front-end:

```bash
cd Stockfy/TCC/frontend
```

2. Instale dependências:

```bash
npm install
# ou
yarn
```

3. Ajuste `.env` (veja seção 7).
4. Executar em dev:

```bash
npm start
# ou
yarn start
```

---

## 7. Variáveis de ambiente / `application.properties` (exemplos)

### `application.properties` (exemplo mínimo)

```properties
# MySQL
spring.datasource.url=jdbc:mysql://localhost:3306/stockfy_db?useSSL=false&serverTimezone=UTC
spring.datasource.username=root
spring.datasource.password=senha
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true

# OAuth2 (Google)
spring.security.oauth2.client.registration.google.client-id=SEU_GOOGLE_CLIENT_ID
spring.security.oauth2.client.registration.google.client-secret=SEU_GOOGLE_CLIENT_SECRET
spring.security.oauth2.client.registration.google.redirect-uri={baseUrl}/oauth2/callback/google

# JWT (caso o backend gere um token)
app.jwt.secret=uma_chave_secreta_super_secreta
app.jwt.expiration-ms=3600000

# CORS / frontend origin
app.frontend.url=http://localhost:3000
```

### `.env` (frontend — exemplo)

```
REACT_APP_API_URL=http://localhost:8080/api
REACT_APP_GOOGLE_CLIENT_ID=SEU_GOOGLE_CLIENT_ID
```

**Observação:** substitua as chaves e senhas antes de rodar. Para TCC documente onde gerar as credenciais (Console Google Cloud → OAuth 2.0 Client IDs → Authorized redirect URIs).

---

## 8. Exemplos de requisições (curl / JSON)

> Supondo que você já possui um JWT `<TOKEN>` recebido após autenticação.

### Listar Items

```bash
curl -H "Authorization: Bearer <TOKEN>" \
     -H "Accept: application/json" \
     http://localhost:8080/api/items
```

### Criar Item (POST)

```bash
curl -X POST http://localhost:8080/api/items \
  -H "Authorization: Bearer <TOKEN>" \
  -H "Content-Type: application/json" \
  -d '{
        "nome":"Parafuso M6",
        "descricao":"Parafuso de aço inox",
        "quantidade": 100,
        "unidade":"un"
      }'
```

### Registrar Movimentação (POST)

```bash
curl -X POST http://localhost:8080/api/movimentacoes \
  -H "Authorization: Bearer <TOKEN>" \
  -H "Content-Type: application/json" \
  -d '{
        "itemId": 1,
        "funcionarioId": 2,
        "quantidade": 5,
        "tipoMovimentacao": "RETIRADA",
        "status": "PENDENTE",
        "dataMovimentacao": "2025-09-01T10:00:00"
      }'
```

---

## 9. Swagger / Documentação da API

* Endpoint típico: `http://localhost:8080/swagger-ui/index.html` ou `http://localhost:8080/swagger-ui.html`
* Certifique-se de habilitar a configuração `springdoc.swagger-ui.path` caso necessário.
* Para TCC inclua prints do Swagger e exemplos de endpoints testados (GET/POST/PUT/DELETE).

---

## 10. Banco de dados — esquema básico (MySQL)

Modelo simplificado (ajuste conforme suas entidades):

```sql
CREATE TABLE Usuario (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(255),
  email VARCHAR(255) UNIQUE,
  role VARCHAR(50),
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE Funcionario (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(255),
  matricula VARCHAR(50)
);

CREATE TABLE Item (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(255),
  descricao TEXT,
  quantidade INT,
  unidade VARCHAR(50),
  usuario_id INT,
  FOREIGN KEY (usuario_id) REFERENCES Usuario(id)
);

CREATE TABLE Movimentacao (
  id INT AUTO_INCREMENT PRIMARY KEY,
  item_id INT,
  funcionario_id INT,
  quantidade INT,
  tipoMovimentacao ENUM('RETIRADA','DEVOLUCAO'),
  status ENUM('PENDENTE','APROVADO','RECUSADO'),
  dataMovimentacao DATETIME,
  FOREIGN KEY (item_id) REFERENCES Item(id),
  FOREIGN KEY (funcionario_id) REFERENCES Funcionario(id)
);
```

---

## 11. Docker Compose (exemplo mínimo)

Arquivo `docker-compose.yml` para MySQL + backend:

```yaml
version: "3.8"
services:
  db:
    image: mysql:8
    environment:
      MYSQL_DATABASE: stockfy_db
      MYSQL_ROOT_PASSWORD: senha
    ports:
      - "3306:3306"
    volumes:
      - db_data:/var/lib/mysql

  backend:
    build: ./BackEnd/TCC
    depends_on:
      - db
    environment:
      SPRING_DATASOURCE_URL: jdbc:mysql://db:3306/stockfy_db?useSSL=false&serverTimezone=UTC
      SPRING_DATASOURCE_USERNAME: root
      SPRING_DATASOURCE_PASSWORD: senha
    ports:
      - "8080:8080"

volumes:
  db_data:
```

Ajuste `build` conforme Dockerfile do projeto.

---

## 12. Contribuição

* Workflow: `feature/<nome>`, `fix/<bug>`, pull requests para `dev`.
* Requisitos para PR: testes, documentação do endpoint (Swagger), update no CHANGELOG.
* Code style: Java — padrão Google/Oracle + formatação automática (`mvn fmt` / editorconfig). Frontend — ESLint + Prettier.

---
