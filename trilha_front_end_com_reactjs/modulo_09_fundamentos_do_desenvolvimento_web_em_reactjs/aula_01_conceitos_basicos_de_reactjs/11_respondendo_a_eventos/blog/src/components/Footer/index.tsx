import type { JSX } from "react/jsx-runtime";

export function Footer(): JSX.Element {
    const message = true;

    return (
        <footer>
            <p>© 2026 Meu Blog</p>
            {message && <p>Obrigado por vistar nosso blog!</p> }
        </footer>
    )
}