interface Usuario {
    id: number,
    nome: string
}

interface UsuarioOpcional{
    id?: number,
    nome?: string
}

const atualizarUsuario: Partial<Usuario> = {id: 1};

const usuario: Required<UsuarioOpcional> = {id: 3, nome: "Lucas"};

const usuario2: Readonly<Usuario> = {id: 0, nome: "Lucas"};

type Status = "ativado" | "desativado" | "deletado";
type statusAtivo = Exclude<Status, "deletado">;
type statusBasico = Extract<Status, "ativado" | "desativado">;

type Nome = string | null | undefined;
type nomeValido = NonNullable<Nome>;