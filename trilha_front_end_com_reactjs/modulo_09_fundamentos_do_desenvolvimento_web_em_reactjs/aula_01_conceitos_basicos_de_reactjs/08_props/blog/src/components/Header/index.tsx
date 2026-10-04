import type { JSX } from "react";

export function Header(): JSX.Element {

    const isUserLoggedIn: boolean = false;
    let message;

    if (isUserLoggedIn) {
        message = <p>Bem-vindo(a) de volta</p>
    } else {
        message = <p>Por favor, faça login para continuar.</p>
    }
    return (
        <header>
            <h1>Meu Blog</h1>
            {message}
        </header>
    )
}