# Cadastro de filmes

Projeto de estudo em JavaScript para cadastrar e gerenciar filmes pelo terminal, usando o módulo `readline/promises` do Node.js.

## Funcionalidades

- Adicionar filmes com nome, diretor e duração.
- Listar os filmes cadastrados.
- Remover um filme pelo nome.
- Avisar quando o nome ou diretor estiver vazio, quando o filme já estiver cadastrado ou quando o título da remoção não for encontrado.

## Como executar

1. Instale o [Node.js](https://nodejs.org/).
2. Abra o terminal na pasta do projeto.
3. Execute:

   ```bash
   node projeto.js
   ```

## Observação

Os filmes são armazenados apenas na memória enquanto o programa está rodando. Ao fechar e iniciar novamente, os filmes adicionados ou removidos durante a execução não são preservados. A lista inicial está definida no próprio arquivo `projeto.js`.
