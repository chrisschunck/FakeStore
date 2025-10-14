# FakeStore Explorer — CP2 WebDev (TailwindCSS)

Projeto para a atividade CP2 — Mini Catálogo de Produtos.

## Tecnologias
- React + Vite
- React Router DOM
- TailwindCSS
- react-icons

## Como rodar
1. Instale dependências:
```bash
npm install
```

2. Rode em desenvolvimento:
```bash
npm run dev
```

3. Abra no navegador (Vite mostrará o endereço, normalmente http://localhost:5173)

## Estrutura
- `/` — Home com 3 seções (Eletrônicos, Joias, Roupas Masculinas)
- `/perfil` — Página de perfil (simples)
- `/carrinho` — Página do carrinho (simples)
- `/produto/:id` — Página de detalhes do produto

## Variável de ambiente
O projeto usa a variável `VITE_API_URL` para apontar a API. Já existe um `.env` com o valor padrão `https://fakestoreapi.com`. Se desejar mudar, atualize o `.env`.

## Observações
- Este projeto usa TailwindCSS. Se ao abrir apareçam erros relacionados a postcss/tailwind, rode `npm install` para garantir as dependências.
- Ícones de estrela foram implementados via `react-icons`.