import axios from 'axios';

const api = axios.create({
    baseURL: "https://books-api-j138.onrender.com"
});

// ========================================
// GET /books
// Lista todos os livros
// ========================================
async function listarLivros() {
    try {
        const resultado = await api.get("/books");

        const lista = resultado.data.data.map((item) => {
            return {
                id: item.id,
                titulo: item.title,
                resumo: item.resume
            };
        });

        console.log(lista);

    } catch (error) {
        console.log(error.response?.data || error.message);
    }
}


// ========================================
// GET /books/:id
// Busca um livro pelo ID
// ========================================
async function obterLivroPorId(id) {
    try {
        const resultado = await api.get(`/books/${id}`);

        console.log(resultado.data.data);

    } catch (error) {
        console.log(error.response?.data || error.message);
    }
}


// ========================================
// POST /books
// Cria um novo livro
// ========================================
async function criarLivro(dados) {
    try {
        const resultado = await api.post("/books", dados);

        console.log(resultado.data.data);

    } catch (error) {
        console.log(error.response?.data || error.message);
    }
}


// ========================================
// PUT /books/:id
// Atualiza um livro
// ========================================
async function atualizarLivro(id, dados) {
    try {
        const resultado = await api.put(`/books/${id}`, dados);

        console.log(resultado.data.data);
        console.log(resultado.status);
        

    } catch (error) {
        console.log(error.response?.data || error.message);
    }
}


// ========================================
// DELETE /books/:id
// Exclui um livro
// ========================================
async function excluirLivro(id) {
    try {
        const resultado = await api.delete(`/books/${id}`);

        console.log(resultado.data);

    } catch (error) {
        console.log(error.response?.data || error.message);
    }
}


// ========================================
// DADOS PARA TESTE
// ========================================

const livro = {
    title: "Revolução dos Bichos",
    resume: "Conta a história de uma revolução de animais na fazenda",
    totalPages: 120,
    isFavorite: false,
    authorId: "10c69b15-767f-487f-9b1c-68555a2b3f06"
};

const livroAtualizado = {
    title: "Revolução dos Bichos",
    resume: "Uma sátira política escrita por George Orwell",
    totalPages: 150,
    isFavorite: true,
    authorId: "10c69b15-767f-487f-9b1c-68555a2b3f06"
};


// ========================================
// TESTES
// ========================================

// LISTAR
// listarLivros();


// BUSCAR POR ID
// obterLivroPorId(
//     "e1701a2e-c50a-4df8-a6b3-b0831d1e7189"
// );


// CRIAR
// criarLivro(livro);


// ========================================
// TESTE 1 - ATUALIZAR LIVRO EXISTENTE
// ========================================

// atualizarLivro(
//     "e1701a2e-c50a-4df8-a6b3-b0831d1e7189",
//     livroAtualizado
// );


// ========================================
// TESTE 2 - ATUALIZAR LIVRO INEXISTENTE
// ========================================

atualizarLivro(
    "00000000-0000-0000-0000-000000000000",
    livroAtualizado
);


// ========================================
// TESTE 3 - ATUALIZAR SEM BODY
// ========================================

// atualizarLivro(
//     "e1701a2e-c50a-4df8-a6b3-b0831d1e7189"
// );


// EXCLUIR
// excluirLivro(
//     "e1701a2e-c50a-4df8-a6b3-b0831d1e7189"
// );