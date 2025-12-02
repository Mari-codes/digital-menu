# Digital Menu

## Leia em outros idiomas
- [English](../README.md)

Aplicação de menu digital construída com **React + Vite**, **JavaScript**, **Sass** e **CSS Modules**.  
A aplicação lista produtos e permite filtrar por **categoria** ou por **busca**.

---

## Funcionalidades

- Lista de produtos com imagem, nome, descrição, categoria e preço.
- Filtro por categoria com estado ativo.
- Campo de busca que filtra a partir de **3 caracteres**.
- Busca por **nome** e **descrição**.
- Combinação de filtros (categoria + busca).
- Layout responsivo.
- Estilização com **Sass** e **CSS Modules**.

---

## Stack

| Tecnologia | Uso |
|------------|-----|
| **React + Vite** | Estrutura e interface |
| **JavaScript** | Lógica e estados |
| **Sass** | Estilos com variáveis e mixins |
| **CSS Modules** | Escopo de estilos por componente 

---

## Lógica de Filtro

### Filtro por categoria
- Mostra produtos da categoria selecionada.
- Destaca a categoria ativa.

### Filtro de busca
- Ativo com **3 caracteres ou mais**.
- Busca em:
  - **nome**
  - **descrição**
- Funciona junto com o filtro por categoria.

---

## Como executar

### 1. Instalar dependências
```sh
npm install
```
### 2. Rodar em desenvolvimento

```sh
npm run dev
```
### 3. Gerar build

```sh
npm run build
```

## Screenshots

![Screenshot 1](src/assets/screenshots/categories.png)
![Screenshot 2](src/assets/screenshots/search-field.png)
![Screenshot 3](src/assets/screenshots/menu-grid.png)
