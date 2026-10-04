// Define o tipo que representa um usuário.
// id é obrigatório.
// O ? torna name e email opcionais.
type User = {
    id: number,
    name?: string,
    email?: string
}

// Required: torna todas as propriedades de User obrigatórias
type FullUser = Required<User>;

// Partial: torna todas as propriedades de User opcionais, incluindo o id
type UserUpdate = Partial<User>;

// User: informando apenas id obrigatorio
const usuario: User = {
    id: 1
}

// FullUser: temos que informar id, name e email
const usuarioCompleto: FullUser = {
    id: 2,
    name: "Lucas",
    email: "lucas@gmail.com"
}

// UserUpdate: podemos informar apenas propriedades desejadas
const atualizacao: UserUpdate = {
    name: "Lucas"
}

// Exibição
console.log("Usuário: ", usuario);
console.log("Usuário completo: ", usuarioCompleto);
console.log("Dados de atualização", atualizacao);

export {}