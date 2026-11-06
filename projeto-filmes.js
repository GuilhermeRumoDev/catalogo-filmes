// Importa a versão de readline que permite fazer perguntas com await.
const readline = require("readline/promises")

// Conecta a entrada e a saída do programa ao terminal.
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

// Coordena o programa: prepara os filmes, mostra o menu e executa a opção escolhida.
async function main() {

    const filmes = [
        { nome: "Sexta Feira 13", diretor: "Sean S. Cunningham", duracao: 97 },
        { nome: "Harry Potter", diretor: "Chris Columbus", duracao: 161 }
    ]

    // Valida os dados e adiciona o filme à lista se o nome ainda não estiver cadastrado.
    function adicionarFilme(nome, diretor, duracao) {
        if (nome.trim() === "" || diretor.trim() === "") {
            console.log("Título e diretor são obrigatórios")
            return
        }

        const filmeExistente = filmes.find((filme) => filme.nome === nome)

        if (filmeExistente) {
            console.log("Filme Duplicado!")
        } else {
            filmes.push({
                nome: nome,
                diretor: diretor,
                duracao: duracao
            })
        }
    }

    // Mostra uma mensagem se a lista estiver vazia ou exibe os dados de cada filme.
    function listarFilmes() {
        if (filmes.length === 0) {
            console.log("Nenhum filme cadastrado!")
        } else {
            filmes.forEach((filme) => {
                console.log(`Titulo: ${filme.nome}`)
                console.log(`Diretor: ${filme.diretor}`)
                console.log(`Duração: ${filme.duracao}`)
                console.log("---")
            })
        }


    }

    // Procura um filme pelo nome e o remove; se não encontrar, avisa o usuário.
    function removerFilme(removendoFilme) {
        let indiceFilme = filmes.findIndex((filme) => filme.nome === removendoFilme)

        if (indiceFilme !== -1) {
            filmes.splice(indiceFilme, 1)
            console.log()
            console.log("Filme removido!")
        } else {
            console.log()
            console.log("Filme não encontrado!")
        }
    }

    let opcao = "0"

    // Mantém o menu em execução até o usuário escolher a opção 4 (sair).
    while (opcao !== "4") {
        console.log("-------------------")
        console.log("1. Adicionar Filme")
        console.log("2. Listar Filmes")
        console.log("3. Remover Filme")
        console.log("4. Sair")

        console.log()
        opcao = await rl.question("Escolha uma opção: ")
        console.log()

        // Se a opção for 1, pergunta os dados do filme e chama a função de cadastro.
        if (opcao === "1") {

            const nomeFilme = await rl.question("Qual será o nome do filme ? ")

            const diretorFilme = await rl.question("Quem é o diretor do filme ? ")

            const duracaoFilme = Number(await rl.question("Quanto de duração terá o filme ? "))
            console.log()

            adicionarFilme(nomeFilme, diretorFilme, duracaoFilme)

        // Se a opção for 2, exibe todos os filmes cadastrados.
        } else if (opcao === "2") {
            listarFilmes()
            console.log()

        // Se a opção for 3, pergunta o título e chama a função de remoção.
        } else if (opcao === "3") {
            const nomeDoFilme = await rl.question("Qual o nome do filme que deseja remover ? ")

            removerFilme(nomeDoFilme)

        // Se não for nenhuma opção do menu, informa que a escolha é inválida.
        } else if (opcao !== "1" && opcao !== "2" && opcao !== "3" && opcao !== "4") {
            console.log("Opção inválida")
        }
    }


    rl.close()
}

main()
