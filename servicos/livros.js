const fs= require ("fs")

function getTodosLivros(){
    return JSON.parse( fs.readFileSync("livros.json"))

}

function getLivroPorId(id){
    const livros = JSON.parse(fs.readFileSync("livros.json"))

    const livroFiltrado = livros.filter( livro => livro.id === id )[0]
    return livroFiltrado
}

function insereLivro(livroNovo) {
    const livros = JSON.parse(fs.readFileSync("livros.json"))
    const idExistente = livros.find(livro => livro.id === livroNovo.id)
    if (idExistente) {
      throw new Error("ID já existente no banco de dados")
    }
    const novaListaDeLivros = [ ...livros, livroNovo ]
    fs.writeFileSync("livros.json", JSON.stringify(novaListaDeLivros))
  }

module.exports = {
    getTodosLivros,
    getLivroPorId,
    insereLivro
}